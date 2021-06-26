import { PORT } from './common/config';
import { app } from './app';

import { tryConnectDB } from './utils/dbconnect';

tryConnectDB(() => {
  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
