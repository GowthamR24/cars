import * as yup from 'yup';

export const schema = yup.object().shape({
  make: yup
    .string('Please enter valid car maker name')
    .required('Maker of the car is required'),
  model: yup
    .string('Please enter valid car model')
    .required('Model of the car is required'),
  color: yup
    .string('Please enter valid color')
    .required('Color of the car is required'),
  year: yup
    .number('Please enter valid year')
    .min(1900, 'Please enter valid year (greater than 1900)')
    .max(
      new Date().getFullYear(),
      'Please enter valid year (cannot be in future)'
    )
    .test('len', 'Invalid year', (val) => val && val.toString().length === 4)
    .required('Year of the car model is required'),
});
