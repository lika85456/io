import { Vector } from "../utils/Vector";

export enum PlayerType{
  Warrior = 0,
  Mage = 1,
  Assasin = 2
}

export class Player{

  constructor(public type:PlayerType,public score:number, private position:Vector=new Vector(0,0),private velocity:Vector=new Vector(0,0)){

  }

  public getPosition():Vector{
    return this.position;
  }

  public addScore(score:number):void{
    this.score+=score;
  }

  public updatePosition(position:Vector,velocity:Vector){
    this.position = position;
    this.velocity = velocity;
  }

  public move(ticks:number):void{
    this.position.move(this.velocity,ticks);
  }

  public getSize():number{
    return Math.log(this.score);
  }
}
