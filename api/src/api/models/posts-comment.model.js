import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PostsCommentSchema = new Schema({
  content: { type: String, required: true },
  posts_id: { type: Schema.Types.ObjectId, ref: 'posts', required: true },
  is_deleted: { type: Boolean, default: false },
  created_by: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('posts-comment', PostsCommentSchema);
