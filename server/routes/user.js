const router = require('express').Router();
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    country: String,
    address: String,
    isMerchant: Boolean,
    storeId: String,
    storeName: String,
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
    if(!whois) return next()
    const thisUser =  await User.findOne({email: whois}).lean().exec();
    if(!thisUser){
        const newUser = new User({ email:whois, isMerchant: false, })
        newUser.save((err, result) => {
            if(err) res.status(500).json("server error");
        })
        res.locals.user = {
            email: whois,
            isMerchant: false
        }
    }else{
        res.locals.user = {
            email: thisUser.email,
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
    const thisUser = res.locals.user.email;
    try {
        const result = await User.deleteMany({});
        res.json(result)
    } catch (error) {
        res.status(500)
    }
} )


module.exports = {users:router, userAuth};
