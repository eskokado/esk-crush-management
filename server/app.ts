import * as express from 'express'
import * as bodyParser from 'body-parser'

import database from './db'
import controller from './controller'

class App {
  public app: express.Application
  private database: database;
  private controller: controller;

  constructor() {
    this.app = express()
    this.middleware()
    this.database = new database();
    this.database.createConnection()
    this.controller = new controller();

    this.routes()
  }

  middleware() {
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({extended: true}))
  }

  routes() {
    this.app.route('/')
      .get((req, res) => res.status(200).json({"result": "Hello World!"}))
    this.app.route('/api/crushs')
      .get((req, res) => this.controller.select(req, res))
    this.app.route('/api/crushs/:id')
      .get((req, res) => this.controller.selectOne(req, res))
    this.app.route('/api/crushs/:id')
      .delete((req, res) => this.controller.deleteOne(req, res))
    this.app.route('/api/crushs/:id')
      .put((req, res) => this.controller.updateOne(req, res))
  }

}

export default new App()