import {
  IonButton,
  IonContent,
  IonFooter,
  IonInput,
  IonItem,
  IonPage,
} from '@ionic/react';
import React from 'react';
import { SignIn } from '../../services/AuthenticationService';
import { User } from '../../models/user.model';

import './Login.css';
const Login: React.FC = () => {
  const handleClickSignIn = async () => {
    const userSignIn: User = {
      email: 'rdelarosa@gmail.com',
      password: 'NewHorizons2021',
    };
    const resultSignIn = await SignIn(userSignIn);
    console.log(resultSignIn);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <br />
        <br />
        <figure>
          <img
            src="https://ionicframework.com/blog/wp-content/uploads/2019/02/ionic-vs-react-native.png"
            alt="logo-app"
          />
        </figure>
        <br />
        <IonItem lines="none" className="ion-item-login">
          <IonInput type="email" placeholder="Correo Electronico" />
        </IonItem>
        <IonItem lines="none" className="ion-item-login">
          <IonInput type="password" placeholder="Contraseña" />
        </IonItem>
      </IonContent>
      <IonFooter className="ion-padding">
        <IonButton
          size="large"
          expand="block"
          type="button"
          fill="solid"
          onClick={handleClickSignIn}
        >
          Ingresar
        </IonButton>
        <IonButton
          size="large"
          expand="block"
          fill="outline"
          routerLink="/register"
          routerDirection="forward"
        >
          Registrar
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
