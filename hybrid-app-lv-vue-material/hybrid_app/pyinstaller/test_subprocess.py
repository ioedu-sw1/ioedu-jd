import subprocess
import os
import time
import json
import threading

pname = os.path.join(os.getcwd(), 'lv\lvbuilds\wrapper.exe')
print(pname)


class targetThread(threading.Thread):
    def __init__(self, threadID, name, counter):
        threading.Thread.__init__(self)
        self.threadID = threadID
        self.name = name
        self.counter = counter

    def run(self):
        p = subprocess.Popen(
            [pname],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            shell=False)

        while True:
            time.sleep(1)
            msg = "heart\n".encode('utf-8')
            p.stdin.write(msg)
            p.stdin.flush()

            result_str = p.stdout.readline()
            jsonObj = json.loads(result_str)
            print(jsonObj['payload'])


thread = targetThread(222222, 'robinthrd', 1)
thread.run()
thread.start()

print('main thread')
