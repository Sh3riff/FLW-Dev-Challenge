const cartSorter = arr => {
    const sellersRatio = 0.925
    const newArr = arr.map(item => ({[item.storeSubAcct]: item.price * item.quantity * sellersRatio}))
    const basket = newArr.reduce((basket, key) => {
    for (const [keyName, keyCount] of Object.entries(key)) {
        if (!basket[keyName]) {
            basket[keyName] = 0;
        }

        basket[keyName] += keyCount;
    }
    return basket;
}, {});
    const subAcct = [ ];
    // return basket
    for (const [key, value] of Object.entries(basket)) {
        subAcct.push({
            id: key,
            transaction_charge_type: "flat_subaccount",
            transaction_charge: value
        })
    }
    return subAcct
}

export default cartSorter