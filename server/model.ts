import * as mongoose from 'mongoose'

const CrushSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true, unique: true },
  whatsApp: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model('Crush', CrushSchema);