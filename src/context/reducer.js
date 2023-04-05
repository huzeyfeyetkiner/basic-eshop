// toggle(increase, decrease), remove  reduce eklenecek
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  // same key erroru için düzenleme yapılacak
  if (action.type === "ADD_ITEM") {
    return { ...state, cart: [...state.cart, action.payload] };
  }
  if (action.type === "DELETE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
};

export default reducer;
