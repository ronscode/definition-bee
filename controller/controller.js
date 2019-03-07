const Definition = require('../models/model')

exports.test = (req,res)=> {
    res.send(`Greetings from your test controller!`);
};

exports.product_create = function (req, res) {
    let product = new Definition(
        {
            word: req.body.word,
            definition: req.body.definition
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

//reads existing definition from id being sent in request from router 
// exports.product_details = (req, res) =>{
//     Definition.findById(req.params.id, function (err, def) {
//         if (err)console.log(err);
//         res.send(def);
//         //console.log(definition)
//     })

// };


exports.random_details = (req, res) =>{
    Definition.findOneRandom( (err, element) => {
        if (err) console.log(err);
        else res.send(element);
    })
};


