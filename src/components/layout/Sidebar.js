import React from 'react'

import { Menu } from 'antd';
import { Link } from 'react-router-dom'

const Sidebar = () => (
  <div className="Sidebar">
    <div className="logo" />
    <Menu theme="dark" mode="inline">
      <Menu.Item key="1">
        <Link to="/">
          <i className="fa fa-tachometer mr-6"></i>
          <span>Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/users">
          <i className="fa fa-users mr-6"></i>
          <span>Users</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/profile/edit">
          <i className="fa fa-address-card-o mr-6"></i>
          <span>Edit Profile</span>
        </Link>
      </Menu.Item>
    </Menu>
  </div>
)

export default Sidebar
