let defaultState = {
  selectedItems: { items: [], restaurantName: '' }
};

const cartReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'ADD_TO_CART':
      let newState = { ...state };
      if (payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, payload],
          restaurantName: payload.restaurantName
        };
      } else {
        newState.selectedItems = {
          items: [...newState.selectedItems.items.filter(item => item.title !== payload.title)],
          restaurantName: payload.restaurantName
        };
      }
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default cartReducer;
