# coding:utf-8
# Tutorial example. Doesn't depend on any third party GUI framework.
# Tested with CEF Python v56.2+

from cefpython3 import cefpython as cef
import base64
import os
import platform
import sys
import threading
import subprocess
import time
import json
import random
import numpy as np
# HTML code. Browser will navigate to a Data uri created
# from this html code.
HTML_code = ""
DRIVER_NAME = "jd-solution"

pname = os.path.join(os.getcwd(), 'driver\driver.exe')
print(pname)
p = subprocess.Popen(
    [pname],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    shell=False)


def main():
    """the main method
    """
    check_versions()
    sys.excepthook = cef.ExceptHook  # To shutdown all CEF processes on error
    cef.DpiAware.EnableHighDpiSupport()
    settings = {}
    cef.Initialize(settings=settings)
    browserSettings = {
        # "remote_fonts": True
    }
    url_html_code = os.path.join(os.getcwd(), 'output.html')
    browser = cef.CreateBrowserSync(
        url=url_html_code, window_title="机电传感器实验", settings=browserSettings)
    set_client_handlers(browser)
    set_javascript_bindings(browser)

    cef.MessageLoop()
    cef.Shutdown()
    # p.kill()


def check_versions():
    """check cef version
    """
    assert cef.__version__ >= "56.2", "CEF Python v56.2+ required to run this"


def _get_html(abs_html_path):
    """get html by absolute file path
    
    Arguments:
        abs_html_path {string} -- absolute file path
    """
    print("currentpwdis" + abs_html_path)
    with open(abs_html_path, 'r', encoding='UTF-8') as f:
        return f.read()
    return ""


def set_client_handlers(browser):
    """set client handlers
    
    Arguments:
        browser {Browser } -- the google chrome handle
    """
    client_handlers = [LifespanHandler()]
    for handler in client_handlers:
        browser.SetClientHandler(handler)


class LifespanHandler(object):
    """a handler to handle life span
    
    Arguments:
        object {object} -- python object
    """

    def OnBeforeClose(self, browser):
        """an event triggered before app close
        
        Arguments:
            browser {Browser} -- the google chrome handle
        """
        print('before closing ....')


def set_javascript_bindings(browser):
    """set javascript bindings
    
    Arguments:
        browser {Browser} -- the google chrome handle
    """
    bindings = cef.JavascriptBindings(bindToFrames=False, bindToPopups=False)
    pyapi = PyAPI(browser)
    bindings.SetObject("pyapi", pyapi)
    browser.SetJavascriptBindings(bindings)


