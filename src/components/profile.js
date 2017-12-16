/*
    Profile component
 */
import React from 'react';
import { connect } from 'react-redux';

//Avatar element from matrial ui for the profil picture
import Avatar from 'material-ui/Avatar';


const style = {
    padding: 20,
    textAlign: 'center',
    fontFamily: 'Oswald',
    display: 'flex',
    justifyContent: 'center'

};
//Profile componenet to display user informations
class Profile extends React.Component {


    render() {
        //return user information
        if(this.props.user){
            return (
                <div style={style}>
                    <table>
                        <tr align="center">
                            <td align="center">
                    <Avatar size={300} src={this.props.user.picture.data.url} />
                            </td>
                            <td valign="top" align="center">

                                <h3> Name : {this.props.user.name} </h3>

                                <h3> Id : {this.props.user.id} </h3>
                            </td>
                        </tr>
                    </table>
                </div>
            );
        }else{
            return(
                <div>
                    <h6>Login to see your profile</h6>
                </div>
            );

        }
    }
}
/*
    store functions map the state to this component Profile
    to display user information from the state
 */
const mapStateToProps = (state) => {

    return {
        user : state.userData.user ,
    };
};


export default connect(mapStateToProps)(Profile);

