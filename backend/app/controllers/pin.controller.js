const db = require("../models");
const Pin = db.pins;
const Op = db.Sequelize.Op;

// Create and Save a new Pin
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Pin
  const pin = {
    title: req.body.title,
    description: req.body.description,
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  };
  // Save Pin in the database
  Pin.create(pin)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pin."
      });
    });
};

// Retrieve all Pins from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Pin.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Pins."
        });
      });
  
};

// Find a single Pin with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Pin.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Pin with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Pin with id=" + id
        });
      });
  
};

// Update a Pin by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Pin.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pin was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Pin with id=${id}. Maybe Pin was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Pin with id=" + id
        });
      });
  
};

// Delete a Pin with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Pin.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pin was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Pin with id=${id}. Maybe Pin was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Pin with id=" + id
        });
      });
  
};

// Delete all Pins from the database.
exports.deleteAll = (req, res) => {
    Pin.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Pins were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Pins."
          });
        });
    
};
