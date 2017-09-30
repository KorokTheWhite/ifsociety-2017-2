const router = require('express').Router();
const axios = require('axios');

router
  .route('/:cep')
    .get(getCep);

function getCep(req, res) {
  let address = `http://api.postmon.com.br/v1/cep/${req.params.cep}`;
  axios.get(address)
  .then((data) =>{
    // withou data.data the return is an error, TypeError: Converting circular structure to JSON
    const obj = data.data;
    res.send(obj);
  });
}

module.exports = router;
