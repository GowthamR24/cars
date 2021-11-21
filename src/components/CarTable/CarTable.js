import React from 'react';
import { Table } from 'react-bootstrap';

const CarTable = ({ data, handleSelectCar }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Color</th>
          <th>Year</th>
          <th>Related Terms</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((car, index) => (
            <tr key={index} onClick={() => handleSelectCar(car)}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.year}</td>
              <td>{car.description}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan='5'>
              No cars found. Please click on the add button to add new cars.
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default CarTable;
