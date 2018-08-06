import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const rpgSchema = new Schema({
   name: String,
   owner: String,
   sheetModel: {
      pointsBase: Number,
      test: Array,
      info: Array,
      status: Array,
      inventory: Boolean,
      picture: Boolean,
      attributes: Array
   },
   sheets: Array
});

const Rpg = mongoose.model('Rpg', rpgSchema);

export default Rpg;
