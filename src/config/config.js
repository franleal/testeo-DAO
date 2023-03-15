
const { MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://127.0.0.1:27017/${MONGODB_DATABASE}`

const Config = {
    db: {
        name: 'ecommerce',
        collection: 'products',
        cnxStr: MONGODB_URI,
        //projection: {_id:0, __v:0}
        projection: { __v: 0 }

    }
}

module.exports = Config