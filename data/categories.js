import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
  id: Number,
  name: String
})

export default mongoose.model('categories', categorySchema)