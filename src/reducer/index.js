const reducer = (state = 1, action) => {
  switch (action.type) {
     case 'INCREMENT': return state + 3
     case 'DECREMENT': return state - 3
     case 'MULTIPLE': return state * 3
     case 'DEVIDE': return state / 3
     case 'RESET' : return 0
     default: return state
  }
}
export default reducer;