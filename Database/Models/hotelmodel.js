const mongoose=require("mongoose");
const hotelschema = new mongoose.Schema(
    {hotel_id :
    {
        type:String,
        required:true
    },
    hotel_name:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String,
        required:true
    },
    zipcode:
    {
        type:Number,
        required:true
    },
    city:
    {
        type:String,
        
    },
    state:
    {
        type:String,
        
    },
    Country:{
        type:String,
        // required:true
    },
    imageurls:[],
    star_rating:
    {
        type:Number,
        
    },
    ratings:
    {
        type:Number,
        
    },
    Rates:
    {
        type:Number,
        required:true
    },
    no_of_rooms:
    {
        type:Number
    },
    currency:
    {
        type:String
    },
    overview:
    {
        type:String,
        // required:true
    }
}
)



const hotelmodel=mongoose.model("hotels",hotelschema);

// <-----for inserting json file data to database----->
// const fs = require('fs');
// const path = require('path');

// const fullpath=path.resolve(__dirname, 'hotels.json')
// const rawData = fs.readFileSync(fullpath);
// const hotelsData = JSON.parse(rawData);
// for(const x of hotelsData)
// {
//     const newentry= new hotelmodel(
//         {hotel_id:x.hotel_id,
//         hotel_name:x.hotel_name,
//         address:x.addressline1,
//         zipcode:x.zipcode,
//         city:x.city,
//         state:x.state,
//         Country:x.country,
//         imageurls:[x.photo1,x.photo2,x.photo3,x.photo4,x.photo5],
//         star_rating:x.star_rating,
//         ratings:x.rating_average,
//         Rates:x.rates_from,
//         no_of_rooms:x.numberrooms,
//         currency:x.rates_currency,
//         overview:x.overview}
//     )
//     newentry.save().then(savedHotel => {
//         console.log(`Saved hotel: ${x.hotel_name}`);
//       })
//       .catch(error => {
//         console.error(`Error saving hotel: ${x.hotel_name}`, error);
//       });
// }
module.exports =hotelmodel;