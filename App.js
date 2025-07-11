import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import PaperCom from './src/screens/PaperCom/PaperCom';
import AxiosCom from './src/screens/AxiosCom/AxiosCom';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <PaperCom /> */}
      <AxiosCom />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
