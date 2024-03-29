import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
const responseFacebook = (response) => {
  console.log(response);
};
const Main = () => {
  return (
    <div>
      <FacebookLogin
        appId="794450782021127"
        scope="public_profile, email, user_friends,user_location,user_age_range,user_birthday,user_likes,user_posts"
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success! dcdwc", response);
        }}
      />
      

      <p>helo</p>
    </div>
  );
};

export default Main;
