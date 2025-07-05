import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Home() {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Home</Text>
      <Button
        onPress={() => Alert.alert('Button Pressed')}
        title="Learn More"
        color="#d63c09"
        accessibilityLabel="Learn more about this orange button"
      />

      <Image
        style={styles.tinyLogo}
        source={require('../../assets/image.jpg')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: 'red',
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 8,
  },

  scrollView: {
    backgroundColor: 'lightgray',
    flex: 1,
  },

  tinyLogo: {
    marginTop: 20,
    width: 300,
    height: 300,
    borderRadius: 150,
  },
});
