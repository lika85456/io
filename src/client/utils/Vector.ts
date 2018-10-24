export class Vector{
  constructor(private x:number,private y:number){

  }

  public add(v:Vector):void{
    this.x+=v.x;
    this.y+=v.y;
  }

  public addPartially(v:Vector,part:number):void{
    this.x += (this.x-v.x)*part;
    this.y += (this.y-v.y)*part;
  }


  public move(v:Vector,ticks:number):void{
    for(let i=0;i<ticks;i++)
    {
      this.add(v);
    }
  }

  public getX():number
  {
    return this.x;
  }

  public getY():number
  {
    return this.y;
  }

  public clamp(xMax:number,yMax:number):void{
    if(this.x>xMax) this.x=xMax;
    if(this.y>yMax) this.x=yMax;
  }
}
