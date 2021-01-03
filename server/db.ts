import * as mongoose from 'mongoose'

class DataBase {

  private dbUrl = 'mongodb://localhost:27017/db-esk-crush-api'
  private dbConnection;

  constructor() {}

  createConnection() {
    mongoose.connect(this.dbUrl)    
    this.logger(this.dbUrl)
  }

  logger(uri) {
    this.dbConnection = mongoose.connection;
    this.dbConnection.on('connected', () => console.log('mongoose is connected'))
    this.dbConnection.on('error', error => console.error.bind(console, 'connection error ' + error))
  }
}

export default DataBase