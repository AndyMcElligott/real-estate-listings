const router = require('express').Router();
const pool = require('../modules/pool');

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



module.exports = router;