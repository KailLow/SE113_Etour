import { port } from './config';
import Logger from './core/Logger';
import httpServer from './httpServer';

export function runHttpServer(): Promise<any> {
  return new Promise((resolve, reject) => {
    httpServer
      .listen(port, () => {
        Logger.info(`server running on port : ${port}`);
        resolve('Http server is running');
      })
      .on('error', (e) => {
        Logger.error(e);
        reject(e);
      });
  });
}
