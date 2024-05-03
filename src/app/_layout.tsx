import { SafeAreaView, View } from "react-native";
import { Slot } from "expo-router";
import styles from '../Content/Style';
import { Header } from "../Components/header";
import Home from ".";

export default function Layout(){
    return (
      <SafeAreaView style={styles.body}>
        <Header></Header>
        <View style={{backgroundColor: '#f0f0f0', width: '100%', height: '100%', borderTopRightRadius: 25, borderTopLeftRadius: 25}}>
          <Slot />
        </View>
      </SafeAreaView>
    );
};