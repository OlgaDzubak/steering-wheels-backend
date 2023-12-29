
const { SW } = require('../db/models/steering_wheels');
const { ctrlWrapper } = require('../helpers');
const { mongoose } = require("mongoose");

const getPhotos = async (req, res) => {
  
  const { page, per_page } = req.query;
  const currentPage = parseInt(page) || 1;
  const limit = parseInt(per_page) || 9;
  const skip = (currentPage - 1) * limit;

  try {

      const totalCount = await Recipe.countDocuments();
      const data = await SW.find().skip(skip).limit(limit).select('_id, name, photo_url, photo_description, material');
      res.json(data);

  } catch (error) {
    
      res.status(500).json({ error: 'Internal Server Error' });
  }
};




module.exports = { getPhotos : ctrlWrapper(getPhotos), }
