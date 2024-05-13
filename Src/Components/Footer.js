/*---------------MÃO MEXA-------------*/

import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";
import styles from '../../Css/Style';

export default function Footer(){

    return(
        <Pressable style={{ position: 'absolute', bottom: '7%', left: '30%', backgroundColor: '#31654e', borderRadius: 50, zIndex: 1000}}>
            <Feather name="plus" size={50} color='white'/>
        </Pressable>
    )
}