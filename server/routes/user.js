const router = require('express').Router();
const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    country: String,
    address: String,
    isMerchant: Boolean,
    storeId: String,
    storeName: String,
    storeBalance: Double,
    dispatchRider: String,
    dispatchRiderContact: String,
    email: {
        type: String,
        required: true
    },
    registeratedOn:{
        type: Date,
        default: Date.now
    }
})
const User = mongoose.model('User', UserSchema)

const userAuth = async (req, res, next) => {
    const whois = req.headers.whois
    const country = req.headers.country
    if(!whois) return next()
    const thisUser =  await User.findOne({email: whois}).lean().exec();
    if(!thisUser){
        const newUser = new User({ email:whois, isMerchant: false, country})
        newUser.save((err, result) => {
            if(err) res.status(500).json("server error");
        })
        res.locals.user = {
            email: whois,
            country,
            isMerchant: false
        }
    }else{
        res.locals.user = {
            email: thisUser.email,
            country,
            isMerchant: thisUser.isMerchant,
            storeId: thisUser.storeId
        }
    };
    next();
}

router.post('/add', async (req, res)=> {
    const { email } = req.body;
    const newUser = new User({ email, isMerchant: false, })
    
    newUser.save((err, result) => {
        if(err) return res.status(500);
        return res.status(200).json(result)
    })
});

router.get('/getprofile', async (req, res) => {
    const thisUser = res.locals.user.email;
    try {
        const profile = await User.find( {email: thisUser} ).lean().exec();
        res.status(200).json(profile)
    } catch (error) {
        res.status(500)     
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const allUsers = await User.find( {} ).lean().exec();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500)     
    }
})
router.put('/update', async (req, res) => {
    const thisUser = res.locals.user.email;
    const updatedUser = req.body

    try {
        const result = await User.findOneAndUpdate({ email: thisUser }, updatedUser, { new: true } );
        res.json(result)
    } catch (error) {
        res.status(500)
    }
})

router.delete('/deleteAll', async (req, res) => {
    try {
        const result = await User.deleteMany({});
        res.json("All users deleted")
    } catch (error) {
        res.status(500)
    }
} )


module.exports = {users:router, userAuth};
