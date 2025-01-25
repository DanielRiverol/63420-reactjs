import React from 'react'
import CompC from './CompC'
function CompB() {
  return (
    <div className='card'>
      <h1>CompB</h1>

      {/* {theme} */}
      <CompC />
    </div>
  );
}

export default CompB