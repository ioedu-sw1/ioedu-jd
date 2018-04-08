import os
import sys
import threading
import subprocess
import time
import json
import signal
import random

# HTML code. Browser will navigate to a Data uri created
# from this html code.
HTML_code = ""

pname = os.path.join(os.getcwd(), 'driver\jd-Bridge.exe')
print(pname)
p = subprocess.Popen(
    [pname],
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
    stderr=subprocess.STDOUT,
    shell=False)


def doTimer():
    ''' recieve message from subprocess'''
    result_str = p.stdout.readline()
    print(result_str)
    timer = threading.Timer(0.2, doTimer)
    timer.start()


isTimerEnable = True
timer = threading.Timer(0.2, doTimer)
timer.start()

time.sleep(10)
print('Initial')
# -- send command --
msg = {}
msg['app'] = 'jd-Bridge'
msg['command'] = 'Initial'
msg['payload'] = 'jd-solution-1'
jsonStr_msg = json.dumps(msg)
jsonStr_msg += '\n'
p.stdin.write(jsonStr_msg.encode('utf-8'))
p.stdin.flush()

time.sleep(1)
print('Start_AI')
msg = {}
msg['app'] = 'jd-Bridge'
msg['command'] = 'Start_AI'
msg['payload'] = {}
jsonStr_msg = json.dumps(msg)
jsonStr_msg += '\n'
p.stdin.write(jsonStr_msg.encode('utf-8'))
p.stdin.flush()

index = 0
while True:
    time.sleep(1)
    index += 1
    if index == 40:

        p.kill()
        break
    elif index == 30:
        msg = {}
        msg['app'] = 'jd-Bridge'
        msg['command'] = 'Stop_AI'
        msg['payload'] = {}
        jsonStr_msg = json.dumps(msg)
        jsonStr_msg += '\n'
        p.stdin.write(jsonStr_msg.encode('utf-8'))
        p.stdin.flush()
        pass

os.kill(os.getpid(), signal.SIGTERM)