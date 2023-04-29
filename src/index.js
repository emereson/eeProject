import app from './app';

const port = process.env.PORT || 4016;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
