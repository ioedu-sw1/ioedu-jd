/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// Vue.use(VueMaterial.default)


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

var textJson = {
  'metadata': {
    'type': 'App'
  },
  'project': {
    'gammaInput': false,
    'gammaOutput': false,
    'shadows': true,
    'vr': false
  },
  'camera': {
    'metadata': {
      'version': 4.5,
      'type': 'Object',
      'generator': 'Object3D.toJSON'
    },
    'object': {
      'uuid': '237F56AB-D3FF-4AA4-8CCD-7578A5CE3D20',
      'type': 'PerspectiveCamera',
      'name': 'Camera',
      'matrix': [0.939236, 0, -0.343272, 0, -0.147782, 0.902586, -0.404351, 0, 0.309832, 0.430511, 0.847741, 0, 142.321259, 202.754852, 389.409363, 1],
      'fov': 50,
      'zoom': 1,
      'near': 0.1,
      'far': 100000,
      'focus': 10,
      'aspect': 1.57129,
      'filmGauge': 35,
      'filmOffset': 0
    }
  },
  'scene': {
    'metadata': {
      'version': 4.5,
      'type': 'Object',
      'generator': 'Object3D.toJSON'
    },
    'geometries': [
      {
        'uuid': '8F05A1F2-3877-478B-8DFC-F572AC61AB3A',
        'type': 'PlaneGeometry',
        'width': 300,
        'height': 400,
        'widthSegments': 1,
        'heightSegments': 1
      },
      {
        'uuid': '7149652B-DBD7-4CB7-A600-27A9AC005C95',
        'type': 'BoxGeometry',
        'width': 20,
        'height': 10,
        'depth': 10,
        'widthSegments': 1,
        'heightSegments': 1,
        'depthSegments': 1
      },
      {
        'uuid': 'EEDF0A9A-D174-44E4-9C2F-A2F5BB8BE7F5',
        'type': 'CylinderGeometry',
        'radiusTop': 5,
        'radiusBottom': 5,
        'height': 20,
        'radialSegments': 32,
        'heightSegments': 1,
        'openEnded': false
      },
      {
        'uuid': 'CABCC711-1331-4D4C-9FF6-409299F10C68',
        'type': 'SphereGeometry',
        'radius': 5,
        'widthSegments': 32,
        'heightSegments': 16,
        'phiStart': 0,
        'phiLength': 6.28,
        'thetaStart': 0,
        'thetaLength': 3.14
      },
      {
        'uuid': 'EFBF641D-F092-462E-B7FB-0BFAD1591EFC',
        'type': 'BoxGeometry',
        'width': 20,
        'height': 10,
        'depth': 10,
        'widthSegments': 1,
        'heightSegments': 1,
        'depthSegments': 1
      }],
    'materials': [
      {
        'uuid': '2F69AF3A-DDF5-4BBA-87B5-80159F90DDBF',
        'type': 'MeshPhongMaterial',
        'color': 86015,
        'emissive': 0,
        'specular': 1118481,
        'shininess': 30,
        'depthFunc': 3,
        'depthTest': true,
        'depthWrite': true
      },
      {
        'uuid': 'D98FC4D1-169E-420A-92EA-20E55009A46D',
        'type': 'MeshBasicMaterial',
        'color': 63744,
        'depthFunc': 3,
        'depthTest': true,
        'depthWrite': true,
        'wireframe': true
      },
      {
        'uuid': '3B9DE64D-E1C8-4C24-9F73-3A9E10E3E655',
        'type': 'MeshPhongMaterial',
        'color': 16777215,
        'emissive': 0,
        'specular': 1118481,
        'shininess': 30,
        'depthFunc': 3,
        'depthTest': true,
        'depthWrite': true
      },
      {
        'uuid': '043B208C-1F83-42C6-802C-E0E35621C27C',
        'type': 'MeshPhongMaterial',
        'color': 16777215,
        'emissive': 0,
        'specular': 1118481,
        'shininess': 30,
        'depthFunc': 3,
        'depthTest': true,
        'depthWrite': true
      },
      {
        'uuid': '40EC9BDA-91C0-4671-937A-2BCB6DA7EEBB',
        'type': 'MeshBasicMaterial',
        'color': 63744,
        'depthFunc': 3,
        'depthTest': true,
        'depthWrite': true,
        'wireframe': true
      }],
    'object': {
      'uuid': '31517222-A9A7-4EAF-B5F6-60751C0BABA3',
      'type': 'Scene',
      'name': 'Scene',
      'matrix': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      'children': [
        {
          'uuid': 'EBBB1E63-6318-4752-AE2E-440A4E0B3EF3',
          'type': 'Mesh',
          'name': 'Ground',
          'matrix': [1, 0, 0, 0, 0, 0.000796, -1, 0, 0, 1, 0.000796, 0, 0, 0, 0, 1],
          'geometry': '8F05A1F2-3877-478B-8DFC-F572AC61AB3A',
          'material': '2F69AF3A-DDF5-4BBA-87B5-80159F90DDBF'
        },
        {
          'uuid': '6EE2E764-43E0-48E0-85F2-E0C8823C20DC',
          'type': 'DirectionalLight',
          'name': 'DirectionalLight 1',
          'matrix': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 100, 200, 150, 1],
          'color': 16777215,
          'intensity': 1,
          'shadow': {
            'camera': {
              'uuid': '346D382D-C8E1-41BD-8464-4766CB43E9CD',
              'type': 'OrthographicCamera',
              'zoom': 1,
              'left': -5,
              'right': 5,
              'top': 5,
              'bottom': -5,
              'near': 0.5,
              'far': 500
            }
          }
        },
        {
          'uuid': '38219749-1E67-45F2-AB15-E64BA0940CAD',
          'type': 'Mesh',
          'name': 'Brick',
          'matrix': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 5, 0, 1],
          'geometry': '7149652B-DBD7-4CB7-A600-27A9AC005C95',
          'material': 'D98FC4D1-169E-420A-92EA-20E55009A46D',
          'children': [
            {
              'uuid': '711A5955-8F17-4A8B-991A-7604D27E6FA0',
              'type': 'Mesh',
              'name': 'Cylinder',
              'matrix': [0.000796, 0.000796, 1, 0, -1, 0, 0.000796, 0, 0, -1, 0.000796, 0, 0, 0, 0, 1],
              'geometry': 'EEDF0A9A-D174-44E4-9C2F-A2F5BB8BE7F5',
              'material': '3B9DE64D-E1C8-4C24-9F73-3A9E10E3E655'
            }]
        },
        {
          'uuid': '18FFA67C-F893-4E7A-8A76-8D996DEBE0C6',
          'type': 'Mesh',
          'name': 'Ball',
          'matrix': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 5, 35.549999, 1],
          'geometry': 'CABCC711-1331-4D4C-9FF6-409299F10C68',
          'material': '043B208C-1F83-42C6-802C-E0E35621C27C'
        },
        {
          'uuid': '6D660D49-39B8-40C3-95F6-E4E007AA8D79',
          'type': 'Mesh',
          'name': 'Paddle',
          'matrix': [2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 5, 159.539993, 1],
          'geometry': 'EFBF641D-F092-462E-B7FB-0BFAD1591EFC',
          'material': '40EC9BDA-91C0-4671-937A-2BCB6DA7EEBB',
          'children': [
            {
              'uuid': '4F5F884C-9E1B-45E6-8F1E-4D538A46D8CB',
              'type': 'Mesh',
              'name': 'Cylinder',
              'matrix': [0.000796, 0.000796, 1, 0, -1, 0, 0.000796, 0, 0, -1, 0.000796, 0, 0, 0, 0, 1],
              'geometry': 'EEDF0A9A-D174-44E4-9C2F-A2F5BB8BE7F5',
              'material': '3B9DE64D-E1C8-4C24-9F73-3A9E10E3E655'
            }]
        },
        {
          'uuid': 'B0BEAF69-8B5D-4D87-ADCA-FDE83A02762D',
          'type': 'PointLight',
          'name': 'PointLight 2',
          'matrix': [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -116.543564, 69.489571, -206.824829, 1],
          'color': 16777215,
          'intensity': 1,
          'distance': 0,
          'decay': 1,
          'shadow': {
            'camera': {
              'uuid': 'AEC3B8E5-350B-49E3-BCD2-A0DF329B8461',
              'type': 'PerspectiveCamera',
              'fov': 90,
              'zoom': 1,
              'near': 0.5,
              'far': 500,
              'focus': 10,
              'aspect': 1,
              'filmGauge': 35,
              'filmOffset': 0
            }
          }
        }],
      'background': 11184810
    }
  },
  'scripts': {
    '6D660D49-39B8-40C3-95F6-E4E007AA8D79': [
      {
        'name': 'User',
        'source': 'function mousemove( event ) {\n\n\tthis.position.x = ( event.clientX / player.width ) * 300 - 150;\n\n}\n\n// function update( event ) {}'
      }],
    '31517222-A9A7-4EAF-B5F6-60751C0BABA3': [
      {
        'name': 'Game Logic',
        'source': "var ball = this.getObjectByName( 'Ball' );\n\nvar direction = new THREE.Vector3();\ndirection.x = Math.random() - 0.5;\ndirection.z = - 0.5;\ndirection.normalize();\n\nvar speed = new THREE.Vector3();\n\n//\n\nvar group = new THREE.Group();\nthis.add( group );\n\nvar paddle = this.getObjectByName( 'Paddle' );\npaddle.material.visible = false;\ngroup.add( paddle );\n\nvar brick = this.getObjectByName( 'Brick' );\n\nfor ( var j = 0; j < 8; j ++ ) {\n\n\tvar material = new THREE.MeshPhongMaterial( { color: Math.random() * 0xffffff } );\n\n\tfor ( var i = 0; i < 12; i ++ ) {\n\t\t\n\t\tvar object = brick.clone();\n\t\tobject.position.x = i * 22 - 120;\n\t\tobject.position.z = j * 14 - 120;\n\t\tgroup.add( object );\n\n\t\tvar cylinder = object.getObjectByName( 'Cylinder' );\n\t\tcylinder.material = material;\n\n\t}\n\t\n}\n\nbrick.visible = false;\nbrick.material.visible = false;\n\n//\n\nvar raycaster = new THREE.Raycaster();\n\nfunction update( event ) {\n\t\n\tif ( ball.position.x < - 150 || ball.position.x > 150 ) direction.x = - direction.x;\n\tif ( ball.position.z < - 200 || ball.position.z > 200 ) direction.z = - direction.z;\n\n\tball.position.x = Math.max( - 150, Math.min( 150, ball.position.x ) );\n\tball.position.z = Math.max( - 200, Math.min( 200, ball.position.z ) );\n\t\n\tball.position.add( speed.copy( direction ).multiplyScalar( event.delta / 4 ) );\n\t\n\traycaster.set( ball.position, direction );\n\t\n\tvar intersections = raycaster.intersectObjects( group.children );\n\t\n\tif ( intersections.length > 0 ) {\n\t\n\t\tvar intersection = intersections[ 0 ];\n\t\t\n\t\tif ( intersection.distance < 5 ) {\n\t\t\t\n\t\t\tif ( intersection.object !== paddle ) {\n\n\t\t\t\tgroup.remove( intersection.object );\n\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t\tdirection.reflect( intersection.face.normal );\n\t\t\t\n\t\t}\n\t\t\n\t}\n\n}"
      }]
  }
}
$('#btn_sendPython').click(function () {
  $('#p_info').text('btn_sendPython is clicked')
  pyapi.api_test1('this is data from js', js_callback_api_test1)
  // api_test1('this is data from js', js_callback_api_test1)
})
function js_callback_api_test1(result, callback_js_python) {
  $('#p_callback').text(result.para1)
  callback_js_python('this is final callback js to py')
}
function push_python_js(arguments) {
  $('#p_python').text(arguments)
}


var player = new THREEAPP.Player()
player.load(textJson)
player.setSize(800, 600)
player.play()

var threeContainer = document.getElementById('three')
threeContainer.appendChild(player.dom)

window.addEventListener('resize', function () {
  player.setSize(800, 600)
})


/***/ })
/******/ ]);