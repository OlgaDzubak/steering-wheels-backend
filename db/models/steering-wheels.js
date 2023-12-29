const { Schema, model } = require("mongoose");
  
const swSchema = new Schema(
{
    name:{
        type: String,
        required: [true, 'Set title field for photo (a string between 2 and 50 characters long)'],
        minlength: 2,
        maxlenght: 50,
    },
    car_brand:{
        type: String,
        required: [true, 'Set car_brand field (a string between 2 and 20 characters long)'],
        minlength: 2,
        maxlenght: 20,
    },
    photo_description:{            
        type: String,
        required: [true, 'Set description field (a string between 10 and 500 characters long)'],
        minlength: 10,
        maxlenght: 500,
    },
    photo_url:{
        type: String,
        required: [true, 'Set image URL'],
        default: "https://res.cloudinary.com/dxvnh0oip/image/upload/v1703542581/steering-wheels/Photo_1_bikpmi.png",
    },
    material:{
        type: String,
        required: [true, 'Set material field (a string between 3 and 50 characters long)'],
        minlength: 3,
        maxlenght: 50,
        default: "Замінник шкіри",
    },
},
{  
    versionKey: false,
    timestamps: true,
}
);


const SW = model('swheel', swSchema); 

module.exports = { SW };
