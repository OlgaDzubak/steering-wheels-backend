const { Schema, model } = require("mongoose");
  
const swSchema = new Schema(
{
    name_ua:{
        type: String,
        required: [true, 'Set title field for photo (a string between 2 and 50 characters long)'],
        minlength: 2,
        maxlenght: 50,
        },
    name_ru:{
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
    photo_description_ua:{            
        type: String,
        required: [true, 'Set description field (a string between 10 and 500 characters long)'],
        minlength: 10,
        maxlenght: 500,
        },
    photo_description_ru:{            
        type: String,
        required: [true, 'Set description field (a string between 10 and 500 characters long)'],
        minlength: 10,
        maxlenght: 500,
    },
    material_ua:{
        type: String,
        required: [true, 'Set material field (a string between 3 and 50 characters long)'],
        minlength: 3,
        maxlenght: 50,
        default: "Замінник шкіри",
        },
    material_ru:{
        type: String,
        required: [true, 'Set material field (a string between 3 and 50 characters long)'],
        minlength: 3,
        maxlenght: 50,
        default: "Замінник шкіри",
        },
    photo_url:{
        type: String,
        required: [true, 'Set big image URL'],
        default: "https://res.cloudinary.com/dxvnh0oip/image/upload/v1746432535/steering-wheels-avif/Wheel_1000x1000_shblvh.avif",
        },
    photo_url_small:{
        type: String,
        required: [true, 'Set small image URL'],
        default: "https://res.cloudinary.com/dxvnh0oip/image/upload/v1746432535/steering-wheels-avif/Wheel_400x400_k4ieos.avif",
    },
},
{  
    versionKey: false,
    timestamps: true,
}
);


const SW = model('swheel', swSchema); 

module.exports = { SW };
