import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
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
import { useContext } from 'react';
import ApplicationContext from '../../context/ApplicationContext';
import { Character } from '../../models/character.model';
import { ResultInfo } from '../../models/resultInfo.model';
import './Home.css';

const Home: React.FC = () => {
  const applicationContext = useContext(ApplicationContext);

  useIonViewDidEnter(() => {
    setTimeout(async () => getApiData('https://rickandmortyapi.com/api/character'), 3000);
  });

  const getApiData = async (url: string) => {
    const result = await fetch(url);
    const data = await result.json();
    const resultCharacters: Character[] = data.results;
    const resultInfo: ResultInfo = data.info;

    /**ACTUALIZANDO EL ESTADO */
    applicationContext.refreshCharacters(resultCharacters);
    applicationContext.refreshResultInfo(resultInfo);
  }

  const handleClickPage = (url: string) => getApiData(url);

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
        {applicationContext.characters.length === 0 ? (
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
            {applicationContext.characters.map((item) => (
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
      <IonFooter>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton color="primary"
              onClick={() => handleClickPage(applicationContext.resultInfo.prev)}
              disabled={applicationContext.resultInfo.prev === null ? true : false}
            >Anterior</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="primary"            
              onClick={() => handleClickPage(applicationContext.resultInfo.next)}
              disabled={applicationContext.resultInfo.next === null ? true : false}
            >Siguiente</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
