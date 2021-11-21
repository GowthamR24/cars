import React from 'react';
import { Form } from 'react-bootstrap';

const formFields = [
  {
    type: 'text',
    name: 'make',
    label: 'Make',
  },
  {
    type: 'text',
    name: 'model',
    label: 'Model',
  },
  {
    type: 'text',
    name: 'color',
    label: 'Color',
  },
  {
    type: 'number',
    name: 'year',
    label: 'Year',
  },
];

const InputForm = ({ values, handleChange, handleBlur, touched, errors }) => {
  return (
    <Form>
      {formFields.map((field, index) => {
        return (
          <Form.Group key={index} className='pb-3'>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              name={field.name}
              value={values[field.name]}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={touched[field.name] && errors[field.name]}
            />
            <Form.Control.Feedback type='invalid'>
              {errors[field.name]}
            </Form.Control.Feedback>
          </Form.Group>
        );
      })}
    </Form>
  );
};

export default InputForm;
