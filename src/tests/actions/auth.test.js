import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  expect(login(33)).toEqual({
    type: 'LOGIN',
    uid: 33
  })
})

test('should generate logout action object', () => {
  expect(logout()).toEqual({type: 'LOGOUT'})
})