
export enum PlayerType{
  Warrior = 0,
  Mage = 1,
  Assasin = 2
}

export interface Player{
  getType():PlayerType;
  getLevel():number;
  getSpeed():number;//squares/tick
}
