import React from 'react';
import PropTypes from 'prop-types';

import CSSModules from 'react-css-modules';
import styles from './style.scss';

export class Login extends React.Component {

    static propTypes = {
        handleLogin: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {

    }

    usernameHandle(element) {
        this.setState({
            username: element.target.value
        })
    }

    passwordHandle(element) {
        this.setState({
            password: element.target.value
        })
    }

    clickHandle() {
        if (this.state.username && this.state.password) {
            this.props.handleLogin(this.state.username);
        }
    }

    render() {

        return (
            <div styleName="login-container">
                <div styleName="input-container phone-container">
                    <i className="fas fa-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.usernameHandle.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div styleName="input-container password-container">
                    <i className="fas fa-key"></i>
                    <input
                        type="text"
                        placeholder="输入验证码"
                        onChange={this.passwordHandle.bind(this)}
                        value={this.state.password}
                        />
                    <button>发送验证码</button>
                </div>
                <button styleName="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        )

    }

}

Login = CSSModules(Login, styles, {"allowMultiple":true});

export default Login;
