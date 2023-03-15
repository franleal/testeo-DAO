require("dotenv").config()

const app = require('./server')
require('./DAOs/DaoFactory')
/*require('./database')*/

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})



