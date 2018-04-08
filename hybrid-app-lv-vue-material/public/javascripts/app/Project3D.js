var Project3D = {
  Loader: function () {
    this.parseScene = function (json) {}
    this.parseCamera = function (json) {}
  }

}
if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = Project3D
  }
  exports.Project3D = Project3D
} else {
  this['Project3D'] = Project3D
}
