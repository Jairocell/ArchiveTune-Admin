const mongoose = require('mongoose')

const SubscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  plan: {
    type: String,
    enum: ['free', 'basic', 'premium', 'pro'],
    default: 'free',
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'cancelled', 'expired'],
    default: 'active',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  renewalDate: Date,
  price: Number,
  currency: {
    type: String,
    default: 'USD',
  },
  stripeSubscriptionId: String,
  autoRenew: {
    type: Boolean,
    default: true,
  },
  cancelledAt: Date,
  cancellationReason: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Subscription', SubscriptionSchema)
