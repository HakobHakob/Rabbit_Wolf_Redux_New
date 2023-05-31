import React from 'react'
import { SelectStyle } from './SelectStyle'

const CustomSelect = ({ options,onChange}) => {
 
  return (
    <SelectStyle onChange={onChange}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectStyle>
   
  )
}

export { CustomSelect }
