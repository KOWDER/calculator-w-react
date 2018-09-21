import React from 'react';

export default ({ name, val, typ, handleBtn }) => {
  return (
    <div onClick={handleBtn} className={`calc-btn btn-${name}`} data-type={typ}>{val}</div>
  )
}
