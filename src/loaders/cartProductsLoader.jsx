import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async() => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    //if cart data is in database, you have to async await

    const storedCard = getShoppingCart();
    const savedCart = [];
    
    for (const id in storedCard) {
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCard[id];
            addedProduct.quantity = quantity;
        }
        savedCart.push(addedProduct)
    }

   return savedCart
}
export default cartProductsLoader;