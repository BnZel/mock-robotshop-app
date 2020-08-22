import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import './Tab1.css';
import Products from '../Products';
import Cart from '../Cart';

const Tab1: React.FC = () => {

  const [cart, setCart] = useState([] as any);  
  const [page, setPage] = useState('products')

  const addToCart = (product: any) => {
    setCart([...cart, {...product}]);  // destruct, new object reference
  };

  const removeFromCart = (productToMove) => {
    setCart(cart.filter(product => product !== productToMove))
  };

  const navigateTo = (nextPage:any) => {
    setPage(nextPage)
  }

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Robot Shop</IonTitle>
          <IonButton onClick={() => navigateTo('products')}slot="end" >View Products</IonButton>
          <IonButton onClick={() => navigateTo('cart')}slot="end" >Items in cart: {cart.length}</IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {page == 'products' && <Products addToCart={addToCart} />}
        {page == 'cart' && <Cart cart={cart} removeFromCart={removeFromCart}/>}
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
