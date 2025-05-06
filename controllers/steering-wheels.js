
const { SW } = require('../db/models/steering-wheels');
const { ctrlWrapper } = require('../helpers');


const getAllCategoriesAndPhotos = async (req, res) => {
  
    const language = req.query.language || 'ua';
  
    try {

      //дістаємо всі категорії
      const categoriesArray = await SW.aggregate([
                                              { $project: { ["name_" + language]: 1, count: { $add: [1] } } },
                                              { $unwind: "$name_" + language },
                                              { $group: { _id: "$name_" + language, number: { $sum: "$count" } } },
                                              { $sort: {number: -1}},
                                              { $project: { _id: 0, category: "$_id" } }
      ]);

      //дістаємо всі photo
      const photos = await SW.find({}, {_id: 1, [`photo_description_${language}`]: 1, photo_url: 1, photo_url_small: 1,});
      
      const categories = categoriesArray.map(({ category }) => category);

      const data = {
        categories,
        photos
      };     
      
      res.setHeader('Cache-Control', 'max-age=31557600').json({ data });
  
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const getCategories = async (req, res) => {
  
  const language = req.query.language || 'ua';
  
  try {
    const resultDataArray = await SW.aggregate([
                                            { $project: { ["name_" + language]: 1, count: { $add: [1] } } },
                                            { $unwind: "$name_" + language },
                                            { $group: { _id: "$name_" + language, number: { $sum: "$count" } } },
                                            { $sort: {number: -1}},
                                            { $project: { _id: 0, category: "$_id" } }
    ]);
    
    const data =resultDataArray.map(({ category }) => category);
    
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
  getAllCategoriesAndPhotos: ctrlWrapper(getAllCategoriesAndPhotos),
  getCategories: ctrlWrapper(getCategories),
  getPhotos: ctrlWrapper(getPhotos),  
}
