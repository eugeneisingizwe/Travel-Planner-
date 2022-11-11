const router = require('express').Router();
const { Trip } = require('../../models');

// CREATE a trip
router.post('/', async (req, res) => {
  try {
    // TODO: Set up your query here

    const tripData = await Trip.create(req.body);
    res.status(200).json(tripData);
  
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
  try {
    // TODO: Set up your query here

    const tripData = await Trip.destroy({
      where: {id: req.body.id}
    });

    if (!tripData){
      res.status(400).json({message: "No trip with this id!"});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
