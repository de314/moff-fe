import React from 'react'

import Footer from './Footer'
import { Layout } from 'antd';
import PublicHeader from './PublicHeader'
import { PublicRoutes } from 'router'

const { Content } = Layout;

const PublicApp = () => (
  <div className="PublicApp">
    <div className="layout container-fluid">
      <PublicHeader />
      <div className="content" style={{ padding: '2em 4em 0 4em' }}>
        <PublicRoutes />
      </div>
      <Footer />
    </div>
  </div>
)

export default PublicApp
