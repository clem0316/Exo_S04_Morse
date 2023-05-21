let assert = require("assert");
let script = require("../script");

describe("script", () => {
  describe("#decode(clement)", () => {
    it("should return this code", () => {
      assert.equal(script.decode("clement"), "-.-. .-.. . -- .-.. -. -");
    });
  });
});
