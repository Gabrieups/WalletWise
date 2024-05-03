import {View, Text, Button, Image, TouchableOpacity} from "react-native";
import styles from '../Content/Style';
import { Feather } from "@expo/vector-icons"

export function Header(){
    return(
        <View style={styles.header}>
            <TouchableOpacity id="sidebar">
                <Feather name="menu" color={'white'} size={50}/>
            </TouchableOpacity>
            <View style={styles.calendario}>
                <TouchableOpacity><Text style={styles.btnMudarMes}>{"<"}</Text></TouchableOpacity>
                
                <TouchableOpacity>
                    <Text style={{marginHorizontal: 30, color: 'white'}}>Abril</Text>
                </TouchableOpacity>

                <TouchableOpacity><Text style={styles.btnMudarMes}>{">"}</Text></TouchableOpacity>   
            </View>
            <Image source={require("@/src/assets/images/logo.png")} style={{width: 70, height: 50}} />
        </View>
    )
}