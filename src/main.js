import React from 'react'
import FacebookLogin from '@greatsumini/react-facebook-login';
const responseFacebook = (response) => {
console.log(response);
}
const Main = () => {
  return (
    <div>
  <FacebookLogin
  appId="3601169450150870"
  onSuccess={(response) => {
    console.log('Login Success!', response);
  }}
  onFail={(error) => {
    console.log('Login Failed!', error);
  }}
  onProfileSuccess={(response) => {
    console.log('Get Profile Success! dcdwc', response);
  }}
/>
  <p>helo</p>
    </div>
  )
}

export default Main
