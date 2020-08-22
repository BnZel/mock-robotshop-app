import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonRow, IonCol, IonIcon, IonLabel, IonGrid, IonFabButton } from '@ionic/react';
import { logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [products] = useState([
    {
      name:'CEO',
      image:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      name:'CTO',
      image:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      name:'Researcher 1',
      image:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      name:'Researcher 2',
      image:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
    {
      name:'Researcher 3',
      image:'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    },
  ])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
          <IonFabButton size='small' slot="end">
            <IonIcon icon={logoFacebook} />
          </IonFabButton>
          <IonFabButton size='small' slot="end">
            <IonIcon icon={logoTwitter} />
          </IonFabButton>
          <IonFabButton size='small' slot="end">
            <IonIcon icon={logoInstagram} />
          </IonFabButton>
        </IonToolbar>
      </IonHeader>
      <IonContent >

        <IonGrid>
          <IonRow>
            {products.map((names, idx) => (
              <>
              <IonCol key={idx}> 
                <IonItem>
                  <IonAvatar slot="start">
                    <img src={names.image} />
                  </IonAvatar>
                  <IonLabel>{names.name}</IonLabel>

                  <IonLabel>
                    <p>dolor sit amet</p>
                    <p>Duis ut urna neque.</p>
                    <p>consectetur adipiscing elit.</p>
                  </IonLabel>
                  
                </IonItem>
              </IonCol>
              </>
            ))}

          </IonRow>
        </IonGrid>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.In tristique feugiat neque eu facilisis. 
        Praesent in lectus massa. In commodo egestas ex. Cras molestie purus ut odio rutrum rhoncus.
      </p>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
