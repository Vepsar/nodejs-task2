import { ormconfig } from '../common/ormconfig';
import { Connection, createConnection, getConnection } from 'typeorm';

const connectToDB = async () => {
  let connection: Connection | undefined = await createConnection(ormconfig);
  try {
    connection = getConnection();
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
        console.log('connection.name');
      } else {
        console.log('Connection exist');
      }
    }
    console.log('Connection done well');
  } catch (err) {
    console.log('SMTH go wrong');
    if (err) {
      console.error(err);
    }
  }
};

export const tryConnectDB = async (func: () => void) => {
  try {
    await connectToDB();
    func();
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
};
