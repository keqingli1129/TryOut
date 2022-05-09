import React from 'react'

function MemoComp({name}) {
  console.log('Render')
    return (
    <div>{name}</div>
  )
}

export default React.memo(MemoComp)