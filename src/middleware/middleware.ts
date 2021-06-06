import fs from 'fs';
import express from 'express';
import { finished } from 'stream';
import dat from 'date-and-time';

var counter = 1;
var errcount = 1;
fs.writeFileSync(__dirname + `../../logs/logs.txt`, '');
fs.writeFileSync(__dirname + `../../logs/errors.txt`, '');
function logger(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const now = new Date();
  const time = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');

  finished(req, res, (err) => {
    if (err) {
      next(err);
    }
    const log: string = `Log №${counter}
    Time: ${time}
    Method: ${req.method} URL: ${req.url}
    Params: ${JSON.stringify(req.params)}
    Body: ${JSON.stringify(req.body)}
    Status: ${res.statusCode} ${res.statusMessage}\n
    `;
    fs.appendFile(__dirname + `../../logs/logs.txt`, log, function (err) {
      if (err) {
        throw new Error();
      }
    });
    counter += 1;
    // console.log(log);
  });
  res.on('finish', () => {});
  next();
}

function errorDefLogger(
  _req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const correctCodes = [200, 201, 204];
  if (!correctCodes.includes(res.statusCode)) {
    const now = new Date();
    const time = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');
    if (res.statusCode !== 404) {
      const stnderr: string = `Error №${errcount}
    Time: ${time}
    Status: 500
    Error message: Internal Server Error
      \n`;
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
        const errlog: string = `Error №${errcount}
    Time: ${time}
    Status: ${res.statusCode}
    Error message: ${res.statusMessage}
    \n`;
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
      });
    }
  }

  //
  // process.on('uncaughtException',()=>{})
  // process.on('unhandledRejection', ()=>{})
  next();
}

function errLogger(
  err: Error,
  _req: express.Request,
  _res: express.Response,
  next: express.NextFunction
) {
  if (err) {
    const now = new Date();
    const time = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');
    const stnderr: string = `Error №${errcount}
    Time: ${time}
    Status: 500
    Error message: Internal Server Error
      \n`;
    fs.appendFile(__dirname + `../../logs/errors.txt`, stnderr, function (err) {
      if (err) {
        throw err;
      }
    });
    errcount += 1;
    // process.stdout.write('a')
    next();
  }
}

function uncaughtExceptionHandler(err: Error, origin: string) {
  fs.writeSync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
  const now = new Date();
  const time = dat.format(now, 'ddd, DD.MMM.YY  HH:mm:ss');
  const stnderr: string =
    `Error №${errcount}
  Time: ${time}
  Caught exception: ${err}\n` +
    `Exception origin: ${origin}
    \n`;
  fs.appendFile(__dirname + `../../logs/errors.txt`, stnderr, function (err) {
    if (err) {
      throw err;
    }
  });
  errcount += 1;
}

export { logger, errorDefLogger, errLogger, uncaughtExceptionHandler };
