export const getCart = () => {
    let items = JSON.parse(localStorage.getItem('item'));
    return items
};

export const addToCart = (item) => {
    var items = getCart();
    if (items == null) {
        items = []
    }
    items.push(item);
    localStorage.setItem('item',JSON.stringify(items));
    console.log(getCart());
}

export const clearCart = () => {
    localStorage.setItem('item', JSON.stringify([]));
    console.log(getCart());
};