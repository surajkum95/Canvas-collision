 class Util{
     static getColors(){
        let colorArray = ['red', 'green', 'blue', 'yellow', 'black', 'orange', 'pink'];
        return colorArray;
    }
    static getRandomColor(colors){
        return colors[Math.floor(Math.random()*colors.length)];
    }
    static getNode(nodeElement){
        return document.querySelector(nodeElement);
    }
    static getDistance(x1, y1, x2, y2){
        let xDistance = x2 - x1;
        let yDistance = y2 - y1;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
}