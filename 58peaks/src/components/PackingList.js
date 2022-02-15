import React from 'react'

function PackingList({ packingList }) {

  const listItems = packingList.map(item => <li>{item}</li>)

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default PackingList