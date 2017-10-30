import React from 'react'

const FloatingContentWrapper = ({ children }) => (
  <div className="FloatingContentWrapper">
    <div className="row justify-content-center align-items-center" style={{ minHeight: '86vh' }}>
      <div className="col-auto" style={{ background: '#fff', padding: 24, minHeight: 300, minWidth: '50vw' }}>
        {children}
      </div>
    </div>
  </div>
)

export default FloatingContentWrapper
