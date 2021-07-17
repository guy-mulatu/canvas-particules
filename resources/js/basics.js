const canvas = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 100
}

window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

ctx.fillStyle = 'white';
ctx.font = '30px Georgia';
ctx.fillText('A', 0, 40);
const data = ctx.getImageData(0, 0, 100, 100)

class Particle {
    constructor(x, y) {
        this.x = x + 100;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0 , Math.PI * 2);
        ctx.closePath();
        ctx.fill()
    }
    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 500) {
            this.size = 10;
        } else {
            this.size = 3;
        }
    }
}

function init() {
    particleArray = [];
    for (let i = 0; i < 1000; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArray.push(new Particle(x, y))
    }
}

init();

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
    }
    requestAnimationFrame(animate);
}

animate();



