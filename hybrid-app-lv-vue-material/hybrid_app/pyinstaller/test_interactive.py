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

pname = os.path.join(os.getcwd(), 'lv\lvbuilds\wrapper.exe')
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
    timer = threading.Timer(1.0, doTimer)
    timer.start()


isTimerEnable = True
timer = threading.Timer(1.0, doTimer)
timer.start()

# -- send command --
msg = {}
msg['app'] = 'jd-solution'
msg['command'] = 'Start_AI'
msg['payload'] = random.random()
jsonStr_msg = json.dumps(msg)
jsonStr_msg += '\n'
print(jsonStr_msg)
p.stdin.write(jsonStr_msg.encode('utf-8'))
p.stdin.flush()

index = 0
while True:
    time.sleep(1)
    index += 1
    if index == 5:
        p.kill()
        break

os.kill(os.getpid(), signal.SIGTERM)
