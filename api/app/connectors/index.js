import { MONGO_URI } from '../config';
import mongooseConnector from './mongoose-connector';

function connectrorsInit() {
  mongooseConnector(MONGO_URI);
}

export {
  mongooseConnector,
};

export default connectrorsInit;
