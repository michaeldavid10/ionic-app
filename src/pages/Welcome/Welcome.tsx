import {
  IonPage,
  IonContent,
  useIonViewWillEnter,
  IonLoading,
} from '@ionic/react';
import React, { useState } from 'react';
import Slides from '../../components/Slides/Slides';
import { getSlides } from '../../data/slides';
import { Slide } from '../../models/slide.model';
import { useHistory } from 'react-router';
import '../Welcome/Welcome.css';

const Welcome: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const history = useHistory();
  const handleGoHome = () => {
    history.push('/home');
  };

  useIonViewWillEnter(() => {
    setTimeout(() => {
      const arraySlides = getSlides();
      setSlides(arraySlides);
    }, 5000);
  });

  return (
    <IonPage>
      <IonContent className="ion-content-welcome">
        {slides.length === 0 ? (
          <IonLoading isOpen={true} message={'Cargando...'} />
        ) : (
          <Slides slides={slides} onClickGoHome={handleGoHome} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
