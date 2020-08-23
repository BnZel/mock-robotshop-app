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

  const removeFromCart = (productToMove, value) => {
    let crt = setCart(cart.filter(product => product !== productToMove))
    let rm = cart.reduce((a,b) => a - b, value)
    return [crt, rm]
  };

  const calculateCost = () => { 
    var i = 0, totalPrice = 0;
    for (i; i < cart.length; i = i + 1){
      if(cart[i].intcost){
        totalPrice = totalPrice + cart[i].intcost;
      }
    }
    console.log("total price: ",totalPrice)
    return totalPrice
    // return cart.reduce((a,b) => a + b, value)
  }

  const navigateTo = (nextPage:any) => {
    setPage(nextPage)
  };

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Robot Shop</IonTitle>
          <IonButton onClick={() => navigateTo('products')} slot="end" >View Products</IonButton>
          <IonButton onClick={() => navigateTo('cart')} slot="end" >Items in cart: <b>({cart.length})</b></IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {page == 'products' && <Products addToCart={addToCart} />}
        {page == 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} calculateCost={calculateCost}/>}
      </IonContent>

    </IonPage>
  );
};

export default Tab1;
