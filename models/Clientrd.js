const ClientrdSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false,
      unique: true
    },
    contact: {
      type: Number,
      required: true
    },
    Aadhaar: {
        type: Number,
        required: true
      },
    pan: {
        type: Number,
        required: true
      },
    date: {
      type: Date,
      default: Date.now
    }
  });