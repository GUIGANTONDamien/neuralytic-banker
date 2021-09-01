import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>Footer a définir</div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
