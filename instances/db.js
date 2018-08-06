import mongoose from 'mongoose'
import dbConfigs from '~/configs/mongodb'

mongoose.connect(dbConfigs.mongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

export default db;
