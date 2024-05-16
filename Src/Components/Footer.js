/*---------------MÃO MEXA-------------*/

import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text, Button, TouchableOpacity, TouchableHighlight } from "react-native";
import styles from '../../Css/Style';
import { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Footer(){

    const [btnAddVisivel, setBtnAddVisivel] = useState(false);
    const [rotation, setRotation] = useState(0);

    const MostrarBtnAdd = () => {
        if(btnAddVisivel == false){
            setBtnAddVisivel(true);
            setRotation(rotation - 45);
        } else {
            setBtnAddVisivel(false);
            setRotation(0)
        }
    }

    return(
        <>
            {btnAddVisivel &&(
                <View style={styles.overlay}>
                    <View style={{position: "absolute", bottom: '15%', flexDirection: "row", gap: 5, justifyContent: 'center', width: '100%'}}>
                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <MaterialIcons style={styles.btnAdd1} name="trending-down" color='green' size={30} /><Text style={styles.txtBtnAdd1}>Recebimento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <MaterialIcons style={styles.btnAdd2} name="task-alt" color='cadetblue' size={30} /><Text style={styles.txtBtnAdd2}>Novo Plano</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <MaterialIcons style={styles.btnAdd2} name="add-card" color='goldenrod' size={30} /><Text style={styles.txtBtnAdd2}>Novo cartão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center'}}>
                            <MaterialIcons style={styles.btnAdd1} name="trending-up" color='red' size={30} /><Text style={styles.txtBtnAdd1}>Pagamento</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            )}

            <TouchableHighlight onPress={MostrarBtnAdd} style={{ position: 'absolute', bottom: '7%', left: '42.5%', backgroundColor: '#31654e', borderRadius: 50}} underlayColor={'#45886a'}>
                <Feather name="plus" size={50} color='white' style={{ transform: [{ rotate: `${rotation}deg` }] }}/>
            </TouchableHighlight>
        </>
    )
}