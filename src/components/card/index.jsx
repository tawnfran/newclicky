import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default function Card({
  handleClick,
  id,
  front,
  height,
  width }) {

  return <div
    style={{
      width, height
    }}
    onClick={() => handleClick(id)}
  >
    <div className="pictures">
      <img alt=""
        style={{
          height, width
        }}
        className={"front"}
        src={front}
      />


    </div>
  </div>
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  front: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}