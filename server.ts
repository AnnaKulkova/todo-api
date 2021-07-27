import createApp from './src/createApp';
import db from './src/config/database';

const port = process.env.PORT || 3000;

const app = createApp(db);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
