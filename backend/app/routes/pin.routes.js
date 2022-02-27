module.exports = app => {
    const pins = require("../controllers/pin.controller.js");
    var router = require("express").Router();
    // Create a new Pin
    router.post("/", pins.create);
    // Retrieve all Pins
    router.get("/", pins.findAll);
    // Retrieve a single Pin with id
    router.get("/:id", pins.findOne);
    // Update a Pin with id
    router.put("/:id", pins.update);
    // Delete a Pin with id
    router.delete("/:id", pins.delete);
    // Delete all Pins
    router.delete("/", pins.deleteAll);
    app.use('/api/pins', router);
  };
  