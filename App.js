import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductItem from './src/Item';
import ProductList from './src/ListaItem';
import Cart from './src/Cart';


function TelaInicial() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ProductList/>
    </View>
  );
}

function TelaSecundaria() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {

  const [cartItems, setCartItems] = useState([]); 


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Padaria"
        component={TelaInicial}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>

  );
}

export default App;
