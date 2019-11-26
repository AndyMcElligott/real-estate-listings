const pg = require('pg');
const url = require('url');
let config = {};

if (process.env.DATABASE_URL){
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');
    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires this
        max: 10,
        idleTimeoutMillis: 30000
    };
} else {
    config = {
      host: 'localhost',
      database: 'real_estate',
      port: 5432,
      max: 10,
      idleTimeoutMillis: 30000
    }
}

const pool = pg.Pool(config);

pool.on('connect', (client) => {
  console.log('pg connected');
})

pool.on('error', (err, client) => {
  console.log('Unexpected error on idle pg client', err);
  process.exit(-1);
});

module.exports = pool;