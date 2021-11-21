import React from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import SortDropDown from '../SortDropDown/';

const ToolBar = ({
  searchText,
  setSearchText,
  handleSort,
  setShowForm,
  disabled,
}) => {
  return (
    <Row className='py-3'>
      <Col lg={8}>
        <InputGroup className='w-50'>
          <FormControl
            placeholder='Search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            disabled={disabled}
          />
        </InputGroup>
      </Col>
      <Col lg={2} className='text-end'>
        <SortDropDown handleSort={handleSort} disabled={disabled} />
      </Col>
      <Col lg={2} className='text-end'>
        <Button
          variant='primary'
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add Car
        </Button>
      </Col>
    </Row>
  );
};

export default ToolBar;
