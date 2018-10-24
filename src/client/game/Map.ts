import Quadtree = require("../../../node_modules/quadtree-lib/typings/quadtree");
import { Player } from "./Player";

export default class Map{

  public tree:any;

  constructor(public size:number,public foodCount:number){
    this.tree = new Quadtree({
      width: size,
      height: size,
      maxElements: foodCount //Optional
    });
  }

  public addRandomFood(n:number):Uint16Array{
    let food = new Uint16Array(n*2);
    for(let i = 0;i<n*2;i+=2)
    {
      food[i] = Math.floor(Math.random()*this.size);
      food[i+1] = Math.floor(Math.random()*this.size);
      this.tree.push({x:food[i],y:food[i+1]});
    }
    return food;
  }

  public eat(player:Player){
    let playerSize = player.getSize();
    let playerSize2 = playerSize*playerSize;
    var colliding = this.tree.colliding({
      x: player.getPosition().getX(),
      y: player.getPosition().getX(),
      width: playerSize, //Optional
      height: playerSize //Optional
    },(e1:{x:number,y:number},e2:{x:number,y:number})=>{
      return Math.abs(e1.x-e2.x)+Math.abs(e1.y-e2.y)<playerSize2;
    });

    this.removeFood(colliding);
  }

  private removeFood(items:{x:number,y:number}[]){
    for(let i = 0;i<items.length;i++)
    {
      this.tree.remove(items[i]);
    }
  }
}
