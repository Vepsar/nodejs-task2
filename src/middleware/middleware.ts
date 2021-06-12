import fs from 'fs';
import express from 'express';
import { finished } from 'stream';
import dat from 'date-and-time';
import path from 'path';

var counter: number = 1;
var errcount: number = 1;

fs.writeFileSync(path.dirname(__dirname) + `/logs/logs.txt`, '');
fs.writeFileSync(path.dirname(__dirname) + `/logs/errors.txt`, '');

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const now: Date = new Date();
  const time: string = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');

  finished(req, res, (err) => {
    if (err) {
      next(err);
    }
    const log: string = `Log №${counter}\nTime: ${time}\nMethod: ${
      req.method
    } URL: ${req.url}\nParams: ${JSON.stringify(
      req.params
    )}\nBody: ${JSON.stringify(req.body)}\nStatus: ${res.statusCode} ${
      res.statusMessage
    }\n\n`;
    fs.appendFile(__dirname + `../../logs/logs.txt`, log, function (err) {
      if (err) {
        throw new Error();
      }
    });
    counter += 1;
    process.stdout.write(log);
  });
  res.on('finish', () => {});
  next();
};

const errorDefLogger = (
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  const correctCodes: Array<number> = [200, 201, 204];
  if (!correctCodes.includes(res.statusCode)) {
    const now: Date = new Date();
    const time: string = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');
    if (res.statusCode !== 404) {
      const stnderr: string = `Error №${errcount}\nTime: ${time}\nStatus: 500\nError message: Internal Server Error\n\n`;
      fs.appendFile(
        __dirname + `../../logs/errors.txt`,
        stnderr,
        function (err) {
          if (err) {
            throw err;
          }
        }
      );
      errcount += 1;
    } else {
      finished(_req, res, (err) => {
        const errlog: string = `Error №${errcount}\nTime: ${time}\nStatus: ${res.statusCode}\nError message: ${res.statusMessage}\n\n`;
        if (err) {
          throw err;
        }
        fs.appendFile(
          __dirname + `../../logs/errors.txt`,
          errlog,
          function (err) {
            if (err) {
              throw new Error();
            }
          }
        );
        errcount += 1;
        process.stdout.write(errlog);
      });
    }
  }
  next();
};

const errLogger = (
  err: Error,
  _req: express.Request,
  _res: express.Response,
  next: express.NextFunction
): void => {
  if (err) {
    const now: Date = new Date();
    const time: string = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');
    const stnderr: string = `Error №${errcount}\nTime: ${time}\nStatus: 500\nError message: Internal Server Error\n\n`;
    fs.appendFile(__dirname + `../../logs/errors.txt`, stnderr, function (err) {
      if (err) {
        throw err;
      }
    });
    errcount += 1;
    process.stdout.write(stnderr);
    next();
  }
};

const uncaughtExceptionHandler = (err: Error, origin: string): void => {
  const now: Date = new Date();
  const time: string = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');
  const stnderr: string = `Error №${errcount}\nTime: ${time}\nType: Uncaught Exception\nCaught exception: ${err}\nException origin: ${origin}\n\n`;
  fs.appendFile(__dirname + `../../logs/errors.txt`, stnderr, function (err) {
    if (err) {
      throw err;
    }
  });
  errcount += 1;
  process.stdout.write(stnderr);
};

const unhandledRejectionHandler = (
  reason: Error,
  _promise: Promise<any>
): void => {
  const now: Date = new Date();
  const time: string = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');
  const stnderr: string = `Error №${errcount}\nTime: ${time}\nType: Unhandled Rejection\nError message: ${reason}\n\n`;
  fs.appendFile(__dirname + `../../logs/errors.txt`, stnderr, function (err) {
    if (err) {
      throw err;
    }
  });
  process.stdout.write(stnderr);
};

export {
  logger,
  errorDefLogger,
  errLogger,
  uncaughtExceptionHandler,
  unhandledRejectionHandler,
};
