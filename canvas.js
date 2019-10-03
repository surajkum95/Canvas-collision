// import {Util} from './util';
let collision = null;
let ball = null;
let bigger = null;
let smaller = null;
const canvas = Util.getNode('canvas');
(function(){
    canvas.height = innerHeight;
    canvas.width = innerWidth;
})();
const c = canvas.getContext('2d');

const mouse = {
    x:undefined,
    y: undefined
}

class Ball {
    constructor(x, y, dx, dy, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }

    static draw(ballObject){
        c.beginPath();
        c.arc(ballObject.x, ballObject.y, ballObject.radius, 0, Math.PI * 2, false);
        c.strokeStyle = ballObject.color;
        c.stroke();
    }

    static update(ballObject){

        // if(ballObject.x + ballObject.radius + ballObject.dx > canvas.width || ballObject.x - ballObject.radius < 0){
        //     ballObject.dx = - ballObject.dx;
        // }

        // if(ballObject.y + ballObject.radius + ballObject.dy  > canvas.height || ballObject.y - ballObject.radius < 0){
        //     ballObject.dy = - ballObject.dy;
        // }

        // ballObject.x += ballObject.dx;
        // ballObject.y += ballObject.dy;

        Ball.draw(ballObject);
    }

}

class CollisionUI {

    ballObjectArray = [];

    static animate(){
        requestAnimationFrame(CollisionUI.animate);
        c.clearRect(0, 0, canvas.width, canvas.height);

        // Ball.update(bigger);

        // smaller.x = mouse.x;
        // smaller.y = mouse.y;
        // Ball.update(smaller);

        // if(Util.getDistance(bigger.x, bigger.y, smaller.x, smaller.y) < bigger.radius + smaller.radius){
        //     bigger.color = 'red'
        // } else{
        //     bigger.color = 'black';
        // }

        collision.ballObjectArray.forEach((ball) =>{
            Ball.update(ball);
        });
    }
    main(){
        this.ballObjectArray = [];
        for(let i=0;i<4; i++){
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let radius =  100;
            let dx = Math.random() * 3;
            let dy = Math.random() * 3;
            let color = Util.getRandomColor(Util.getColors());
            let ball = new Ball(x, y, dx, dy, radius, color);
            

         if(i!=0){
             for(let j=0;j<this.ballObjectArray.length;j++){
                 if(Util.getDistance(x, y, this.ballObjectArray[j].x, this.ballObjectArray[j].y) - 2* radius < 0){
                     x = Math.random() * canvas.width;
                     y = Math.random() * canvas.height;

                     j=-1;
                 }
             }
         }
         this.ballObjectArray.push(ball);
        }
        //  bigger = new Ball(300, 300, 0, 0, 100, 'black');
        //  smaller = new Ball(100, 30, 0, 0, 30, 'red'); 

        CollisionUI.animate();
    }
}

document.addEventListener('DOMContentLoaded', () => {
     collision = new CollisionUI();
     collision.main();
    //  ball = new Ball();
});
window.addEventListener('resize', () => {
    canvas.height = innerHeight;
    canvas.width = innerWidth;

    collision.main();
});
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});