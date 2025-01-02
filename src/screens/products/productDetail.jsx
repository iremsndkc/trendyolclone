/*import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const ProductDetail = () => {
  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://cdn.dsmcdn.com/ty112/product/media/images/20210303/11/68877415/141780508/1/1_org_zoom.jpg', // Örnek görsel URL'si
          }}
          style={styles.productImage}
          resizeMode="cover"
        />
        <View style={styles.badges}>
          <View style={styles.freeShippingBadge}>
            <Text style={styles.badgeText}>KARGO BEDAVA</Text>
          </View>
          <View style={styles.promotionBadge}>
            <Text style={styles.badgeText}>AVANTAJLI ÜRÜN</Text>
          </View>
        </View>
      </View>

  
      <Text style={styles.title}>
        Ritnice Kadın Homy Yumuşacık Bisiklet Yaka Bordo Oversize Triko Kazak
      </Text>

 
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>4.5 ⭐ | 160 değerlendirme</Text>
        <Text style={styles.favorite}>52.7B kişi favoriledi!</Text>
      </View>

 
      <View style={styles.priceContainer}>
        <Text style={styles.price}>659 TL</Text>
        <Text style={styles.freeShipping}>Kargo Bedava</Text>
      </View>

  
      <View style={styles.detailsContainer}>
        <Text style={styles.detailTitle}>Desen:</Text>
        <Text style={styles.detailValue}>Düz</Text>
        <Text style={styles.detailTitle}>Kalıp:</Text>
        <Text style={styles.detailValue}>Oversize</Text>
        <Text style={styles.detailTitle}>Yaka Tipi:</Text>
        <Text style={styles.detailValue}>Bisiklet Yaka</Text>
      </View>

   
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buttonText}>Şimdi Al</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 400,
    borderRadius: 8,
  },
  badges: {
    position: 'absolute',
    top: 16,
    left: 16,
    flexDirection: 'row',
  },
  freeShippingBadge: {
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 4,
    marginRight: 8,
  },
  promotionBadge: {
    backgroundColor: '#6A1B9A',
    padding: 6,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  favorite: {
    fontSize: 14,
    color: '#FF9800',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  freeShipping: {
    fontSize: 14,
    color: '#4CAF50',
  },
  detailsContainer: {
    marginVertical: 16,
  },
  detailTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  buyNowButton: {
    backgroundColor: '#FFA000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addToCartButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
*/
/*
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductInfo} from '../../store/actions/productsActions';
import {SafeAreaView} from 'react-native-safe-area-context';
import appColors from '../../theme/colors';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import screenStyle from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';
import {Star} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import {screenHeight, screenWidth} from '../../utils/constants';

const ProductDetail = ({route}) => {
  // productId'yi route parametrelerinden alıyoruz
  const productId = route?.params?.productId;

  // Redux state'inden veri çekiyoruz
  const {pendingDetail, productInfo} = useSelector(state => state.products);
  const dispatch = useDispatch();

  // productId değiştiğinde, veri çekmek için useEffect'i çalıştırıyoruz
  useEffect(() => {
    if (productId) {
      dispatch(getProductInfo({id: productId}));
    }
  }, [productId, dispatch]); // productId değiştiğinde useEffect çalışacak

  // Eğer productId yoksa bir hata mesajı gösterebiliriz
  if (!productId) {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: appColors.WHITE}}>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Ürün ID'si eksik.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColors.WHITE}}>
      <View style={{flex: 1}}>
        {pendingDetail ? (
          <Spinner />
        ) : (
          <>
            {productInfo ? (
              <ScrollView contentContainerStyle={{paddingBottom: 20}}>
                <Image style={styles.image} source={{uri: productInfo.image}} />
                <Text style={styles.title}>Product: {productInfo?.title}</Text>
                <Text style={styles.category}>
                  Category: {productInfo?.category}
                </Text>
                <View style={styles.rateContainer}>
                  <Star size={20} color={appColors.YELLOW} variant="Bold" />
                  <Text style={styles.rate}>{productInfo?.rating?.rate}</Text>
                </View>
                <Text style={styles.description}>
                  Details: {productInfo?.description}
                </Text>
              </ScrollView>
            ) : (
              <Text>Ürün bilgisi bulunamadı.</Text>
            )}
          </>
        )}

        <View style={styles.infoContainer}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <Text style={styles.price}>{convertPrice(productInfo?.price)}</Text>
            <Text style={styles.cargoText}>Kargo Bedava</Text>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Button title="Hemen Al" buttonType="outline" />
            <Button title="Sepete Ekle" buttonType="flat" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  cargoText: {
    fontSize: 12,
    color: appColors.GREEN,
  },
  image: {
    height: screenHeight * 0.35,
    resizeMode: 'contain',
    width: screenWidth,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: '500',
    color: appColors.GRAY,
  },
  infoContainer: {
    borderTopWidth: 1,
    borderColor: appColors.SOFTGRAY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: appColors.PRIMARY,
  },
  rate: {
    fontSize: 12,
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ProductDetail;
*/
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getProductInfo} from '../../store/actions/productsActions';
import Spinner from '../../components/ui/spinner';
import appColors from '../../theme/colors';
import {screenHeight, screenWidth} from '../../utils/constants';

