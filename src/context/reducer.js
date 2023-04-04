// toggle(increase, decrease), remove  reduce eklenecek
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  // same key erroru için düzenleme yapılacak
  if (action.type === "ADD_ITEM") {
    return { ...state, cart: [...state.cart, action.payload] };
  }
};

export default reducer;
