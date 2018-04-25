const defaultState = false;

export default (state = defaultState, { type }) => {
  switch (type) {
    case 'OPEN_MODAL':
      return true;
    case 'CLOSE_MODAL':
      return false;
    default:
      return state
  }
}