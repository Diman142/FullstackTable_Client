import React, {useState} from 'react'
import classNames from 'classnames'
import propTypes from 'prop-types';
import {validate} from '../../helpers/helpers'




const Input = ({type="text", value, className="", placeholder, onChange, id, label, labelClass="", validType, errMessage}) => {

  const classes = classNames('input', className)
  const labelClasses = classNames('label', labelClass)


  const [isValid, setIsValid] = useState(true)


  return (
    <>
      <label htmlFor={id} className={labelClasses}>
        {label}
        <input className={classes} type={type} value={value} placeholder={placeholder} onChange={(event) => {
          if(!validate(event.target.value, validType)){
            event.target.classList.add('inValidInput')
            setIsValid(false)
          } else {
            event.target.classList.remove('inValidInput')
            setIsValid(true)
          }
          onChange(event.target.value)
        }} id={id}/>
        {!isValid ? <p style={{color: "red", marginBottom: 0}}>{errMessage}</p>: null}
      </label>

    </>
  )

}

export default Input

Input.propTypes = {
  onChange: propTypes.func,
  type: propTypes.string,
  className: propTypes.string,
  validationFunc: propTypes.func,
}
