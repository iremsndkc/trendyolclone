import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import {getProducts} from '../store/actions/productsActions';
import appColors from '../theme/colors';

const BestSeller = ({item}) => {
  const {bestSellerProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({limit: 4, category: "men's clothing"}));
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category="men's clothing"
        style={styles.widgetTitle} // WidgetTitle'ın stilini güncelledik
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.flatListContentContainer}
        data={bestSellerProducts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1BF8D',
    marginBottom: 20, // Alt kısmında boşluk
  },
  widgetTitle: {
    marginBottom: 20, // Başlık ile ürünler arasındaki boşluğu artırdık
    fontSize: 22, // Başlık font boyutunu artırdık
    fontWeight: 'bold',
    color: appColors.BLACK, // Başlık rengi siyah
    textTransform: 'uppercase', // Başlık büyük harf olacak
  },
  flatListContentContainer: {
    alignItems: 'center', // Ürünleri yatayda ortalayacağız
    paddingLeft: 15, // Soldan padding
    paddingRight: 15, // Sağdan padding
  },
  productContainer: {
    marginRight: 15,
    backgroundColor: appColors.LIGHT_GRAY, // Ürün kartlarının arka plan rengi
    borderRadius: 10,
    padding: 10,
    elevation: 3, // Hafif gölge efekti
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 8, // Ürün görsellerinin köşelerini yuvarlatıyoruz
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333', // Ürün ismi rengi daha koyu hale getirildi
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: appColors.PRIMARY, // Fiyat rengi daha dikkat çekici
  },
});