const ProductDetail = ({route}) => {
  const productId = route?.params?.productId;
  const {pendingDetail, productInfo} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(getProductInfo({id: productId}));
    }
  }, [productId, dispatch]);

  if (!productId) {
    return (
      <View style={{flex: 1, backgroundColor: appColors.WHITE}}>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Ürün ID'si eksik.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {pendingDetail ? (
        <Spinner />
      ) : (
        <>
          {productInfo ? (
            <View style={{flex: 1}}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.productImage}
                  source={{uri: productInfo.image}} // Dynamically loaded image
                  resizeMode="contain"
                />
                <View style={styles.badges}>
                  <View style={styles.freeShippingBadge}>
                    <Text style={styles.badgeText}>KARGO BEDAVA</Text>
                  </View>
                  <View style={styles.promotionBadge}>
                    <Text style={styles.badgeText}>AVANTAJLI ÜRÜN</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.title}>{productInfo?.title}</Text>

              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>
                  {productInfo?.rating?.rate} ⭐
                </Text>
                <Text style={styles.favorite}>52.7B kişi favoriledi!</Text>
              </View>

              <Text style={styles.price}>{productInfo?.price} TL</Text>

              {/* Ürün Detaylı Açıklama Bölümü */}
              {productInfo?.description && (
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionTitle}>Ürün Açıklaması</Text>
                  <Text style={styles.descriptionText}>
                    {productInfo?.description}
                  </Text>
                </View>
              )}

              <View style={styles.detailsContainer}>
                <Text style={styles.detailTitle}>Desen:</Text>
                <Text style={styles.detailValue}>{productInfo?.pattern}</Text>
                <Text style={styles.detailTitle}>Kalıp:</Text>
                <Text style={styles.detailValue}>{productInfo?.fit}</Text>
                <Text style={styles.detailTitle}>Yaka Tipi:</Text>
                <Text style={styles.detailValue}>{productInfo?.neckline}</Text>
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buyNowButton}>
                  <Text style={styles.buttonText}>Şimdi Al</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.buttonText}>Sepete Ekle</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text>Ürün bilgisi bulunamadı.</Text>
          )}
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.WHITE,
    paddingHorizontal: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%', // Ekranın tamamı genişliğinde
    height: screenHeight * 0.35, // Yüksekliği ekranın %40'ı kadar
    borderRadius: 8,
  },
  badges: {
    position: 'relative',
    top: 16,
    left: 16,
    flexDirection: 'row',
  },
  freeShippingBadge: {
    backgroundColor: '#4CAF50',
    padding: 6,
    borderRadius: 4,
    marginRight: 8,
  },
  promotionBadge: {
    backgroundColor: '#6A1B9A',
    padding: 6,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  rating: {
    fontSize: 14,
    color: '#666',
  },
  favorite: {
    fontSize: 14,
    color: '#FF9800',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  detailsContainer: {
    marginVertical: 16,
  },
  detailTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
  // Yeni stil: Ürün açıklaması
  descriptionContainer: {
    marginVertical: 16,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: appColors.BLACK,
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  buyNowButton: {
    backgroundColor: '#FFA000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addToCartButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
