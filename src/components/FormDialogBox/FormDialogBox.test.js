import React from 'react';
import { shallow } from 'enzyme';
import FormDialogBox from './FormDialogBox';

describe('FormDialogBox', () => {
  let wrapper;
  let props = {
    data: null,
    show: true,
    handleClose: jest.fn(),
    handleAddCar: jest.fn(),
    handleUpdateCar: jest.fn(),
    handleDeleteCar: jest.fn(),
  };

  it('should render correctly', () => {
    wrapper = shallow(<FormDialogBox {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
