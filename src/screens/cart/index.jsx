import {AddCircle, ArrowRight2} from 'iconsax-react-native';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

const Cart = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Sepetim (2 Ürün)</Text>

      {/* Notice */}
      <Text style={styles.notice}>
        Peşin fiyatına 3 Taksit fırsatıyla satın alabilirsiniz!
      </Text>

      <ScrollView>
        {/* Trendyol Pass */}
        <View style={styles.passContainer}>
          <Text style={styles.passTitle}>Trendyol Pass</Text>
          <Text style={styles.passSubtitle}>
            Sonraki alışverişlerin için 5 haklı paketi satın al, ayrıca kargo
            ücreti ödeme!
          </Text>
          <TouchableOpacity style={styles.addToCartButton}>
            <Text>Sepete Ekle</Text>
          </TouchableOpacity>
        </View>

        {/* Delivery Options */}
        <View style={styles.deliveryContainer}>
          <Text style={styles.deliveryText}>
            En yakın Gel Al noktasını seç, Siparişini uygun zamanda teslim al!
          </Text>
          <TouchableOpacity style={styles.applyButton}>
            <Text>Uygula</Text>
          </TouchableOpacity>
        </View>

        {/* Coupons */}
        <View style={styles.couponContainer}>
          <Text style={styles.couponTitle}>İndirim Kuponlarım</Text>
          <View style={styles.couponRow}>
            <TouchableOpacity style={styles.couponCard}>
              <Text>%50 TL İndirim</Text>
              <Text>Alt Limit: 500 TL</Text>
              <TouchableOpacity style={styles.applyButton}>
                <Text>Uygula</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.couponCard}>
              <Text>Tüm Kuponlar</Text>
              <ArrowRight2 size="32" color="#555555" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.couponCard}>
              <Text>İndirim Kodu Giriniz</Text>
              <AddCircle size="32" color="#555555" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Product List */}
        <View style={styles.productContainer}>
          <View style={styles.productCard}>
            <Image
              source={{
                uri: 'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1431/product/media/images/prod/QC/20240720/18/3ada4627-911e-3aad-865b-2131c4bb49dc/1_org_zoom.jpg',
              }}
              style={styles.productImage}
            />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>
                Victoria's Journals Hush Hush Pastel Kilitli...
              </Text>
              <Text style={styles.deliveryInfo}>
                Hızlı Teslimat: 2 gün içinde kargoda
              </Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.productPrice}>636.65 TL</Text>
              <Text style={styles.savings}>Kazancın: 112.35 TL</Text>
            </View>
          </View>

          <View style={styles.productCard}>
            <Image
              source={{
                uri: 'https://cdn.dsmcdn.com/mnresize/1200/1800/ty1598/prod/QC/20241107/08/4b28ca21-3b49-3eb9-a51f-f218292aabef/1_org_zoom.jpg',
              }}
              style={styles.productImage}
            />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>
                Victoria's Journals Spiralli Sert Kapak...
              </Text>
              <Text style={styles.deliveryInfo}>
                Hızlı Teslimat: 2 gün içinde kargoda
              </Text>
              <Text style={styles.urgentInfo}>
                Acele Et! +500 tanesi satıldı
              </Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text>1</Text>
                <TouchableOpacity>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.productPrice}>157.20 TL</Text>
              <Text style={styles.savings}>Kazancın var</Text>
            </View>
          </View>
        </View>

        {/* Total Price */}
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalText}>Toplam</Text>
          <Text style={styles.totalAmount}>890.80 TL</Text>
          <Text style={styles.shipping}>Kargo Bedava</Text>
        </View>
      </ScrollView>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Sepeti Onayla</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  notice: {
    color: '#ff0000',
    textAlign: 'center',
    marginBottom: 10,
  },
  passContainer: {
    backgroundColor: '#e6ffee',
    padding: 10,
    marginVertical: 5,
  },
  passTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  passSubtitle: {
    fontSize: 14,
  },
  addToCartButton: {
    backgroundColor: '#00cc44',
    padding: 5,
    marginTop: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  deliveryContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
  },
  deliveryText: {
    fontSize: 14,
  },
  applyButton: {
    backgroundColor: '#ff6600',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
  },
  couponContainer: {
    padding: 10,
    backgroundColor: '#fff2e6',
    marginVertical: 5,
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  couponRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  couponCard: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',

    justifyContent: 'center', // Metin ve ikonun yatayda ortalanması
  },
  productContainer: {
    marginVertical: 10,
  },
  productCard: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderRadius: 5,
  },
  productImage: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  deliveryInfo: {
    fontSize: 12,
    color: '#666',
  },
  urgentInfo: {
    fontSize: 12,
    color: '#ff0000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  savings: {
    fontSize: 12,
    color: '#00cc44',
  },
  totalPriceContainer: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 14,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  shipping: {
    fontSize: 12,
    color: '#00cc44',
  },
  confirmButton: {
    backgroundColor: '#ff6600',
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  AddCircle: {
    alignSelf: 'center', // İkonu ortalamak için
  },
  ArrowRight2: {
    alignSelf: 'center', // İkonu ortalamak için
  },
});

export default Cart;
