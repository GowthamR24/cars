import React from 'react';
import { mount, shallow } from 'enzyme';
import ToolBar from './ToolBar';

describe('ToolBar', () => {
  let wrapper;
  let props = {
    searchText: '',
    setSearchText: jest.fn(),
    handleSort: jest.fn(),
    setShowForm: jest.fn(),
    disabled: false,
  };

  it('should render correctly', () => {
    wrapper = shallow(<ToolBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Check components functionality', () => {
    wrapper = mount(<ToolBar {...props} />);

    it('should call setSearchText on change', () => {
      const event = { target: { value: 'test' } };
      wrapper.find('FormControl').simulate('change', event);
      expect(props.setSearchText).toHaveBeenCalledWith('test');
    });

    it('should call setShowForm on click', () => {
      wrapper.find('Button').simulate('click');
      expect(props.setShowForm).toHaveBeenCalled();
    });
  });
});
