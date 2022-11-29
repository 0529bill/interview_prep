import { MongoClient } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.DB_NAME

if (!MONGODB_URI) {
	throw new Error('Missing MongoDB_URI')
}

if (!MONGODB_DB) {
	throw new Error('Missing MongoDB_DB name')
}

export default async function database(req, res, next) {
	if (!global.mongo.client) {
		global.mongo.client = new MongoClient(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		await global.mongo.client.connect()
	}
	req.dbClient = global.mongo.client
	req.db = global.mongo.client.db(MONGODB_DB)
	if (!indexesCreated) await createIndexes(req.db)
	return next()
}
