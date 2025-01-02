import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const SpecialBrands = () => {
  // Sabit markalar ve logo URL'leri
  const brands = [
    {
      id: '1',
      name: 'Nike',
      logoUrl:
        'https://cdn.dsmcdn.com/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg',
    },
    {
      id: '2',
      name: 'Adidas',
      logoUrl:
        'https://cdn.dsmcdn.com/marketing/datascience/automation/2023/4/26/Bershka_202304260943.png',
    },
    {
      id: '3',
      name: 'Puma',
      logoUrl:
        'https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg',
    },
    {
      id: '4',
      name: 'Reebok',
      logoUrl:
        'https://cdn.dsmcdn.com/marketing/datascience/Automation/BrandBoutique/2021/12/29/converse.png',
    },
    {
      id: '5',
      name: 'Under Armour',
      logoUrl:
        'https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Prada_202301271558.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Özel Markalar 🏷️</Text>
      </View>

      <FlatList
        data={brands}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => (
          <View style={styles.brandContainer}>
            <Image source={{uri: item.logoUrl}} style={styles.brandLogo} />
          </View>
        )}
      />
    </View>
  );
};

export default SpecialBrands;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: '#f8f8f8', // Arka plan rengi
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textTransform: 'uppercase',
  },
  flatListContent: {
    alignItems: 'center',
  },
  brandContainer: {
    marginRight: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  brandLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
});
