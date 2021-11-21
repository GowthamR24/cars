import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik } from 'formik';

import InputForm from '../InputForm';
import { schema } from '../../helpers/formValidation';

const FormDialogBox = ({
  data,
  show,
  handleClose,
  handleAddCar,
  handleUpdateCar,
  handleDeleteCar,
}) => {
  const closeModal = (resetForm) => {
    resetForm();
    handleClose();
  };

  const submitForm = (values, { resetForm }) => {
    if (data) {
      handleUpdateCar({ ...values, id: data.id });
    } else {
      handleAddCar(values);
    }
    closeModal(resetForm);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={submitForm}
      enableReinitialize
      initialValues={{
        make: data?.make || '',
        model: data?.model || '',
        color: data?.color || '',
        year: data?.year || '',
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
        resetForm,
        isValid,
        isSubmitting,
      }) => (
        <Modal
          show={show}
          onHide={() => closeModal(resetForm)}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cars</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputForm
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
            />
          </Modal.Body>
          <Modal.Footer>
            {data ? (
              <Button variant='danger' onClick={() => handleDeleteCar(data)}>
                Delete Car
              </Button>
            ) : null}
            <Button
              variant='primary'
              onClick={handleSubmit}
              disabled={isSubmitting || !isValid}
            >
              {data?.make ? 'Update Car' : 'Add Car'}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Formik>
  );
};

export default FormDialogBox;
