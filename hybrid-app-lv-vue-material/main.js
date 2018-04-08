Vue.use(VueMaterial.default)

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


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


var container = document.getElementById('three')
var scene = null
var camera = null

var loader = new THREE.FileLoader()

loader.load('app.json', function (obj) {
  var app=JSON.parse(obj)
  var objectLoader=new THREE.ObjectLoader()
  scene = objectLoader.parse(app['scene'])
  camera = objectLoader.parse(app['camera'])
})

var renderer = new THREE.CanvasRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

function animate() {

  requestAnimationFrame(animate);

  render();
  // stats.update();

}

function render() {
  // renderer.render(scene)
  renderer.render(scene, camera);

}

animate()

// var player = new THREEAPP.Player()
// player.load(textJson)
// player.setSize(800, 600)
// player.play()

// var threeContainer = document.getElementById('three')
// threeContainer.appendChild(player.dom)

// window.addEventListener('resize', function () {
//   player.setSize(800, 600)
// })

// loading .obj file

//
