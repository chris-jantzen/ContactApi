import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose'
import { Routes } from './routes/crmRoutes';
import { keys } from './config/config';

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = keys.mongoUrl;

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void{
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void{
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(this.mongoUrl,  { useNewUrlParser: true })
      .then(() => console.log('MongoDB connected...'))
      .catch(err => console.log(err));
  }
}

export default new App().app;