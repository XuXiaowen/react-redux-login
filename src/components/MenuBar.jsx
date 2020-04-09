import React, { Component } from 'react'
import { Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'

class MenuBar extends Component {

    render() {
        const { pathname } = this.props.history.location;

        return (
            <div>
                <Menu 
                    style={{textAlign: 'center'}} 
                    selectedKeys={[pathname]} 
                    mode="horizontal"
                >
                    <Menu.Item key="/">
                        <Link to="/">登录</Link>
                    </Menu.Item>
                    
                    <Menu.Item key="/signup">
                        <Link to="/signup">注册</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default withRouter(MenuBar)