import React from 'react'

function Peaks({ name, image, mntClass, range, elevation, id, handleNameClick, }) {
  return (
    <tr>
      <td id="tabl-image" className={id} onClick={() => handleNameClick(id)}><img src={image} alt={name} className="table-image" /></td>
      <td className={id} onClick={() => handleNameClick(id)}>{name}</td>
      <td>{elevation.toString().slice(0,2) + ',' + elevation.toString().slice(2,5) + "'"}</td>
      <td className="class">{mntClass}</td>
      <td>{range}</td>
    </tr>
  )
}

export default Peaks