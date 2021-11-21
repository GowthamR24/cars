import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormDialogBox from '../components/FormDialogBox/';
import Header from '../components/Header/';
import CarTable from '../components/CarTable/';
import ToolBar from '../components/ToolBar/';
import './App.css';
import { getCarDescription } from '../helpers/getCarDescription';

const App = () => {
  const [cars, setCars] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const carsList = localStorage.getItem('cars');
    if (carsList) {
      setCars(JSON.parse(carsList));
    }
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedCar(null);
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car);
    setShowForm(true);
  };

  const handleAddCar = async (car) => {
    car.id = Date.now();
    const description = await getCarDescription(car);
    car.description = description;
    localStorage.setItem('cars', JSON.stringify([...cars, car]));
    setCars([...cars, car]);
  };

  const handleUpdateCar = (car) => {
    const index = cars.findIndex((c) => c.id === car.id);
    const updatedCars = [...cars];
    updatedCars[index] = car;
    localStorage.setItem('cars', JSON.stringify(updatedCars));
    setCars(updatedCars);
  };

  const handleDeleteCar = (car) => {
    const updatedCars = cars.filter((c) => c.id !== car.id);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
    setCars(updatedCars);
    handleCloseForm();
  };

  const handleSort = (field, type) => {
    const sortedCars = [...cars];
    sortedCars.sort((a, b) => {
      if (a[field] < b[field]) return -1;
      if (a[field] > b[field]) return 1;
      return 0;
    });

    if (type === 'desc') sortedCars.reverse();

    setCars(sortedCars);
  };

  const handleSearch = () => {
    if (searchText.length === 0) return cars;

    const filteredCars = cars.filter((car) => {
      let searchString = `${car.make} ${car.model} ${car.color} ${car.year}`;
      return searchString.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredCars;
  };

  return (
    <Container>
      <Header />
      <FormDialogBox
        show={showForm}
        handleClose={handleCloseForm}
        data={selectedCar}
        handleAddCar={handleAddCar}
        handleUpdateCar={handleUpdateCar}
        handleDeleteCar={handleDeleteCar}
      />
      <ToolBar
        searchText={searchText}
        setSearchText={setSearchText}
        handleSort={handleSort}
        setShowForm={setShowForm}
        disabled={cars.length < 2}
      />
      <CarTable data={handleSearch()} handleSelectCar={handleSelectCar} />
    </Container>
  );
};

export default App;
