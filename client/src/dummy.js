// const baseurl = "https://jumga-backend.herokuapp.com"

// const baseurl = "http://localhost:8080"

{/* <label>Country:
    <select name="country" ref={register({ required: true })}>
        <option value="">...</option>
        <option value="Nigeria">Nigeria</option>
        <option value="Ghana">Ghana</option>
        <option value="Uk">Uk</option>
        <option value="Kenya">Kenya</option>
    </select>
    {errors.country && <ErrMsg>This field is required</ErrMsg>}
</label> */}

// const { isLoading:storeIsLoading, error:storeError, data:storeData } = useQuery('userProfile', () =>ApiGet("users/getprofile", user, usersCountry))
// const { isLoading:productIsLoading, error:productError, data:productData } = useQuery('userProduct', () =>ApiGet("products/getAll", user, usersCountry))
// const isLoading = storeIsLoading && productIsLoading
// if(isLoading) return( <Loading />)
// const error = storeError && productError
// if(error) return( <Error />)

let url;
export const tableHeader = ["Image", "Product Name", "Product Id", "Price", "Date"];

export const storeDetail = {
    storeName: "Super Store",
    storeId: "ABCD",
    balance: "$400",
    dispatchRider: {
        name: "Rider X",
        contact: 123456,
    },
    HistoryTemplate:["Image", "Product Name", "Product Id", "Price",  "Date"],
    salesHistory: [
        {
            "Image": url,
            "Product Name": "Iphone",
            "Product Id": "ABCDER",
            Price: "$250",
            Date: "12/12/21"
        },
        {
            "Image": url,
            "Product Name": "SamSung",
            "Product Id": "ABChR",
            Price: "$250",
            Date: "12/12/21"
        }
    ]
}

export const ProductDetail = {
    Template: ["Image", "Product Name", "Product Id", "Price",  "Qty"],
    Products: [
        {
            "Image": url,
            "Product Name": "Iphone",
            "Product Id": "ABCDER",
            Price: "$250",
            Qty: 10
        },
        {
            "Image": url,
            "Product Name": "SamSung",
            "Product Id": "ABChR",
            Price: "$250",
            Qty: 10
        }
    ]
};

export const tableData = [
        { 
            "Image": url,
            "Product Name": "Iphone",
            "Product Id": "Ihgjgj", 
            "Price": 100,
            "Date": "12/12/21"
        },
        { 
            "Image": url,
            "Product Name": "Samsung",
            "Product Id": "Sfghfj", 
            "Price": 150,
            "Date": "18/12/21"
        },
        { 
            "Image": url,
            "Product Name": "Iphone",
            "Product Id": "Ihugj", 
            "Price": 100,
            "Date": "12/12/21"
        }
    ]