const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    let temp = state.cart.map((item) => {
      item.amount = 1;
      return item;
    });
    state.cart = temp;
    return { ...state, cart: [] };
  }

  if (action.type === "ADD_ITEM") {
    if (state.cart.includes(action.payload.item)) {
      let temp = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.amount += 1;
          return item;
        }
        return item;
      });

      return { ...state, cart: temp };
    } else {
      action.payload.item.amount = 1;
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
        item.amount += 1;
        return item;
      }
      return item;
    });
    return { ...state, cart: temp };
  }
  if (action.type === "DECREASE") {
    let temp = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          item.amount -= 1;
          return item;
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: temp };
  }
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed());
    return { ...state, total, amount };
  }
};

export default reducer;
