import { Board } from 'src/boards/entities/board.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
import { ConnectionOptions } from 'typeorm';
import {
  // POSTGRES_DB,
  // POSTGRES_HOST,
  // POSTGRES_PASSWORD,
  // POSTGRES_PORT,
  // POSTGRES_USER,
  PSQL_DB,
  PSQL_HOST,
  PSQL_PASSWORD,
  PSQL_PORT,
  PSQL_USER,
} from './config';

const ormconfig = {
  type: 'postgres',
  synchronize: false,
  host: PSQL_HOST,
  port: Number(PSQL_PORT),
  username: PSQL_USER,
  password: PSQL_PASSWORD,
  database: PSQL_DB,
  // host: POSTGRES_HOST,
  // port: Number(POSTGRES_PORT),
  // username: POSTGRES_USER,
  // password: POSTGRES_PASSWORD,
  // database: POSTGRES_DB,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
  migrationsRun: true,
  entities: [User, Board, Task],
  migrations: ['dist/migrations/**/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
} as ConnectionOptions;

export default ormconfig;
