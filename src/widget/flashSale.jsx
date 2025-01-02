import React from 'react';
import {FlatList, Image, StyleSheet, Text, View, Pressable} from 'react-native';
import appColors from '../theme/colors';

const FlashSale = () => {
  // Flaş ürünler için sabit veriler
  const flashSaleProducts = [
    {
      id: '1',
      name: 'T-Shirt',
      price: '99.99',
      imageUrl:
        'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1597/prod/QC/20241102/23/6c715f9e-98d1-365a-8080-adab165141cd/1_org_zoom.jpg',
    },
    {
      id: '2',
      name: 'Jeans',
      price: '149.99',
      imageUrl:
        'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1592/prod/QC/20241024/17/996ade89-f5be-34ad-bd41-6f4e08b68c03/1_org_zoom.jpg',
    },
    {
      id: '3',
      name: 'Jacket',
      price: '249.99',
      imageUrl:
        'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1602/prod/QC/20241119/14/49063223-3424-3167-b312-0052c514f9d7/1_org_zoom.jpg',
    },
    {
      id: '4',
      name: 'Sneakers',
      price: '199.99',
      imageUrl:
        'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1614/prod/QC/20241223/17/99ffb487-3332-30c7-aaba-a3638357fe92/1_org_zoom.jpg',
    },
    {
      id: '5',
      name: 'Hat',
      price: '49.99',
      imageUrl:
        'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1321/product/media/images/prod/QC/20240521/18/3086a250-0aa2-3237-aa48-5ed66562bd4d/1_org_zoom.jpg',
    },
    {
      id: '6',
      name: 'Bag',
      price: '119.99',
      imageUrl:
        'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1616/prod/QC/20241216/15/64073e2c-7062-3129-be65-0d7015580aa6/1_org_zoom.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.flashSaleHeader}>
        <Text style={styles.sectionTitle}>Flaş Ürünler 🎉🔥</Text>
      </View>

      <FlatList
        data={flashSaleProducts}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => (
          <View style={styles.productContainer}>
            <Pressable style={styles.productBox}>
              <Image
                source={{uri: item.imageUrl}}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price} ₺</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: '#FF5E00',
    height: 300,
  },
  flashSaleHeader: {
    backgroundColor: '#FF5E00', // Canlı turuncu
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 5,
    textAlign: 'center',
  },
  flatListContent: {
    alignItems: 'center',
  },
  productContainer: {
    marginRight: 25,
    marginLeft: 10,
  },
  productBox: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5E00',
  },
});
