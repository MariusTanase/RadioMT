import React from 'react'

const BackButton = ({id}) => {
  return (
    <button className="control-button previous" onClick={() =>{
        previousRadio(id)
    }}>
    <FontAwesomeIcon icon={faBackward} />
    </button>
  )
}

export default BackButton