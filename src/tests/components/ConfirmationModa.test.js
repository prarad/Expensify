import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmationModal } from '../../components/ConfirmationModal';

test('should correctly render confirmation modal', () => {
  const wrapper = shallow(<ConfirmationModal />);
  expect(wrapper).toMatchSnapshot()
})