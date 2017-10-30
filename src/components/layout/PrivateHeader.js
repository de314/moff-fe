import React from 'react'
import { selectSidebarCollapsed } from 'rdx/selectors'
import { setSidebarCollapse } from 'rdx/actions'

import { compose } from 'recompose'
import { connect } from 'react-redux'

import { Layout, Menu, Icon, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom'

const { Header } = Layout;

// TODO: combine headers?

const PrivateHeader = ({ collapsed, setCollpased }) => (
  <div className="PrivateHeader">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">[logo]</a>
      <button class="navbar-toggler" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="row">
        <div className="col">
          toggle
        </div>
        <div className="col ml-auto">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
              <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)

export default compose(
  connect(
    state => ({ collapsed: selectSidebarCollapsed(state) }),
    dispatch => ({
      setCollpased: (collapsed) => dispatch(setSidebarCollapse(collapsed))
    })
  )
)(PrivateHeader)
