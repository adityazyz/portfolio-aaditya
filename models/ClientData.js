const mongoose = require('mongoose');

const { Schema } = mongoose;

const ClientDataSchema = new Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  Message: { type: String, required: true }
}, {
  strict: false
});

// Clear the existing models to prevent overwrite issues in development
if (mongoose.models['client-data']) {
  delete mongoose.models['client-data'];
}

const ClientDataModel = mongoose.model('client-data', ClientDataSchema);

module.exports = ClientDataModel;