class PyAPI(object):
    """can be called by js
    
    Arguments:
        object {object} -- python object
    """
    msgRecieverTimer = None
    Read_R_Timer = None
    Read_DCVoltage_Timer = None
    js_callback_Read_R = None
    js_callback_Read_DCVoltage = None

    def __init__(self, browser):
        self.browser = browser
        self.msgRecieverTimer = threading.Timer(0.1, self.msgReciever)
        self.msgRecieverTimer.start()

    def msgReciever(self):
        result_str = p.stdout.readline()
        print(result_str)
        resultObj = json.loads(result_str)
        subject = resultObj['subject']
        if subject == 'Heart_Beat':
            # print(resultObj)
            pass
        elif subject == 'R':
            result = {}
            result['R'] = resultObj['payload']['callback_msg']
            self.js_callback_Read_R.Call(result)
        elif subject == 'DCVoltage':
            result = {}
            result['DCVoltage'] = resultObj['payload']['callback_msg']
            self.js_callback_Read_DCVoltage.Call(result)
        elif subject == 'Oscilloscope':
            result = {}
            result['Oscilloscope'] = resultObj['payload']['callback_msg']
            print(result['Oscilloscope'])
            pass
        else:
            pass
        # restart timer
        self.msgRecieverTimer = threading.Timer(0.1, self.msgReciever)
        self.msgRecieverTimer.start()

    def _raise_Read_R(self):
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Read_R'

        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

        # restart timer
        self.Read_R_Timer = threading.Timer(2, self._raise_Read_R)
        self.Read_R_Timer.start()

    def _raise_Read_DCVoltage(self):
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Read_DCVoltage'

        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

        # restart timer
        self.Read_DCVoltage_Timer = threading.Timer(2,
                                                    self._raise_Read_DCVoltage)
        self.Read_DCVoltage_Timer.start()

    def api_getPageHtml(self, exId, js_callback):
        """get some page html file
        
        Arguments:
            exId {string} -- the experiment id
            js_callback {method} -- callback to javascript
        """
        rel_path = './pages/' + exId + '/page.html'
        abs_html_path = os.path.join(os.getcwd(), rel_path)
        # abs_html_path = rel_path
        htmlstr = _get_html(abs_html_path)
        result = {}
        result['pageHtml'] = htmlstr
        js_callback.Call(result)

    def api_calculate_Polyfit_NonlinearError(self, xArr, yArr, deg,
                                             js_callback):
        """this api is for calculate polyfit result and nonlinear error
        
        Arguments:
            xArr {list} -- x array
            yArr {list} -- y array
            deg {int} -- degree
            js_callback {method} -- callback to javascript
        """
        result = {}
        np_xArr = np.array(xArr)
        np_yArr = np.array(yArr)
        # send back input data
        result['xArr'] = xArr
        result['yArr'] = yArr

        # get polyfit result
        np_polyfit_result = np.polyfit(np_xArr, np_yArr, deg)
        result['polyfit_result'] = np_polyfit_result.tolist()
        # get polyfit data
        np_polyfit_data = np_xArr * np_polyfit_result[0] + np_polyfit_result[1]
        result['polyfit_data'] = np_polyfit_data.tolist()
        # get nonlinear error
        np_error = np_yArr - np_polyfit_data
        nonlinear_error = np.max(np_error) / np.max(np.array(yArr))
        result['nonlinear_error'] = nonlinear_error
        # get max and min of polyfit result
        x_min = np.min(np_xArr)
        x_max = np.max(np_xArr)

        x_polyfit_min = x_min
        if x_min > 0:
            x_polyfit_min = 0
        x_polyfit_max = x_max
        if x_polyfit_max == x_polyfit_min:
            x_polyfit_max = x_polyfit_max + 1

        y_min = np.min(np_yArr)
        y_max = np.max(np_yArr)

        y_polyfit_min = x_min * np_polyfit_result[0] + np_polyfit_result[1]
        y_polyfit_max = x_max * np_polyfit_result[0] + np_polyfit_result[1]

        result['x_min'] = x_min
        result['x_max'] = x_max

        result['x_polyfit_min'] = x_polyfit_min
        result['x_polyfit_max'] = x_polyfit_max

        result['y_min'] = y_min
        result['y_max'] = y_max

        result['y_polyfit_min'] = y_polyfit_min
        result['y_polyfit_max'] = y_polyfit_max

        # print result
        print(result)
        # send callback to js
        js_callback.Call(result)

    def api_driver_init_startAI(self, exId):
        """send Init command to driver.exe,and then start AI
        
        Arguments:
            exId {string} -- experiment id
        """

        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Init'
        msg['payload'] = exId
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Start_AI'
        msg['payload'] = {}
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

    def api_driver_init(self, exId):
        # ----------- stop all timing loop -----------
        # stop read R
        self.api_driver_stop_Read_R()
        # stop read DCVoltage
        self.api_driver_stop_Read_DCVoltage()
        # stop read Oscilloscope
        # stop FunctionGenerator

        # ----------- send init msg -----------
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Init'
        msg['payload'] = exId
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

    def api_driver_startAI(self):
        """send Start_AI command to driver.exe
        """
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Start_AI'
        msg['payload'] = {}
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

    def api_driver_start_Read_R(self, js_callback):
        print('start_Read_R')
        self.js_callback_Read_R = js_callback
        self.Read_R_Timer = threading.Timer(1, self._raise_Read_R)
        self.Read_R_Timer.start()

    def api_driver_stop_Read_R(self):
        if self.Read_R_Timer:
            self.Read_R_Timer.cancel()

    def api_driver_start_Read_DCVoltage(self, js_callback):
        print('start_Read_DCVoltage')
        self.js_callback_Read_DCVoltage = js_callback
        self.Read_DCVoltage_Timer = threading.Timer(1,
                                                    self._raise_Read_DCVoltage)
        self.Read_DCVoltage_Timer.start()

    def api_driver_stop_Read_DCVoltage(self):
        if self.Read_DCVoltage_Timer:
            self.Read_DCVoltage_Timer.cancel()

    def api_driver_start_oscilloscope(self, percent):
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Start_Oscilloscope'
        msg['payload'] = percent
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

    def api_driver_stop_oscilloscope(self):
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Stop_Oscilloscope'
        msg['payload'] = {}
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

    def api_driver_start_functiongen(self, para):
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Start_Function'
        msg['payload'] = para
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()

    def api_driver_stop_functiongen(self):
        msg = {}
        msg['app'] = DRIVER_NAME
        msg['command'] = 'Stop_Function'
        msg['payload'] = {}
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()


if __name__ == '__main__':
    """the entry method
    """
    main()
