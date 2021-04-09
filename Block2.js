class Block2 {
    constructor(x, y, width, height, color) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed>3){
        World.remove(world, this.body);
        push();
        this.visibility=this.visibility-5;
        pop();
      }
      else{
        push();
        fill(255, 190, 196);
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
    }
    
  }