import React from 'react'
import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
console.log(response);
}
const main = () => {
  return (
    <div>
      <FacebookLogin
    appId="3601169450150870"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
  <p>helo</p>
    </div>
  )
}

export default main
