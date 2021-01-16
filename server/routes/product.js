const router = require('express').Router();
const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const ProductSchema = new mongoose.Schema({
    id: String,
    name: String,
    photo: String,
    price: Double,
    qty: Number
})

const Product = mongoose.model('Product', ProductSchema)



router.post('/add', (req, res)=> {
    const { isMerchant, storeId } = res.locals.user
    const {id, name, photo, price, qty } = req.body;
    if(!isMerchant) return res.status(403).json("you do not have a store")

    const productId = `${storeId}-${id}`

    const newProduct = new Product({ id:productId, name, photo, price, qty })
    newProduct.save((err, result) => {
        if(err) return res.status(500).json('error');
        res.status(200).json(result)
    })
});

router.put('/update', async (req, res) => {
    const thisUser = res.locals.user.email;
    const newProduct = req.body;

    try {
        const result = await User.findOneAndUpdate({ email: thisUser }, newProduct, { new: true } );
        res.json(result)
    } catch (error) {
        res.status(500)
    }
})

router.get('/storeproduct', async (req, res) => {
    const thisUser = res.locals.user.email;
    try {
        const allProducts = await Product.find({email: thisUser} ).lean().exec();
        res.json(allProducts)
    } catch (error) {
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
    const thisUser = res.locals.user.email;
    try {
        const result = await Product.findOneAndDelete({ id: req.body.id });
        res.json(result)
    } catch (error) {
        res.status(500)
    }
} )

module.exports = router;