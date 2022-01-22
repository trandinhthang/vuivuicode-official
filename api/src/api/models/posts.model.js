import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const PostsSchema = new Schema({
  title: String,
  slug: { type: String, slug: 'title' },
  content: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'category', required: true },
  is_deleted: { type: Boolean, default: false },
  created_by: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  created_at: { type: Date, default: Date.now },
});
PostsSchema.index({ title: 'text' });
export default mongoose.model('posts', PostsSchema);
