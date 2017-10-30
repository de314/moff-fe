import React from 'react'
import { selectSidebarCollapsed } from 'rdx/selectors'
import classnames from 'classnames'

import { compose } from 'recompose'
import { connect } from 'react-redux'

import Sidebar from './Sidebar'
import Footer from './Footer'
import PrivateHeader from './PrivateHeader'
import { PrivateRoutes } from 'router'

const PrivateApp = ({ collapsed, toggle }) => (
  <div className="PrivateApp">
    <div className="layout container-fluid">
      <div className="row">
        <div className={classnames('col', 'layout-left', { 'sidebar-collapsed': collapsed })}>
          <Sidebar />
        </div>
        <div className={classnames('col', 'layout-right', { 'sidebar-collapsed': collapsed })}>
          <PrivateHeader />
          <div className="content" style={{ padding: '2em 4em 0 4em' }}>
            <PrivateRoutes />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default compose(
  connect(
    state => ({ collapsed: selectSidebarCollapsed(state) })
  )
)(PrivateApp)
