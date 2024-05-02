import {View, Text, StatusBar} from "react-native";
import styles from '../Content/Style';

export default function Home(){
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#31654e" barStyle="light-content" />
            <Text style={styles.text}>
                Hello World!
            </Text>
        </View>
    )
}