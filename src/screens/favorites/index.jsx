import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const favoriteItems = [
  {
    id: '1',
    name: "Victoria's Journals Hush Hush Kilitli Defter",
    price: '636.65 TL',
    image:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1431/product/media/images/prod/QC/20240720/18/3ada4627-911e-3aad-865b-2131c4bb49dc/1_org_zoom.jpg', // Ürün görseli
  },
  {
    id: '2',
    name: "Victoria's Journals Spiralli Sert Kapak 2025",
    price: '157.20 TL',
    image:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1598/prod/QC/20241107/08/4b28ca21-3b49-3eb9-a51f-f218292aabef/1_org_zoom.jpg', // Ürün görseli
  },
  {
    id: '3',
    name: 'Bruno Visconti Sketch & Art Çift Taraflı Marker Kalem Seti Plastik Kutulu 60 Renk',
    price: '1.444.50',
    image:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1145/product/media/images/prod/SPM/PIM/20240122/22/e5330e1e-63f8-3845-bf48-931ca8bebed4/1_org_zoom.jpg', // Ürün görseli
  },
  {
    id: '4',
    name: 'Bruno Visconti Sketch&art Dream Write Jel Kalem, 0.5mm, 8 Renk',
    price: '449.50 TL',
    image:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty883/product/media/images/20230515/17/349603221/938580223/1/1_org_zoom.jpg', // Ürün görseli
  },
  {
    id: '5',
    name: 'Matt Notebook 3’lü Spiralli Masaüstü Planlayıcı Set Kalpler',
    price: '309 TL',
    image:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1614/product/media/images/prod/PIM/20241223/09/60a7dece-39a9-40a5-9eb2-6cdacecd4cf0/1_org_zoom.jpg', // Ürün görseli
  },
  {
    id: '6',
    name: 'Matt Notebook Sticker Book 828 Adet Renkli Etiket Defteri',
    price: '209.50 TL',
    image:
      'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1121/product/media/images/prod/SPM/PIM/20240104/17/f23be3ce-5c09-315a-ba5c-4dd3255ae0f6/1_org_zoom.jpg', // Ürün görseli
  },
];

const Favorites = () => {
  const renderFavoriteItem = ({item}) => (
    <View style={styles.favoriteItem}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Kaldır</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorilerim</Text>
      <FlatList
        data={favoriteItems}
        keyExtractor={item => item.id}
        renderItem={renderFavoriteItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 120,
    borderRadius: 10,
    marginRight: 20,
    resizeMode: 'contain',
  },
  productInfo: {
    flex: 1,
    paddingVertical: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ff6600',
    borderRadius: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Favorites;
