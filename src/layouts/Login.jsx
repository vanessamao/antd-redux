'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Icon, message } from 'antd';
import { loginAction, logoutAction } from '../actions/authActions';
import '../stylesheets/login.css';

const FormItem = Form.Item;

const FormData = React.createClass({
  propTypes: {
    isLogin: PropTypes.bool.isRequired,
    loginSub: PropTypes.func.isRequired
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      loading: false
    };
  },
  render() {
    return (
      <Form horizontal>
        <FormItem>
          <Input placeholder="用户名"/>
        </FormItem>
        <FormItem>
          <Input type="password" placeholder="密码"/>
        </FormItem>
        <Button type="primary"
                loading={ this.state.loading }
                onClick={ this.props.loginSub } >
          登录{this.props.isLogin ? 'yes': 'no'}
        </Button>
      </Form>
    );
  }
});
const FormPart = Form.create()(FormData);

const Login = React.createClass({
  propTypes: {
    isLogin: PropTypes.bool.isRequired,
    loginAction: PropTypes.func.isRequired
  },
  loginSubmit() {
    this.props.loginAction('guox', 'test');
    //if (0) {
    //  message.error('用户名或密码错误');
    //  this.setState({
    //    loading: false
    //  });
    //} else {
    //  this.context.router.push('/');
    //}
  },
  render() {
    return (
      <div className="layout-login">
        <div className="login-box">
          <div className="login-logo">
            <img src="/src/images/logo.png" />
          </div>
          {this.props.isLogin ? 'yes': 'no'}
          <FormPart isLogin={ this.props.isLogin }
                    loginSub={ this.loginSubmit } />
        </div>
      </div>
    );
  }
});

export default connect(
  state => ({ isLogin: false }),
  { loginAction, logoutAction }
)(Login);
