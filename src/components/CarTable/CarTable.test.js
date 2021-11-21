//test CarTable component
import React from 'react';
import { mount, shallow } from 'enzyme';
import CarTable from './CarTable';

describe('CarTable', () => {
  let wrapper;
  const cars = [
    {
      id: 1,
      make: 'Ford',
      model: 'Fiesta',
      year: '2018',
      color: 'red',
      description: 'Nice car',
    },
    {
      id: 2,
      make: 'Ford',
      model: 'Focus',
      year: '2018',
      color: 'blue',
      description: 'Nice car',
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mondeo',
      year: '2018',
      color: 'red',
      description: 'Nice car',
    },
  ];

  it('should render correctly', () => {
    wrapper = shallow(<CarTable data={cars} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('Check table content', () => {
    wrapper = mount(<CarTable data={cars} />);

    it('should render a table header', () => {
      expect(wrapper.find('thead').length).toEqual(1);
    });

    it('should render a table body', () => {
      expect(wrapper.find('tbody').length).toEqual(1);
    });

    it('should render a table row', () => {
      expect(wrapper.find('tr').length).toEqual(4);
    });

    it('should render a table cell', () => {
      expect(wrapper.find('td').length).toEqual(15);
    });

    it('should render a table cell with the correct text', () => {
      expect(wrapper.find('td').at(0).text()).toEqual('Ford');
      expect(wrapper.find('td').at(1).text()).toEqual('Fiesta');
      expect(wrapper.find('td').at(2).text()).toEqual('red');
      expect(wrapper.find('td').at(3).text()).toEqual('2018');
      expect(wrapper.find('td').at(4).text()).toEqual('Nice car');
    });
  });
});
