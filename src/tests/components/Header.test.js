import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />)
  expect(wrapper).toMatchSnapshot();
})

test('should call start log out on button click', () => {
  const startLotout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLotout} />);
  wrapper.find('button').simulate('click');
  expect(startLotout).toHaveBeenCalled();
})