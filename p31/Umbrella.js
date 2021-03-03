class Umbrella
{
	constructor(x,y)
	{
		var options={
			isStatic:True
			
			}
		this.x=x;
		this.y=y;
    this.image=loadImage("man.jpg")
		this.body=Bodies.circle(this.x, this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var umpos=this.body.position;		

			push()
			translate(umpos.x, umpos.y);
			strokeWeight(3);
            fill(255,0,255)
            imageMode(CENTER)
			image(this.image,0,0);
			pop()
			
	}

}