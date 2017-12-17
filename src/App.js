/*
    App : the Main component of the app
    with one child component LoginPage
 */
import React from 'react';
import LoginPage from './components/loginPage';
import Profile from './components/profile';

//AppBar from Ui-material to display app title
import AppBar from 'material-ui/AppBar';

const style = {
    marginBottom: "60px",
    fontFamily: 'Oswald',
};
class App extends React.Component {


    render() {
       return (
            <div>
                <center>
                    <AppBar style={style} title ="Welcome Redux React Fb Login" zDepth={3}  showMenuIconButton={false} />
                    <LoginPage/>
                    <Profile/>
                </center>
            </div>

        );
    }
}

export default App;
