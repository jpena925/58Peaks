import React from 'react'

function PackingList({ packingList }) {

  const listItems = packingList.map(item => <div>
    <li className='packing-item' key={item}>{item}<input type="checkbox" className='packing-check'/></li>
    
    </div>)

  return (
    <div>
      <ul id="packing-list">
        {listItems}
      </ul>
    </div>
  )
}

export default PackingList