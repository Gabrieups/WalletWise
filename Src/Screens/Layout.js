import { SafeAreaView, View } from "react-native";
import { Slot } from "expo-router";
import styles from '../../Css/Style';
import { Header } from "../../Components/header";
import { Footer } from "../../Components/Footer";
import Home from "./Home";
import Mais from "./Mais";
import Planos from "./Planos";
import Transacoes from "./Screens/Transacoes";

export default function Layout(){
    return (
      <SafeAreaView style={styles.body}>
        <Header />
        <View style={{backgroundColor: '#f0f0f0', width: '100%', height: '75%', borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
          <Home />
        </View>
        <Footer />
      </SafeAreaView>
    );
};