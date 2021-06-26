import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="ion-text-center">
          <h1>⚛ Home</h1>
          <IonItem routerLink="/welcome/">Welcome</IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
