import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);


  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  
  const removeItemFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

 
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>O carrinho está vazio</Text>
      ) : (
        <>
          {cartItems.map((item) => (
            <View key={item.id} style={styles.cartItem}>
              <Text>{item.name}</Text>
              <Text>R$ {item.price.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => removeItemFromCart(item)}>
                <Text style={styles.removeButton}>Remover</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.total}>Total: R$ {calculateTotal()}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyCart: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default Cart;
