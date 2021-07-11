// import { timestamp } from 'rxjs';
import winston, { format } from 'winston';

const logconfig = {
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: 'info',
      filename: 'logs/logs.txt',
      format: format.combine(
        format.timestamp({ format: 'DD-MMM-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(
          (info) =>
            `${info['timestamp']} Method: ${info['method']}; PATH: ${info['url']}; STATUS: ${info['statusCode']}\nBody: ${info['body']}\nQuerryParams: ${info['querry']}\n`,
        ),
      ),
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'logs/errors.txt',
      format: format.combine(
        format.timestamp({ format: 'DD-MMM-YYYY HH:mm:ss' }),
        format.align(),
        format.printf(
          (info) =>
            `${info['timestamp']} Method: ${info['method']}; PATH: ${info['url']}; STATUS: ${info['statusCode']}\nError: ${info['error']}\n`,
        ),
      ),
    }),
  ],
};

export default logconfig;
