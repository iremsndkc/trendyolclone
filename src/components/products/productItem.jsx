import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {screenHeight, screenWidth} from '../../utils/constants';
import appColors from '../../theme/colors';
import {Heart, Star} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

const ProductItem = ({product}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTDETAIL, {productId: product.id})
      }
      style={({pressed}) => [
        styles.container,
        {opacity: pressed ? 0.5 : 1}, // pressed durumunda şeffaflık ekledik
      ]}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{convertPrice(product.price)}</Text>
        <View style={styles.rateContainer}>
          <Star size={20} color={appColors.YELLOW} variant="Bold" />
          <Text style={styles.rate}>{product.rating.rate}</Text>
        </View>
      </View>
      <View style={styles.favoriteContainer}>
        <Heart size="22" color="#f47373" variant="Outline" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 20, // Container'ın genişliği
    marginHorizontal: 10, // Yalnızca yatay margin
    marginBottom: 25, // Dikey boşluğu artırdık
    padding: 15, // İç boşluğu artırdık
    borderRadius: 18, // Yumuşak, modern köşeler
    backgroundColor: appColors.SOFTGRAY, // Yumuşak gri arka plan
    shadowColor: '#000', // Gölgeleme rengi
    shadowOffset: {width: 0, height: 4}, // Hafif bir gölge efekti
    shadowOpacity: 0.15, // Gölge şeffaflık
    shadowRadius: 12, // Yumuşak gölge yayılma alanı
    elevation: 6, // Android cihazlar için gölge
  },
  image: {
    width: screenWidth / 2 - 40, // Görselin genişliği biraz daha daraltıldı
    height: screenHeight * 0.18, // Görselin boyutu arttırıldı
    resizeMode: 'contain', // Görselin oranlarını koruyarak sığdırma
    alignSelf: 'center', // Görseli ortaladık
    borderRadius: 15, // Görselin etrafına yuvarlatılmış köşe
    borderColor: appColors.GRAY, // Görselin sınır rengi
    marginBottom: 10, // Görselin alt kısmına biraz boşluk ekledik
    backgroundColor: appColors.WHITE, // Görselin arka planını beyaz yaptık
    shadowColor: '#000', // Görselin çevresine hafif gölge
    shadowOffset: {width: 0, height: 2}, // Hafif bir gölge efekti
    shadowOpacity: 0.1, // Gölge şeffaflık
    shadowRadius: 5,
  },
  title: {
    fontSize: 16, // Başlık boyutunu büyüttük
    fontWeight: '600', // Daha kalın yazı
    color: appColors.BLACK, // Metin rengi siyah
    textTransform: 'uppercase', // Başlık büyük harflerle
    letterSpacing: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 14, // Fiyat boyutunu küçülttük
    fontWeight: '500', // Orta kalınlıkta
    color: appColors.PRIMARY, // Fiyat rengi turuncu
    marginTop: 5,
  },
  rate: {
    fontSize: 12,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ProductItem;
