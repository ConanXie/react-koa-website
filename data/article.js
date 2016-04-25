import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/article')

const articleSchema = mongoose.Schema({
  date: Date,
  viewCount: Number,
  tags: Array,
  category: String,
  title: String,
  body: String
})

export default mongoose.model('article', articleSchema)