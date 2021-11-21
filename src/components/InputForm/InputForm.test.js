import React from 'react';
import { shallow, mount } from 'enzyme';
import InputForm from './InputForm';

describe('InputForm', () => {
  const mockHandleChange = jest.fn();
  const mockHandleBlur = jest.fn();

  const props = {
    values: { make: 'Honda', model: 'Civic', year: '2000', color: 'Black' },
    handleChange: mockHandleChange,
    handleBlur: mockHandleBlur,
    errors: { make: '', model: '', year: '', color: '' },
    touched: { make: false, model: false, year: false, color: false },
  };

  it('should render correctly', () => {
    const wrapper = shallow(<InputForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Check Functions', () => {
    const wrapper = mount(<InputForm {...props} />);

    it('should display input fields correctly', () => {
      const inputs = wrapper.find('FormControl');
      console.log(inputs.debug(), inputs.length);
      expect(inputs.length).toBe(4);
    });

    it('should call handleChange when input is changed', () => {
      const mockEvent = {
        target: {
          name: 'make',
          value: 'Honda',
        },
      };
      const inputs = wrapper.find('FormControl');
      inputs.at(0).simulate('change', mockEvent);
      expect(mockHandleChange).toHaveBeenCalled();
    });

    it('should call handleBlur when input is blurred', () => {
      const mockEvent = {
        target: {
          name: 'make',
          value: 'Honda',
        },
      };
      const inputs = wrapper.find('FormControl');
      inputs.at(0).simulate('blur', mockEvent);
      expect(mockHandleBlur).toHaveBeenCalled();
    });
  });
});
