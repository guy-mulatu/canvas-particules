/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./resources/js/basics.js ***!
  \********************************/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particleArray = []; // handle mouse

var mouse = {
  x: null,
  y: null,
  radius: 100
};
window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});
ctx.fillStyle = 'white';
ctx.font = '30px Georgia';
ctx.fillText('A', 0, 40);
var data = ctx.getImageData(0, 0, 100, 100);

var Particle = /*#__PURE__*/function () {
  function Particle(x, y) {
    _classCallCheck(this, Particle);

    this.x = x + 100;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
  }

  _createClass(Particle, [{
    key: "draw",
    value: function draw() {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }, {
    key: "update",
    value: function update() {
      var dx = mouse.x - this.x;
      var dy = mouse.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 500) {
        this.size = 10;
      } else {
        this.size = 3;
      }
    }
  }]);

  return Particle;
}();

function init() {
  particleArray = [];

  for (var i = 0; i < 1000; i++) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    particleArray.push(new Particle(x, y));
  }
}

init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }

  requestAnimationFrame(animate);
}

animate();
/******/ })()
;