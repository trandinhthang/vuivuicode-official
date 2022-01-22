import mongoose from 'mongoose';
import slug from 'mongoose-slug-updater';

mongoose.plugin(slug);

const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  slug: { type: String, slug: 'name' },
  image: {
    type: String,
    required: true,
  },
  is_deleted: { type: Boolean, default: false },
  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('category', CategorySchema);
