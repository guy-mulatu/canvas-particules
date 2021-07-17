require('./bootstrap');

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
canvas.width =  window.innerWidth;
canvas.height =  window.innerHeight;
let particlesArray = [];
const numberOfParticles = 500;

//measure title element
let titleElement = document.getElementById('title1');
let titleMeasurements = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10
}

class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = (Math.random() * 10)  + 3;
            this.weight = 2;
            this.directionX = 4;
        }

        update() {
            if (this.y > canvas.height) {
                this.y = Math.random() * canvas.height;
                this.weight = 2;
                this.x = Math.random() * canvas.width;
            }

            this.weight += 0.01;
            this.y += this.weight;
            this.x += this.directionX;

            //check for collision between each particle and title element
            if (
                this.x < title.x + title.width
                && this.x + this.size > title.x
                && this.y < title.y + title.height
                && this.y + this.size > title.y
            ) {
                this.y -= 3;
                this.weight *= -0.5;
                this.directionX = 7;
            }
        }

        draw() {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.lineWidth = 2;
            ctx.strokeStyle="maroon";
            ctx.stroke();
            ctx.closePath();
            ctx.fill()
        }
    }

function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));
        }
}
init()

function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10
    }
    init()
});

