const router = require('express').Router();
const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeId: String,
    storeName: String,
    Dispatch: Object,
})

const Store = mongoose.model('Store', StoreSchema)