import React, { Component } from 'react'
import SignupForm from './SignupForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as signupActions from '../../actions/signupActions';

class SignupPage extends Component {

    render() {
        return (
            <div>
                <SignupForm signupActions={this.props.signupActions}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupActions: bindActionCreators(signupActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(SignupPage)