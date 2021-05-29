// const { PORT } = require('./common/config');
import config from './common/config';
const PORT = config.PORT;
// const app = require('./app');
import { app } from './app';

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
