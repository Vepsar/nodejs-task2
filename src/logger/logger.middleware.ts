// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { WinstonModule } from 'nest-winston';
// import logconfig from 'src/common/logconfig';

// @Injectable()
// export class LoggerMiddlware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     const logger = WinstonModule.createLogger(logconfig);

//     logger.log({
//       url: req.originalUrl,
//       method: req.method,
//       body: JSON.stringify(req.body),
//       statusCode: res.statusCode,
//       statusMessage: res.statusMessage,
//     });
//     next();
//   }
// }

// await queryRunner.query(
//     `INSERT INTO "user" (name, login, password) VALUES ('admin', 'admin', '${await createHash(
//       'admin',
//     )}')`,
//   );
