import mongoose from 'mongoose'

const articleSchema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  viewCount: {
    type: Number,
    default: 0
  },
  tags: Array,
  category: Number,
  title: String,
  body: String
})

export default mongoose.model('articles', articleSchema)