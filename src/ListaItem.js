import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import ProductItem from './Item';
import Cart from './Cart';



const ProductList = ({onAddToCart}) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Pão Francês', price: 0.50 },
    { id: 2, name: 'Pão Integral', price: 1.0 },
    { id: 3, name: 'Pão de Queijo', price: 2.5 },
    { id: 4, name: 'Pão Bolachão', price: 0.50 },
    { id: 5, name: 'Pão Brioche', price: 1.50 },
    { id: 6, name: 'Pão de Cachorro quente', price: 1.50 }
  ]);


  
  
  

  

  const [totalPrice, setTotalPrice] = useState(0);
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const handleAddToCart = (product) => {
    onAddToCart(product); 
  };

  const handleProductPress = (product) => {
    setTotalPrice(totalPrice + product.price);
  };

  const handleProductRemove = (product) => {
    const newTotalPrice = totalPrice - product.price;
    if (newTotalPrice >= 0) {
      setTotalPrice(newTotalPrice);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setNewProductName(product.name);
    setNewProductPrice(product.price.toString());
  };

  const handleUpdateProduct = () => {
    const updatedProducts = products.map((product) => {
      if (product.id === editingProductId) {
        return {
          ...product,
          name: newProductName,
          price: parseFloat(newProductPrice)
        };
      }
      return product;
    });
    setProducts(updatedProducts);
    setEditingProductId(null);
    setNewProductName('');
    setNewProductPrice('');
  };

  const handleAddProduct = () => {
    
    const existingProduct = products.find((product) => product.name.toLowerCase() === newProductName.toLowerCase());
  
    if (existingProduct) {
      alert('Um produto com o mesmo nome já existe!');
      return;
    }
  
    const newProduct = {
      id: Date.now(),
      name: newProductName,
      price: parseFloat(newProductPrice)
    };
    setProducts([...products, newProduct]);
    setNewProductName('');
    setNewProductPrice('');
  };
  

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };
  


  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            product={item}
            onPress={() => handleProductPress(item)}
            onRemove={() => handleProductRemove(item)}
            onEdit={() => handleEditProduct(item)}
          />
        ))}
      </ScrollView>
      <Text style={styles.totalPrice}>Total: R$ {totalPrice.toFixed(2)}</Text>
      <View style={styles.formContainer}>
        <Text style={styles.formLabel}>Nome:</Text>
        <TextInput
          style={styles.formInput}
          value={newProductName}
          onChangeText={(text) => setNewProductName(text)}
        />
        <Text style={styles.formLabel}>Preço:</Text>
        <TextInput
          style={styles.formInput}
          value={newProductPrice}
          onChangeText={(text) => setNewProductPrice(text)}
          keyboardType="numeric"
        />
        {editingProductId ? (
          <TouchableOpacity style={styles.formButton} onPress={handleUpdateProduct}>
            <Text style={styles.formButtonLabel}>Salvar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.formButton} onPress={handleAddProduct}>
          <Entypo style = {styles.icon} name="add-to-list" size={24} color="black" />
          </TouchableOpacity>
        )}

        
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    marginTop: 16,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  title: {
    height: 80,
    textAlign: 'center',
    backgroundColor: '#ff6961',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 116,
    marginTop: 20,
    borderRadius: 8,
    paddingTop: 20
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 16
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  formContainer: {
    marginTop: 0
  },
  formLabel: {
    fontSize: 15,
    marginBottom: 10
  },
  formInput: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  formButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 4,
    marginTop: 16,
  },
  formButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  icon: {
  
    textAlign: 'center'
  }
});

export default ProductList;
