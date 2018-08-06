import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const charSchema = new Schema({
   owner: String,
   locked: Boolean,
   name: String,
   info: Schema.Types.Mixed,
   status: Schema.Types.Mixed,
   inventory: Schema.Types.Mixed,
   attributes: Schema.Types.Mixed
});

const Char = mongoose.model('Char', charSchema);

export default Char;
