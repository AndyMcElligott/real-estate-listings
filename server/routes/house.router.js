const router = require('express').Router();
const pool = require('../modules/pool');

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Delete route called with id of', id);
    let queryString = `DELETE FROM "listings" WHERE "id"=$1;`;
    pool.query(queryString, [id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('ERROR DELETING house-------->', error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res)=>{
    let queryString = `INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path")
    VALUES ($1, $2, $3, $4, $5);`;
    let house = req.body;
    pool.query(queryString, [house.cost, house.sqft, house.type, house.city, house.image_path])
    .then(result =>{
        console.log('in router /POST, Added house:', result);
        res.sendStatus(201);
    }).catch(error =>{
        console.log(error);
        res.sendStatus(400);
    });
}); // end POST

router.get('/', (req, res)=>{
    let queried = false;
    let config = [];
    let queryText = `SELECT * FROM "listings"`;
    if(req.query.type){
        queryText += ` WHERE "type" = $${config.length + 1}`;
        config.push(`${req.query.type}`);
        queried = true;
    }
    if(req.query.city){
        queryText += ` ${(queried) ? 'AND' : 'WHERE'} "city" ILIKE $${config.length + 1}`;
        config.push(`${req.query.city}`);
        queried = true;
    }
    queryText += ';';
    pool.query(queryText, config)
        .then((result)=>{
            res.send(result.rows);
        }).catch(error=>{
            console.log('ERROR GETTING listings ---> ', error);
            res.sendStatus(500);
    });
});

router.get('/cities', (req, res)=>{
    let queryText = `SELECT DISTINCT "city" FROM "listings" ORDER BY "city" ASC;`
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch(error=>{
            console.log('ERROR GETTING cities ---> ', error);
            res.sendStatus(500);
    });
})

module.exports = router;