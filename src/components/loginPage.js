import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import {setUserData} from "../actions/actions";

//paper element from materiel ui
import Paper from 'material-ui/Paper';

const style = {
    padding: 20,
    width: '98%',
    textAlign: 'center',
    display: 'inline-block',
    fontFamily: 'Oswald',

};
//loginPage componenet to get user information from facebook API
class LoginPage extends React.Component {

    render() {


        const responseFacebook = (response) => {
            //console.log(response);
            //dispatch setUserData action to the store
            response ? this.props.setUserData(response): console.log("extern erreur");

        }


        const componentClicked = () => {
            //console.log("go to next page");
            //actions after button click
            console.log( this.props);

        }

        //use npm react-facebook-login to create Facebook Login componenet
        return (
            <div>
                <Paper style={style} zDepth={2} >
                <h2>Login Page</h2>


                    <FacebookLogin
                    appId="163127807768015"
                    autoLoad={false}
                    disableMobileRedirect={true}
                    fields="name,email,picture.width(800).height(800)"
                    scope="public_profile"
                    onClick={ () => {componentClicked()}}
                    callback={responseFacebook}

                    textButton="LOGIN WITH FACEBOOK"
                    cssClass="kep-login-facebook"
                    icon="fa-facebook"
                />
                </Paper>
            </div>

        );
    }
}
/*
    store functions map the state and actions to this component LoginPAge
 */
const mapStateToProps = (state) => {
    console.log(state);
    return {
        user : state.userData.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (user) => dispatch(setUserData(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

