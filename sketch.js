const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    polygon= Bodies.circle(500, 100, 20,{density:2});
    World.add(world,polygon);

    ground = new Ground(500, 590, 1000, 20);

    //Stand 1
    stand1 = new Ground(285,500, 270, 15);
    
    //Bottom row
    block1 = new Block(195, 480, 30, 40);
    block2 = new Block(225, 480, 30, 40);
    block3 = new Block(255, 480, 30, 40);
    block4 = new Block(285, 480, 30, 40);
    block5 = new Block(315, 480, 30, 40);
    block6 = new Block(345, 480, 30, 40);
    block7 = new Block(375, 480, 30, 40);

    //2nd row
    block8 = new Block2(225, 440, 30, 40);
    block9 = new Block2(255, 440, 30, 40);
    block10 = new Block2(285, 440, 30, 40);
    block11 = new Block2(315, 440, 30, 40);
    block12 = new Block2(345, 440, 30, 40);

    //3rd row
    block13 = new Block3(255, 400, 30, 40);
    block14 = new Block3(285, 400, 30, 40);
    block15 = new Block3(315, 400, 30, 40);

    //top row
    block16 = new Block4(285, 360, 30, 40);

    //Stand 2
    stand2 = new Ground(750,350, 210, 15);

    //bottom row
    block17 = new Block(685, 330, 30, 40);
    block18 = new Block(715, 330, 30, 40);
    block19 = new Block(745, 330, 30, 40);
    block20 = new Block(775, 330, 30, 40);
    block21 = new Block(805, 330, 30, 40);

    //2nd row
    block22 = new Block2(715, 290, 30, 40);
    block23 = new Block2(745, 290, 30, 40);
    block24 = new Block2(775, 290, 30, 40);

    //top row
    block25 = new Block3(745, 250, 30, 40);
    
    slingshot = new SlingShot(this.polygon,{ x:500, y:100 });
}

function draw(){
    background(60, 46, 46);
   
    Engine.update(engine);

    ground.display();

    //Stand 1
    stand1.display();
    
    //Bottom row
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    
    //2nd row
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    //3rd row
    block13.display();
    block14.display();
    block15.display();

    //top row
    block16.display();

    //Stand 2
    stand2.display();
    
    //bottom row
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    //2nd row
    block22.display();
    block23.display();
    block24.display();

    //top row
    block25.display();

    fill(rgb(217, 213, 184))
    textSize(25);
    text('Drag the Hexagonal Stone and Release it, to launch it toward the block', 25, 50);
    text('Press Space for Second Chance!', 25, 100);

    imageMode(CENTER);
    image(polygon_img, polygon.position.x,polygon.position.y, 40, 40);
    slingshot.display();
  }
  function mouseDragged() {
    Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
  }
  function mouseReleased() {
    slingshot.fly();
  }
  function keyPressed(){
      if(keyCode===32){
          slingshot.attach(polygon);
      }
  }