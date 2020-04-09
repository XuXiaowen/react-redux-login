import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'

class MenuBar extends Component {
    state = {
        current: 'login'
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }
    
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="login">
                        <Link to="/">登录</Link>
                    </Menu.Item>
                    <Menu.Item key="register">
                        <Link to="/signup">注册</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default MenuBar