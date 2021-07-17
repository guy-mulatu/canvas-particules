require('./bootstrap');

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
canvas.width =  window.innerWidth;
canvas.height =  window.innerHeight;
let particlesArray = [];

class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 10;
            this.weight = 2;
            this.directionX = 1;
        }

        update() {
            if (this.y > canvas.height) {
                this.y = 0 - this.size;
                this.weight = 2;
                this.x = Math.random() * canvas.width;
            }

            this.weight += 0.01;
            this.y += this.weight;
            this.x += this.directionX;
        }

        draw() {
            ctx.fillStyle = 'maroon';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill()
        }
    }

const particle1 = new Particle(100, 10)

function animate() {
    ctx.fillStyle = 'rgba(255, 235, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    particle1.update();
    particle1.draw();
    requestAnimationFrame(animate);
}

animate();

