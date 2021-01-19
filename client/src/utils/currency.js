export const setCurrency = (country) => {
    let currency;
    switch(country) {
        case "NG":
            currency = "₦"
            break;
        case "GH":
            currency = "₵"
            break;
        case "KE":
            currency = "Ksh"
            break;
        case "UK":
            currency = "£"
            break;
        default:
            currency = "₦"
    }
    return currency
}
export const payCurrency = (country) => {
    let currency;
    switch(country) {
        case "NG":
            currency = "NGN"
            break;
        case "GH":
            currency = "GHC"
            break;
        case "KE":
            currency = "KSH"
            break;
        case "UK":
            currency = "GBP"
            break;
        default:
            currency = "NGN"
    }
    return currency
}
