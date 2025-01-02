import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/actions/productsActions';
import Categories from '../../widget/categories';
import ProductItem from '../../components/products/productItem';
import {FlatList, View} from 'react-native';
import Spinner from '../../components/ui/spinner';
import {useEffect} from 'react';
import screenStyle from '../../styles/screenStyle';

const Products = ({route}) => {
  // route'u props olarak alıyoruz
  const {pending, products} = useSelector(state => state.products);
  const {selectedCategory} = useSelector(state => state.categories);
  const dispatch = useDispatch();

  // route parametresinden category değerini alıyoruz
  const category = route?.params?.category;

  useEffect(() => {
    dispatch(
      getProducts({category: selectedCategory ? selectedCategory : category}),
    );
  }, [selectedCategory, category]);
  return (
    <View style={screenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          ListHeaderComponent={<Categories />} // Kategoriler bileşenini ekliyoruz
          contentContainerStyle={{
            paddingBottom: 20, // Alt boşluk
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between', // Sütunlar arasında eşit boşluk
          }}
          numColumns={2} // İki sütunlu düzen
          data={products}
          keyExtractor={item => item.id.toString()} // Benzersiz key
          renderItem={({item}) => <ProductItem product={item} />}
          showsVerticalScrollIndicator={false} // Kaydırma çubuğunu gizliyoruz
        />
      )}
    </View>
  );
};

export default Products;
