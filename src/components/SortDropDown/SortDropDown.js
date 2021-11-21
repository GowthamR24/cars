import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const dropdownoptions = [
  {
    value: 'make',
    type: 'asc',
    label: 'Make A-Z',
  },
  {
    value: 'make',
    type: 'desc',
    label: 'Make Z-A',
  },
  {
    value: 'model',
    type: 'asc',
    label: 'Model A-Z',
  },
  {
    value: 'model',
    type: 'desc',
    label: 'Model Z-A',
  },
  {
    value: 'color',
    type: 'asc',
    label: 'Color A-Z',
  },
  {
    value: 'color',
    type: 'desc',
    label: 'Color Z-A',
  },
  {
    value: 'year',
    type: 'asc',
    label: 'Year Low to High',
  },
  {
    value: 'year',
    type: 'desc',
    label: 'Year High to Low',
  },
];

const SortDropDown = ({ handleSort, disabled }) => {
  return (
    <DropdownButton
      variant='outline-secondary'
      title='Sort By'
      disabled={disabled}
    >
      {dropdownoptions.map((option) => (
        <Dropdown.Item
          key={option.label}
          value={option.value}
          onClick={() => handleSort(option.value, option.type)}
        >
          {option.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default SortDropDown;
