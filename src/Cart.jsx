import React, {useState} from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';

export default function Cart({cart, removeFromCart}){
    return(
        <>
        <IonGrid>
            <IonRow>  
            {cart.map((product, idx) => (
                <>     
                    <IonCol>
                      <IonCard >
                        <img src={product.image} key={idx}/>
                          <IonCardHeader>
                            <IonCardTitle>{product.name}</IonCardTitle>
                          </IonCardHeader>
  
                          <IonCardContent>
                            {product.cost}
                          </IonCardContent>
  
                          <IonItem>
                            <IonButton onClick={() => removeFromCart(product)} fill="solid" size="default" slot="start">Remove</IonButton>
                          </IonItem>
                      </IonCard>
                    </IonCol>
                </>
              ))}
            </IonRow>   
          </IonGrid>
      </>
    )
}