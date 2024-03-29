import { MongoClient } from "mongodb";
import { Database } from "../lib/types";


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${[process.env.DB_CLUSTER}.mongodb.net/main?retryWrites=true&w=majority`
export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    const db = client.db('main')
    console.log('MongoDB connected:')
    return {
        listings: db.collection('test_listings')
    }
}