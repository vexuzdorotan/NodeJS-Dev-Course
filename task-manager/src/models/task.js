const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

taskSchema.pre('save', async function (next) {
  console.log('modified msg before save');

  next();
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
