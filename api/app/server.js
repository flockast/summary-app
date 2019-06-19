import app from './app';

const PORT = process.env.port || 4000;

const server = app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on PORT: ${PORT}`);
});

export default server;

