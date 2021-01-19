const router = require('express').Router();
const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    photo: String,
    storeId: String,
    storeSubAcct: String,
    price: Double,
    country: String,
    qty: Number
})

const Product = mongoose.model('Product', ProductSchema)



router.post('/add', (req, res)=> {
    const { isMerchant, country, storeId } = res.locals.user
    const incomingProduct = req.body;
    if(!isMerchant) return res.status(403).json("you do not have a store")

    const newProduct = new Product({ ...incomingProduct, country, storeId })
    newProduct.save((err, result) => {
        if(err) return res.status(500).json('error');
        res.status(200).json(result)
    })
});

router.put('/update', async (req, res) => {
    const {id} = req.body
    const newProduct = req.body;

    try {
        const result = await Product.findOneAndUpdate({ id }, newProduct, { new: true } );
        res.json(result)
    } catch (error) {
        res.status(500)
    }
})

router.get('/storeproduct', async (req, res) => {
    const { storeId } = res.locals.user;
    try {
        const allProducts = await Product.find({storeId} ).lean().exec();
        res.json(allProducts)
    } catch (error) {
        res.status(500)     
    }
})
router.get('/getCountryProduct', async (req, res) => {
    const userCountry = res.locals.user.country;
    try {
        const allProducts = await Product.find( {country: userCountry} ).lean().exec();
        res.json(allProducts)
    } catch (error) {
        console.log(error)
        res.status(500)   
    }
})
router.get('/getAll', async (req, res) => {
    try {
        const allProducts = await Product.find( {} ).lean().exec();
        res.json(allProducts)
    } catch (error) {
        res.status(500)   
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const result = await Product.findOneAndDelete({ id: req.body.id });
        res.json("product deleted")
    } catch (error) {
        res.status(500)
    }
} )

module.exports = router;