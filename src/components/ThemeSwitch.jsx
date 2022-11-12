import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

function ThemeSwitch(props) {
  return (
    <div className={props.class}>
    <input type="checkbox" className="checkbox" id="checkbox" onChange={props.onChange} />
  <label for="checkbox" class="label">
  <FaSun style={{color: 'yellow'}} />
    <FaMoon style={{color: 'pink'}} />
    <div class='ball' />
  </label>
</div>
  )
}

export default ThemeSwitch