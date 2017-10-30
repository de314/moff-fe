import React from 'react'
import PropTypes from 'prop-types'
import OAuthService from 'services/OAuthService'

import Spin from 'components/utils/Spin'

const Login = ({ isLoggingIn }) => (
  <div className="Login">
    <Spin spinning={isLoggingIn} >
      <h1>Hello, Login!</h1>
      <p>{isLoggingIn + ''}</p>
      <a href={OAuthService.getImgurAuthUrl()}>
        <button className="btn btn-success oauth-btn oauth-btn-imgur">
          Login with Imgur
        </button>
      </a>
      <a href={OAuthService.getRedditAuthUrl()}>
        <button className="btn btn-secondary oauth-btn oauth-btn-reddit">
          Login with Reddit
        </button>
      </a>
      <a href={OAuthService.getGoogleAuthUrl()}>
        <button className="btn btn-danger oauth-btn oauth-btn-google">
          Login with Google
        </button>
      </a>
    </Spin>
  </div>
)

Login.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
}

export default Login
