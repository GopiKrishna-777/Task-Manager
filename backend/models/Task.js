const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const TaskModel = mongoose.model('Task', TaskSchema);
module.exports = TaskModel;