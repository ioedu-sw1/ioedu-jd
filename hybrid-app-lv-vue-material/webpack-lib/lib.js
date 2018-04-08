// // fonts loading
// require('../public/fonts/toolkit-entypo.eot')
// require('../public/fonts/toolkit-entypo.ttf')
// require('../public/fonts/toolkit-entypo.woff')
// require('../public/fonts/toolkit-entypo.woff2')

// css loading
require('../public/stylesheets/vue-material.css')
require('../public/stylesheets/themes/default.css')

// jquery
jquery = require('../public/javascripts/lib/jquery.min.js')
window.$ = jquery
window.jQuery = jquery

// vue
var vue = require('../public/javascripts/lib/vue.js')
window.Vue = vue

var vueMaterial = require('../public/javascripts/lib/vue-material.js')
window.VueMaterial = vueMaterial
Vue.use(VueMaterial.default)

// three.js
var three = require('../public/javascripts/lib/three.min.js')
window.THREE = three
// Projector.js, before CanvasRenderer
require('../public/javascripts/lib/renderers/Projector.js')
// CanvasRenderer.js
require('../public/javascripts/lib/renderers/CanvasRenderer.js')
// // .obj file loader
// require('../public/javascripts/lib/loaders/OBJLoader.js')

// // threeapp.js
// var threeapp = require('../public/javascripts/app/threeapp.js')
// window.THREEAPP = threeapp
