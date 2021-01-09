class SlingShot {
    constructor(bodyA,pointB){
      var option = {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.04,
          length : 10,
      }
      this.pointB = pointB
      this.sling1 = loadImage("sprites/sling1.png")
      this.sling2 = loadImage("sprites/sling2.png")
      this.sling3 = loadImage("sprites/sling3.png")
      this.sling = Constraint.create(option)
      World.add(world,this.sling)
    }

    fly(){
      this.sling.bodyA = null
    }

    attach (bodyA){
      this.sling.bodyA = bodyA
    }
    display() {
      image (this.sling1,200,100,50,150)
      image (this.sling2,167,90,50,100)
      stroke (48,22,8)
if (this.sling.bodyA){
    var pointA = this.sling.bodyA.position
    var pointB = this.pointB
    push ()
if (pointA.x < 220){
  strokeWeight(7)
  line (pointA.x-20,pointA.y,pointB.x-10,pointB.y+20)
  line (pointA.x+24,pointA.y,pointB.x+30,pointB.y+20)
  image (this.sling3,pointA.x-20,pointA.y-10,15,20)
}else{
  strokeWeight(3)
  line (pointA.x+20,pointA.y,pointB.x-10,pointB.y+20)
  line (pointA.x+20,pointA.y,pointB.x+30,pointB.y+20)
  image (this.sling3,pointA.x+20,pointA.y-10,15,20)
}
    pop ()
   }
}
       
}