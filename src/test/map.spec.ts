import {expect} from 'chai';
import Map from "../client/game/Map";

describe("Map test", () => {
  it("Map construction", () => {
    let map:Map = new Map(10000,100000);
    console.log(map.tree.pretty());
    expect(true).to.be.true;
  });
});
