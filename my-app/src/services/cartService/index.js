export const getCart = () => {
    let items = JSON.parse(localStorage.getItem('item'));
    return items
};

export const addToCart = (item) => {
    console.log('Cart item: ', item);
    // var cartItems = []
    var items = getCart();
    if (items == null) {
        items = []
    }
    console.log('cart', items);
    items.push(item);
    localStorage.setItem('item',JSON.stringify(items));

    console.log('added to cart');
    console.log(getCart());
}

export const clearCart = () => {
    localStorage.setItem('item', JSON.stringify([]));
    console.log(getCart());
};