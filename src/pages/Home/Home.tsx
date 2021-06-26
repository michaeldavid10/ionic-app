import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';
import { useState } from 'react';
import { Character } from '../../models/character.model';
import './Home.css';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useIonViewDidEnter(() => {
    setTimeout(async () => {
      const result = await fetch('https://rickandmortyapi.com/api/character');
      const data = await result.json();
      const resultCharacters: Character[] = data.results;

      /**ACTUALIZANDO EL ESTADO */
      setCharacters(resultCharacters);
    }, 3000);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Ionic App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {characters.length === 0 ? (
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonCard>
                  <IonSkeletonText
                    animated
                    style={{ width: '100%', height: '300px' }}
                  />
                  <IonCardHeader>
                    <IonCardSubtitle>
                      <IonSkeletonText animated style={{ width: '100%' }} />
                    </IonCardSubtitle>
                    <IonCardTitle>
                      <IonSkeletonText animated style={{ width: '100%' }} />
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonSkeletonText animated style={{ width: '100%' }} />
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonSkeletonText
                    animated
                    style={{ width: '100%', height: '300px' }}
                  />
                  <IonCardHeader>
                    <IonCardSubtitle>
                      <IonSkeletonText animated style={{ width: '100%' }} />
                    </IonCardSubtitle>
                    <IonCardTitle>
                      <IonSkeletonText animated style={{ width: '100%' }} />
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonSkeletonText animated style={{ width: '100%' }} />
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        ) : (
          <IonGrid>
            {characters.map((item) => (
              <IonRow key={item.id}>
                <IonCol className="ion-text-center">
                  <IonCard>
                    <img src={item.image} alt="content-rym" />
                    <IonCardHeader>
                      <IonCardSubtitle>{item.species}</IonCardSubtitle>
                      <IonCardTitle>{item.name}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <p>{item.status}</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
