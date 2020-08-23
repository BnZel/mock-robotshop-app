import React, {useState} from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

export default function Products({addToCart}){
    const [products] = useState([
        {
          name:'T-800',
          cost:'$1,000,000',
          intcost: 1000000,
          image:'assets/icon/profile-t800.jpg'
        },
        {
          name: 'T-1',
          cost: '$1,150,000',
          intcost: 1150000,
          image:'assets/icon/profile-t1.jpg'
        },
        {
          name:'T-850',
          cost:'$1,250,000',
          intcost: 1250000,
          image:'assets/icon/profile-t800.jpg'
        },
        {
          name:'Keepon',
          cost:'$100',
          intcost: 100,
          image:'assets/icon/profile-keepon.jpg'
        },
        {
          name:'Aibo',
          cost:'$150',
          intcost: 150,
          image:'assets/icon/profile-aibo.jpg'
        },
        {
          name:'Photon',
          cost:'$200',
          intcost: 200,
          image:'assets/icon/profile-photon.jpg'
        },
      ])

    return(
        <IonGrid>
            <IonRow>  
            {products.map((product, idx) => (
                <>     
                    <IonCol>
                      <IonCard>
                          <img src={product.image} key={idx}/>
                          <IonCardHeader>
                              <IonCardTitle>{product.name}</IonCardTitle>
                          </IonCardHeader>
                          <IonCardContent>
                              {product.cost}
                          </IonCardContent>

                          <IonItem>
                              <IonButton onClick={() => addToCart(product)} fill="solid" size="default" slot="start">Add to Cart</IonButton>
                          </IonItem>
                      </IonCard>
                    </IonCol>
                </>
            ))}
            </IonRow>   
        </IonGrid>
    )

}