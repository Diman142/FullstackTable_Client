/* eslint-disable import/prefer-default-export */
export function validate(value, inputType) {
  if (inputType === 'date') {
    const regex = /^[0-3]?[0-9]-[0-3]?[0-9]-(?:[0-9]{4})$/gm;
    return regex.test(value);
  } if (inputType === 'id') {
    if (value.trim() !== '' && value > 0) {
      return true;
    }
    return false;

  }
  return true;

}
