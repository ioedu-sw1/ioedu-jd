import json
import random
msg = {}
msg['app'] = 'app-01-01'
msg['command'] = 'weight'
msg['paylod'] = random.random()
jsonStr = json.dumps(msg)
print(jsonStr)
