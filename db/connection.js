import mongoose from "mongoose";

const MDB_URI = process.env.PROD_DB || 'mongodb://localhost/organs'

mongoose.connect(MDB_URI).catch(err => console.log('coulndn\'t establish database connection'))


mongoose.connection.on('disconnected', () => console.log('Disconnect from MongoDB :( '))

mongoose.connection.on('error', err => console.log(err))

export default mongoose.connection