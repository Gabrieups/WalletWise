/*---------------MÃO MEXA-------------*/

import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";
import styles from '../../Css/Style';
import { useState } from "react";
import { Button } from "react-native-web";
import { Modal } from "react-native-web";

export default function Footer(){

    const [btnAddVisivel, setBtnAddVisivel] = useState(false)

    const MostrarBtnAdd = () => {
        setBtnAddVisivel(true);
    }

    return(
        <>
            <Pressable onPress={MostrarBtnAdd} style={{ position: 'absolute', bottom: '7%', left: '42.5%', backgroundColor: '#31654e', borderRadius: 50, zIndex: 1000}}>
                <Feather name="plus" size={50} color='white'/>
            </Pressable>

            <Modal
                animationType="none"
                transparent={true}
                visible={btnAddVisivel}
                onRequestClose={MostrarBtnAdd}
            >
                <View>
                    <Button title="Teste1" />
                    <Button title="Teste2" />
                    <Button title="Teste3" />
                </View>
            </Modal>
        </>
    )
}