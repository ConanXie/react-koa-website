import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  registerDate: Date
})

export default mongoose.model('users', userSchema)