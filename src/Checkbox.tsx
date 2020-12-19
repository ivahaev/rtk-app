import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkboxClick } from './actions'
import { getCheckboxState } from './selectors'

const Checkbox: React.FC<{ name: string; label: string }> = ({ name, label }) => {
  const dispatch = useDispatch()
  const checked = useSelector(getCheckboxState(name))

  const handleClick = React.useCallback(() => {
    dispatch(checkboxClick(name))
  }, [dispatch, name])

  return (
    <div>
      <input type="checkbox" id={name} checked={checked} onChange={handleClick} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Checkbox
