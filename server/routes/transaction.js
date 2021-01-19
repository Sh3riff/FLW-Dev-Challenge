const router = require('express').Router();
const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const TransactionSchema = new mongoose.Schema({
    storeId: String,
    buyer: String,
    photo: String,
    name: String,
    id: String,
    income: Double,
    price: Double,
    qty: Number,
    date:{
        type: Date,
        default: Date.now
    }
})

const Transaction = mongoose.model('Transaction', TransactionSchema)


router.post('/add', (req, res)=> {
    const { transactions } = req.body;
    const storeShare = 0.925
    transactions.map( async transact => {
        const newTransact = new Transaction({
            storeId: transact.storeId,
            photo: transact.photo,
            name: transact.name,
            id: transact.id,
            buyer: res.locals.user.email,
            price: transact.price,
            income: transact.price * storeShare,
            qty: transact.quantity,
        })
        const thisTransact = await newTransact.save()
        return thisTransact
    })
    res.json("Transactions successful")   
    
});

router.get('/getuser', async (req, res) => {
    const { email } = res.locals.user
    try {
        const transact = await Transaction.find( {buyer: email} ).lean().exec();
        res.status(200).json(transact)
    } catch (error) {
        res.status(500)     
    }
})
router.get('/getstore', async (req, res) => {
    const { storeId } = res.locals.user
    try {
        const transact = await Transaction.find( {storeId} ).lean().exec();
        res.status(200).json(transact)
    } catch (error) {
        res.status(500)     
    }
})
router.get('/getAll', async (req, res) => {
    try {
        const transact = await Transaction.find( {} ).lean().exec();
        res.status(200).json(transact)
    } catch (error) {
        res.status(500)     
    }
})

router.delete('/del', async (req, res) => {
    try {
        const transact = await Transaction.deleteMany({}).lean().exec();
        res.status(200).json("All transactions deleted")
    } catch (error) {
        res.status(500)     
    }
})

module.exports = router;