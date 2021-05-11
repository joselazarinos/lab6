require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()

export const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  mongo: {
    uri: process.env.MONGO_URI,
    db: process.env.MONGO_DB,
  },
}

