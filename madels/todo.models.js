import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: true,
      required: true,
    },
    conplete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtodo',
      },
    ], //array of sub todos
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
