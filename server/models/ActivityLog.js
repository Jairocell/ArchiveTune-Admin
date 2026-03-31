const mongoose = require('mongoose')

const ActivityLogSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    required: true,
  },
  action: {
    type: String,
    enum: ['create', 'update', 'delete', 'cancel', 'renew', 'login'],
    required: true,
  },
  entityType: {
    type: String,
    enum: ['user', 'subscription', 'payment'],
    required: true,
  },
  entityId: mongoose.Schema.Types.ObjectId,
  details: mongoose.Schema.Types.Mixed,
  ipAddress: String,
  userAgent: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('ActivityLog', ActivityLogSchema)
