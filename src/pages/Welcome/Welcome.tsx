import { IonPage, IonContent, useIonViewWillEnter } from '@ionic/react';
import React, { useState } from 'react';
import Slides from '../../components/Slides/Slides';
import { getSlides } from '../../data/slides';
import { Slide } from '../../models/slide.model';
import { RouteComponentProps } from 'react-router';
import '../Welcome/Welcome.css';
const Welcome: React.FC<RouteComponentProps> = ({ history }) => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const handleGoHome = () => {
    history.push('/home');
  };

  useIonViewWillEnter(() => {
    const arraySlides = getSlides();
    setSlides(arraySlides);
  });

  return (
    <IonPage>
      <IonContent className="ion-content-welcome">
        {slides.length === 0 ? (
          <h3>Espere...</h3>
        ) : (
          <IonContent fullscreen={true} className="ion-content-welcome">
            <Slides slides={slides} onClickGoHome={handleGoHome} />
          </IonContent>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
