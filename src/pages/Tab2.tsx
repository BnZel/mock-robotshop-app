import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSlide, IonSlides } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Tab2: React.FC = () => {
  const [images] = useState([
    {
      image:'assets/icon/slide-bot1.jpg',
    },
    {
      image:'assets/icon/profile-t1.jpg',
    },
    {
      image:'assets/icon/profile-t800.jpg',
    },
  ])

  return (    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Featured Robots</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonSlides pager={true} options={slideOpts}>

      {images.map((image, idx) => (
          <>
            <IonSlide key={idx}>
              <img src={image.image}/>              
            </IonSlide>        
          </>
      ))}
      </IonSlides>  
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.In tristique feugiat neque eu facilisis. 
        Praesent in lectus massa. In commodo egestas ex. Cras molestie purus ut odio rutrum rhoncus.
        Cras nec metus euismod, viverra dui sit amet, fringilla justo. Pellentesque non lacus ac enim fermentum pretium eget quis felis.
        Donec imperdiet hendrerit diam, sed vestibulum mauris ultrices sit amet.
        Cras sodales, nisl sed consequat facilisis, sem neque bibendum sem, id feugiat elit lorem in nulla. Mauris nibh sem, aliquam nec sodales vel, feugiat ut arcu. 
        Pellentesque molestie risus quis odio pellentesque tempus in sit amet elit.
      </p>
      
    </IonContent>
    </IonPage>
  );
};

export default Tab2;
