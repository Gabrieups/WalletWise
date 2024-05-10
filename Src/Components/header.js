/*---------------MÃO MEXA-------------*/

import {View, Text, Image, TouchableOpacity, Modal} from "react-native";
import styles from '../Css/Style';
import { Feather } from "@expo/vector-icons"
import { useState } from "react";

export default function Header(){

    const [CaledarioVisivel, setCalendarioVisivel] = useState(false);
    const mostrarCalendario = () => setCalendarioVisivel(!CaledarioVisivel);
    const meses = [
        'JAN.', 'FEV.', 'MAR.', 'ABR.',
        'MAI.', 'JUN.', 'JUL.', 'AGO.',
        'SET.', 'OUT.', 'NOV.', 'DEZ.'
    ];
    const [mesAtual] = useState(new Date().getMonth());

    const [mostrarAno, setMostrarAno] = useState(new Date().getFullYear());
    const [anoAtual] = useState(new Date().getFullYear());

    const [dataCarregada, setDataCarregada] = useState(meses[mesAtual] + ' ' + mostrarAno);

    const aumentarAno = () => {
        setMostrarAno(mostrarAno + 1);
    };
    
    const diminuirAno = () => {
        setMostrarAno(mostrarAno - 1);
    };

    const CarregarData = () => {
        setDataCarregada(mes + ' ' + mostrarAno);
        mostrarCalendario()
    }
    
    return(
        <View style={styles.header}>
            <TouchableOpacity id="sidebar">
                <Feather name="menu" color={'white'} size={50}/>
            </TouchableOpacity>
            <View style={styles.mes}>
                <TouchableOpacity><Feather name="chevron-left" size={30} color={'white'}/></TouchableOpacity>  
                
                <TouchableOpacity onPress={mostrarCalendario}>
                    <Text style={{padding: 30, color: 'white'}}>{dataCarregada}</Text>
                </TouchableOpacity>

                <TouchableOpacity><Feather name="chevron-right" size={30} color={'white'}/></TouchableOpacity>   
            </View>
            <Image source={require("@/src/assets/images/logo.png")} style={{width: 70, height: 50}} />

            <Modal
                animationType="none"
                transparent={true}
                visible={CaledarioVisivel}
                onRequestClose={mostrarCalendario}
            >    
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', flex: 1}}>
                    <View style={styles.calendario}>
                        <TouchableOpacity style={{position: 'relative', left: '45%'}} onPress={mostrarCalendario}><Feather name="x-circle" size={25} color='#31654e'/></TouchableOpacity>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                            <TouchableOpacity><Feather name="chevron-left" onPress={diminuirAno} id="btnAumentarMes" size={30} color='#31654e'/></TouchableOpacity>
                            <Text style={{fontSize: 25, color: '#31654e'}}>{mostrarAno}</Text>
                            <TouchableOpacity><Feather name="chevron-right" onPress={aumentarAno} size={30} color='#31654e'/></TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 10}}>
                            {meses.map((mes, index) => (
                                <TouchableOpacity key={index} onPress={() => CarregarData(mes)}>
                                    <Text style={{fontSize: 18, margin: 6, color: index === mesAtual && anoAtual === mostrarAno ? '#31654e' : '#a3a3a3'}}>{mes}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}