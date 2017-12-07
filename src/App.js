import React from 'react';
import FacebookLogin from 'react-facebook-login';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : "default"};
    }


    render() {

        const responseFacebook = (response) => {
            console.log(response);
            console.log(response.name);
            this.setState({name :response.name});
        }




        const componentClicked = () => {
            console.log("clicked");
        }

        return (
            <div>
                <h2>Welcome to Twin Minds</h2>
                <FacebookLogin
                    appId="163127807768015"
                    autoLoad={true}
                    disableMobileRedirect={true}
                    fields="name,email,picture.width(800).height(800)"
                    scope="public_profile"
                    onClick={() => {componentClicked}}
                    callback={responseFacebook}

                />
                <div>
                    <h2>your name is : </h2>
                    <h2>{this.state.name}</h2>
                </div>
            </div>

        );
    }
}

export default App;
