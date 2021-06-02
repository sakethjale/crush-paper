class P{
  constructor(x,y,radius){
      var pp={
          'restitution':0.3,
          'friction':0,
          'density':1.2,
          isStatic:false
      }
      this.body=Bodies.circle(x,y,radius,pp)
      this.x=x;
      this.y=y;
      this.radius=radius;
      
      this.image=loadImage("paper.png")
      World .add(world,this.body)
  }
  display(){
      var pos=this.body.position;
     // var angle=this.body.angle;
      imageMode(CENTER);
      push ()
      translate (pos.x,pos.y);
     // rotate (angle);
     image(this.image,0,0,this.radius,this.radius);
      pop ();
  }
}