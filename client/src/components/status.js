import React from 'react';
import './status.css'


const StatusFilter = (props) => {
  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label >Filter by Payment Status</label>
        <select value={props.status} onChange={(event)=>{
            props.changeStatus(event.target.value)
        }}>
          <option value='UNPAID'>UNPAID</option>
          <option value='PAID'>PAID</option>
          
        </select>
      </div>
    </div>
  );
};

export default StatusFilter;