import moment from 'moment';
export default [
  {
    id: '1',
    description: 'Rent',
    note: '',
    amount: 44.35,
    createdAt: 0
  },
  {
    id: '2',
    description: 'dinner',
    note: '',
    amount: 104.35,
    createdAt: moment(0).subtract(4, 'day').valueOf()
  },
  {
    id: '3',
    description: 'Coffee and dinner',
    note: '',
    amount: 141.35,
    createdAt: moment(0).add(4, 'day').valueOf()
  }
]