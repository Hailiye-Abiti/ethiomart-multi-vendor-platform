import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: true 
  },
  region: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  image: { 
    type: String, 
    required: true 
  },
  seller: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  },
  stock: { 
    type: Number, 
    default: 1 
  }
}, { 
  timestamps: true 
});

export default mongoose.model('Product', productSchema);
