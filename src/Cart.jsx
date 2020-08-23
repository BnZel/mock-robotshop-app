import React, {useState} from 'react';
import { IonAlert, IonModal, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonButton, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon, IonLabel, IonTitle, IonHeader, IonToolbar, IonFooter, IonInput } from '@ionic/react';
import { checkmarkCircleOutline } from 'ionicons/icons';

export default function Cart({cart, removeFromCart, calculateCost}){

    const [text, setText] = useState(String);
    const [number, setNumber] = useState(Number);
    const [showAlert, setShowAlert] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    return(
        <>
          <IonGrid>
              <IonRow>  
              {cart.map((product, idx) => (
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
                              <IonButton onClick={() => removeFromCart(product, product.intcost)} fill="solid" size="default" slot="start">Remove</IonButton>
                            </IonItem>
                        </IonCard>
                      </IonCol>
                  </>
                ))}
              </IonRow>   
            </IonGrid>

            {
              cart.length == 0 && 
              <>
                <IonItem>
                  <IonLabel style={{textAlign: "center"}}>
                    <b>Cart is empty...</b>
                  </IonLabel>
                </IonItem>
              </>
            }

            {
              cart.length > 0 && 
              <>
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                  <IonFabButton onClick={() => setShowModal(true)} color='success'>
                    <IonIcon icon={checkmarkCircleOutline}/>
                  </IonFabButton>
                </IonFab>
              </>
            }

            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle color="primary">Checkout</IonTitle>
                </IonToolbar>
              </IonHeader>

              <IonItem>
                <IonLabel>
                  Total Price: <b>${calculateCost()}</b>
                </IonLabel>
              </IonItem>

              <form>
                <IonItem>
                  <IonLabel position="stacked"></IonLabel>
                  <IonInput value={text} pattern="text" placeholder="Full Name"></IonInput>
                  <IonInput value={text} inputMode="email" pattern="email" placeholder="Email Address"></IonInput>
                  <IonInput value={text} placeholder="Address"></IonInput>
                  <IonInput value={text} placeholder="Country"></IonInput>
                  <IonInput value={text} placeholder="City"></IonInput>
                  <IonInput value={text} placeholder="Zip/Postal Code"></IonInput>
                  <IonInput pattern="tel" inputMode="tel" placeholder="Phone #" ></IonInput>
                  <IonInput value={text} placeholder="Shipping Address"></IonInput>
                  <IonInput placeholder="Credit Card #"></IonInput>
                </IonItem>
              </form>

              <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                header={'Thank You!'}
                message={'You product will be delivered'}
                buttons={['OK']}
              />

              <IonFooter style={{textAlign: "center"}}>
                <IonButton onClick={() => setShowAlert(true)} expand="full">Buy</IonButton>
                <IonButton onClick={() => setShowModal(false)} color="danger" expand="full">Cancel</IonButton>
              </IonFooter>
            </IonModal>  
        </>
    )
}