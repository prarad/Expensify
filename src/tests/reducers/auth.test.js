import authReducer from '../../reducers/auth';
import { login, logout } from '../../actions/auth';


test('should set uid for login', () => {
  const state = authReducer(undefined, login(33));
  expect(state).toEqual({ uid: 33 })
})

test('should clear uid for logout', () => {
  const state = authReducer({ uid: 33 }, logout());
  expect(state).toEqual({})
})