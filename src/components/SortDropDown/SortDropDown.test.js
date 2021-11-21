import React from 'react';
import { mount } from 'enzyme';
import SortDropDown from './SortDropDown';

describe('SortDropDown', () => {
  let wrapper;
  const props = {
    handleSort: jest.fn(),
    disabled: false,
  };

  beforeEach(() => {
    wrapper = mount(<SortDropDown {...props} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    wrapper.setProps({ disabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});
