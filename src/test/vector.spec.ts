import {expect} from 'chai';
import {Vector} from "../client/utils/Vector";

describe("Vector test", () => {
  it("Vector addition", () => {
    let vector = new Vector(5,3);
    vector.add(vector);
    expect(vector.getX()==10 && vector.getY()==6).to.be.true;
  });

  it("Vector moving", () => {
    let vector = new Vector(5,3);
    vector.add(vector);
    vector.move(new Vector(1,-1),2);
    expect(vector.getX()==12 && vector.getY()==4).to.be.true;
  });
});
