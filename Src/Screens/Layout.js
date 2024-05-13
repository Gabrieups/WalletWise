import { SafeAreaView, View } from "react-native";
import styles from '../../Css/Style';
import Header from '../Components/header';

export default function Layout({ children }){
    return (
      <SafeAreaView style={styles.body}>
        <Header />
        <View style={{backgroundColor: '#f0f0f0', width: '100%', height: '86%', borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
          {children}
        </View>
      </SafeAreaView>
    );
};