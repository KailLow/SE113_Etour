import { connectMongo } from './database';
import { runHttpServer } from './runServer';
import os from 'os';
// import osUtils from 'os-utils'

// import * as SMTPServer from 'smtp-server'

async function startServer() {
  await connectMongo();
  await runHttpServer();


  // console.log();
  console.log(os.totalmem());
  console.log(os.freemem());
}

startServer();
