let assert = require("assert");
let script = require("../script.js");

describe("script", () => {
  describe("#encode(clement)", () => {
    it("should return this code", () => {
      assert.equal(script.encode("clement"), "-.-. .-.. . -- . -. -");
    });
  });
  describe("#decode(julien en morse)", () => {
    it("should return this code", () => {
      assert.equal(script.decode(".--- ..- .-.. .. . -."), "J U L I E N");
    });
  });
});
