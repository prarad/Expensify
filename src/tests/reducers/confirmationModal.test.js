import {
  closeModal,
  openModal
} from '../../actions/confirmationModal';
import modalReducer from '../../reducers/confirmationModal'

test('should setup defualt state', () => {
  expect(modalReducer(undefined, {
    type: '@@INIT'
  })).toBe(false);
})

test('should open confirmation modal', () => {
  const action = openModal();
  const state = modalReducer(undefined, action);
  expect(state).toBe(true);
})

test('should close confirmation modal', () => {
  const defaultState = true;
  const action = closeModal();
  const state = modalReducer(defaultState, action);
  expect(state).toBe(false);
})