import mongoose from 'mongoose';

export default (mongoUri) => {
  if (!mongoUri) {
    throw Error('Mongo uri is undefined');
  }
  mongoose
      .connect(mongoUri, { useNewUrlParser: true })
      .then((res) => {
        console.log('Mongo connected');
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
};
