export function validate(value, inputType) {

  if (inputType === 'date') {

    let regex = /^[0-3]?[0-9]-[0-3]?[0-9]-(?:[0-9]{2})?[0-9]{2}$/gm
    return regex.test(value)


  } else if (inputType === 'id') {

    if (value.trim() !== "" && value > 0) {
      return true
    }

    else {
      return false
    }

  } else {
    return true
  }
}
