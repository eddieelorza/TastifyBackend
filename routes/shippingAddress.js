const express = require('express');
const router = express.Router();
const sequelize = require('../db');

// Get all resconst Addresses = await sequelize.models.Addresses
router.get('/', async (req, res) => {
  const Addresses = await sequelize.models.Addresses.findAndCountAll();
  return res.status(200).json({ data: Addresses });
});

// Create a new address
router.post('/', async (req, res) => {
  const { body } = req;
  const address =  await sequelize.models.Addresses.create({
    name: body.name,
    lastName: body.lastName,
    address: body.address,
    postCode: body.postCode,
    state: body.state,
    city: body.city,
    numTel: body.numTel

  });
  await address.save();
  return res.status(201).json({ data: address })
});

// Update a address by id
router.put('/:id', async (req, res) => {
  const { body, params: { id } } = req;
  const address = await sequelize.models.Addresses.findByPk(id);
  if (!address) {
    return res.status(404).json({ code: 404, message: 'address not found' });
  }
  const updatedAddress = await address.update({
    name: body.name,
    lastName: body.lastName,
    address: body.address,
    postCode: body.postCode,
    state: body.state,
    city: body.city,
    numTel: body.numTel
  });
  return res.json({ data: updatedAddress });
});

// Delete a address by id
router.delete('/:id', async (req, res) => {
  const { params: { id } } = req;
  const address = await sequelize.models.Addresses.findByPk(id);
  if (!address) {
    return res.status(404).json({ code: 404, message: 'address not found' });
  }
  await address.destroy();
  return res.json();
});

module.exports = router;