import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from "react-google-login";
import { GoogleLoginButton } from "react-social-login-buttons";

export default function GoogleLoginSet() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLoginButton>
      <div className="googleButton">
        <GoogleLogin
          clientId="831687896322-44sc959subao4ngh3mdg1bbhhogbl96m.apps.googleusercontent.com"
          clientSecret="SFO24sa0c85TiXnL2OH6aWLZ"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
          icon={false}
        />
      </div>
    </GoogleLoginButton>
  );
}
