const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    // cleart cart fonksiyonu için amount verileri sıfırlandı, düzenlendi.
    let temp = state.cart.map((item) => {
      item.amount = 1
      return item;
    });
    state.cart = temp
    return { ...state, cart: [] };
  }
  // decrease ve increase işlemleri sonrası add item düzgün çalışmıyor
  if (action.type === "ADD_ITEM") {
    if (state.cart.includes(action.payload.item)) {
      let temp = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.amount += 1;
          return item;
        } 
        return item;
      });

      return { ...state, cart : temp };
    } else {
    return { ...state, cart: [...state.cart, action.payload.item] };
    }
  }
  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INCREASE") {
    let temp = state.cart.map((item) => {
      if (item.id === action.payload) {
        console.log(action.payload);
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: temp };
  }
// decrease fonksyionu için amount miktarları düzenlenecek
  if (action.type === "DECREASE") {
    let temp = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: temp };
  }
};

export default reducer;
