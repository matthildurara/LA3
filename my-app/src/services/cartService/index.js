export const getCart = () => {
    let items = JSON.parse(localStorage.getItem('item'));
    return items
};

export const addToCart = (item) => {
    // var cartItems = []
    var items = getCart();
    items.push(item);
    localStorage.setItem('item',JSON.stringify(items));

    console.log('added to cart');
    console.log(getCart());
}

export const clearCart = () => {
    localStorage.setItem('item', JSON.stringify([]));
    console.log(getCart());
};