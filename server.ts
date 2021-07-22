import app from './src/app';
const port = process.env.PORT || 3000;

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
