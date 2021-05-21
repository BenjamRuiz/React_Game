import React from "react";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {useAuth0} from '@auth0/auth0-react'

const Buttons = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if(isLoading)
    return "";

  return isAuthenticated ? (
    <div>
      <ProfileButton/>
      
    </div>
  ) : (
    <LoginButton/>
  );

}

const LoginButton = () =>{
  const {loginWithRedirect} = useAuth0();

  return (
    <Button  variant="outline-light" onClick={ () => loginWithRedirect()}>
      Iniciar Sesión
    </Button>
  )
}

const ProfileButton = () =>{
  const {logout} = useAuth0();

  return (
    <Container>
   <div>
  <Button variant="outline-light" href="/profile">
      Perfil
      </Button>
   </div>
   <div>
   <Button  variant="outline-light" onClick={ () => logout({ returnTo: window.location.origin})}>
        Cerrar Sesión
      </Button>
   </div>   
   </Container>
  )
}

/*const LogoutButton = () =>{
  const {logout} = useAuth0();

  return (
      
      <Button  variant="outline-light" onClick={ () => logout({ returnTo: window.location.origin})}>
        Cerrar Sesión
      </Button>
    
  )
}*/

class ProfileButtons extends React.Component {
    render() {
        return (
          <Buttons/>
        );
      }
  }

  export default ProfileButtons;