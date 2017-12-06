import React from 'react';
import FacebookLogin from 'react-facebook-login';


class App extends React.Component {


  render() {

      const responseFacebook = (response) => {
          console.log(response);
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
            fields="name,email,picture.width(800).height(800)"
            scope="public_profile"
            onClick={componentClicked}
            callback={responseFacebook}

        />
      </div>
    );
  }
}

export default App;
