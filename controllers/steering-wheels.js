
const { SW } = require('../db/models/steering-wheels');
const { ctrlWrapper } = require('../helpers');
//const { mongoose } = require("mongoose");


const getCategories = async (req, res) => {
  
  const {language} = req.query;
  
  try {
    const resultDataAray = await SW.aggregate([
                                            { $project: { ["name_" + language]: 1, count: { $add: [1] } } },
                                            { $unwind: "$name_" + language },
                                            { $group: { _id: "$name_" + language, number: { $sum: "$count" } } },
                                            { $sort: {number: -1}},
                                            { $project: { _id: 0, category: "$_id" } }
    ]);
    const data =resultDataAray.map(({ category }) => category);
    
    res.setHeader('Cache-Control', 'max-age=31557600').json({ data });

  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
};


const getPhotos = async (req, res) => {
  
  const language = req.query.language || 'ua';
  const category = req.query.category || '';
  const query = {[`name_${language}`] : { $regex: category, $options: 'i' }};

  try {
    
    const data = await SW.find(query, {_id: 1, [`photo_description_${language}`]: 1, photo_url: 1, photo_url_small: 1,});
    res.setHeader('Cache-Control', 'max-age=31557600').json({ data });

  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  getCategories: ctrlWrapper(getCategories),
  getPhotos: ctrlWrapper(getPhotos),  
}
