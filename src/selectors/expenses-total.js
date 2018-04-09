export default expenses => expenses
  .map(item => item.amount)
  .reduce((acu, item) => acu + item, 0)