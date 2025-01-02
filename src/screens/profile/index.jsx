import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView, // ScrollView burada kullanıldı
} from 'react-native';
import {
  AddCircle,
  Heart,
  Discount,
  Gift,
  Ticket,
  Star,
  DiscountCircle,
} from 'iconsax-react-native';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.time}>15:51</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Text>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileInfo}>
          <Image
            source={{uri: 'https://via.placeholder.com/50'}}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>İrem Sandıkçı</Text>
            <Text style={styles.profileEmail}>iremsndkc@hotmail.com</Text>
            <TouchableOpacity>
              <Text style={styles.link}>Boy - Kilo Bilgini Gir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Actions Section */}
      <View style={styles.actionsSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Önceden Gezdiklerim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>İndirim Kuponlarım</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Trendyol Asistan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text>Satıcı Mesajlarım</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Hizmetlerim</Text>
        <TouchableOpacity style={styles.serviceItem}>
          <Text>Şanslı Çekiliş</Text>
          <AddCircle size={20} color="#ff6600" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Text>Paylaş Kazan</Text>
          <Heart size={20} color="#ff6600" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Text>Puan Bakiyesi</Text>
          <DiscountCircle size={20} color="#ff6600" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Text>Krediler</Text>
          <Gift size={20} color="#ff6600" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceItem}>
          <Text>QNB Trendyol Kartı</Text>
          <AddCircle size={20} color="#ff6600" />
        </TouchableOpacity>
      </View>

      {/* Big Surprise Deals Section */}
      <View style={styles.bigDealsSection}>
        <Text style={styles.bigDealsTitle}>
          Sürpriz Fırsatlar Senin İçin Burada!
        </Text>
        <Text style={styles.bigDealsSubtitle}>
          Hızlıca keşfet ve kazancını artır!
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dealsScroll}>
          <View style={styles.dealCard}>
            <Gift size={40} color="#fff" />
            <Text style={styles.dealTitle}>Yılbaşı Çekilişi</Text>
            <Text style={styles.dealDescription}>Hediyeler seni bekliyor!</Text>
            <TouchableOpacity style={styles.dealButton}>
              <Text style={styles.dealButtonText}>Katıl</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dealCard}>
            <AddCircle size={40} color="#fff" />
            <Text style={styles.dealTitle}>Hediye Kartı Kazan</Text>
            <Text style={styles.dealDescription}>Hemen bir şansını dene!</Text>
            <TouchableOpacity style={styles.dealButton}>
              <Text style={styles.dealButtonText}>Katıl</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dealCard}>
            <DiscountCircle size={40} color="#fff" />
            <Text style={styles.dealTitle}>%50 İndirimli Ürünler</Text>
            <Text style={styles.dealDescription}>Sadece bugün geçerli!</Text>
            <TouchableOpacity style={styles.dealButton}>
              <Text style={styles.dealButtonText}>Al</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dealCard}>
            <Star size={40} color="#fff" />
            <Text style={styles.dealTitle}>Sadakat Programı</Text>
            <Text style={styles.dealDescription}>
              Özel fırsatlar seni bekliyor!
            </Text>
            <TouchableOpacity style={styles.dealButton}>
              <Text style={styles.dealButtonText}>Katıl</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // ScrollView içinde büyüme için flexGrow kullanıldı
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 5,
  },
  profileSection: {
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  link: {
    fontSize: 14,
    color: '#ff6600',
  },
  actionsSection: {
    flexDirection: 'row',
    padding: 10,
  },
  actionButton: {
    padding: 10,
    backgroundColor: '#e6e6e6',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  servicesSection: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceItem: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bigDealsSection: {
    padding: 15,
    marginTop: 20,
    backgroundColor: '#ff6600',
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 5,
  },
  bigDealsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  bigDealsSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 15,
  },
  dealsScroll: {
    marginTop: 10,
  },
  dealCard: {
    backgroundColor: '#ff9933',
    padding: 15,
    borderRadius: 10,
    marginRight: 15,
    alignItems: 'center',
    width: 180,
    justifyContent: 'center',
    textAlign: 'center',
  },
  dealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 5,
  },
  dealDescription: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  dealButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  dealButtonText: {
    color: '#ff6600',
    fontWeight: 'bold',
  },
});

export default Profile;
