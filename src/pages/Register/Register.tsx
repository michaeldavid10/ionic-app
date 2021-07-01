import {
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonToolbar,
} from '@ionic/react';
import { chevronBackSharp } from 'ionicons/icons';
import React from 'react';

import './Register.css';
const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons>
            <IonButton routerLink="/login" routerDirection="back">
              <IonIcon icon={chevronBackSharp} />
              Regresar
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <br />
        <figure>
          <img
            src="https://ionicframework.com/blog/wp-content/uploads/2019/02/ionic-vs-react-native.png"
            alt="logo-app"
          />
        </figure>
        <IonItem lines="none" className="ion-item-register">
          <IonInput type="text" placeholder="Nombres" />
        </IonItem>
        <IonItem lines="none" className="ion-item-register">
          <IonInput type="text" placeholder="Apellidos" />
        </IonItem>
        <IonItem lines="none" className="ion-item-register">
          <IonInput type="email" placeholder="Correo Electronico" />
        </IonItem>
        <IonItem lines="none" className="ion-item-register">
          <IonInput type="password" placeholder="Contraseña" />
        </IonItem>
      </IonContent>
      <IonFooter className="ion-padding">
        <IonButton size="large" expand="block" fill="solid">
          Registrar
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default Register;
