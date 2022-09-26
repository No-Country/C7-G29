import GoogleLogin from "react-google-login";

function GoogleButton() {
  function handleFailure(result) {
    console.log(result);
  }
  function handleLogin(googleData) {
    console.log(googleData);
  }

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Log in whit Google"
      onSuccess={handleLogin}
      onFailure={handleFailure}
    />
  );
}

export default GoogleButton;
