class Tree {

    constructor(x,y,width,height){
        var options = {
            'restitution':0.0,
            'friction':0.3,
            'density':1.0
        } 
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("Plucking+mangoes/tree.png");
 }
    display(){
        var pos =this.body.position;
       image(this.image, pos.x, pos.y, this.width, this.height);

    }

}