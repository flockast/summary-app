import app from './app';
import {PORT} from './config';

const server = app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on PORT: ${PORT}`);
});

export default server;

