import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Gradient importu

const {width} = Dimensions.get('window'); // Ekran genişliğini alıyoruz

const TrendyolGo = () => {
  const fastMarketOptions = [
    {id: '1', name: 'Hemen Gelsin', colors: ['#8EC5FC', '#E0C3FC']}, // Yeşil renk geçişi
    {id: '2', name: 'Dilediğin saatte gelsin!', colors: ['#FFA500', '#FF6347']}, // Turuncu renk geçişi
    {id: '3', name: 'Semtin indirimleri', colors: ['#FF7BB3', '#F6A1D3']}, // Pembe renk geçişi
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Trendyol Go</Text>

      {/* Main Buttons */}
      <View style={styles.mainButtonsContainer}>
        <TouchableOpacity style={styles.mainButton}>
          <Image
            source={require('../../assets/images/basket.png')}
            style={styles.image}
          />
          <Text style={styles.buttonTitle}>Trendyol Hızlı Market</Text>
          <Text style={styles.actionText}>Market siparişi ver!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainButton}>
          <Image
            source={require('../../assets/images/Delivery.png')}
            style={styles.image}
          />
          <Text style={styles.buttonTitle}>Trendyol Yemek</Text>
          <Text style={styles.actionText}>Yemek siparişi ver!</Text>
        </TouchableOpacity>
      </View>

      {/* Water Section */}
      <View style={styles.waterSection}>
        <Image
          source={{
            uri: 'https://ideacdn.net/idea/fe/26/myassets/products/001/saka-damacana.png?revision=1734358038',
          }}
          style={styles.waterImage}
        />
        <Text style={styles.waterText}>Su siparişi ver!</Text>
      </View>

      {/* Fast Market Section */}
      <Text style={styles.sectionTitle}>Hızlı Market</Text>

      {/* Fast Market FlatList for Horizontal Scroll */}
      <FlatList
        data={fastMarketOptions}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.fastMarketCard}>
            <LinearGradient
              colors={item.colors} // Her kart için renk geçişini kullanıyoruz
              style={styles.cardGradient}>
              <Text style={styles.cardText}>{item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  mainButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Butonlar arasındaki boşluk
  },
  mainButton: {
    width: '48%', // Butonlar için genişlik, yüzde ile belirledik
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionText: {
    fontSize: 14,
    color: '#ff6600',
  },
  waterSection: {
    backgroundColor: '#e6f7ff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 16,
    alignItems: 'center',
    overflow: 'hidden', // Alt kısmı gizler
  },
  waterImage: {
    width: 80,
    height: 80,
    marginBottom: 8,
    marginTop: 0, // Resmi biraz daha aşağıya alıyoruz
  },
  waterText: {
    fontSize: 16,
    color: '#0073e6',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  flatListContent: {
    alignItems: 'center',
    paddingHorizontal: 10, // Listeyi biraz daha içeriye almak
  },
  fastMarketCard: {
    width: width * 0.5, // Kart genişliği %70 ekran genişliğine ayarlandı
    height: 180, // Sabit yükseklik
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Köşe yuvarlama
    marginRight: 10, // Kartlar arasında boşluk
    padding: 15, // İçerik padding
    elevation: 5, // Gölgeleme
  },
  cardGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Köşe yuvarlama
  },
  cardText: {
    fontSize: 18, // Yazı boyutu
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10, // Yazının daha düzgün görünmesi için padding
  },
});

export default TrendyolGo;
