/*---------------MÃO MEXA-------------*/

import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text, Button, TouchableOpacity, TouchableHighlight, Modal } from "react-native";
import styles from '../../Css/Style';
import { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Footer(){

    const [btnAddVisivel, setBtnAddVisivel] = useState(false);
    const [rotation, setRotation] = useState(0);

    const [TransVisivel, setTransVisivel] = useState(false);
    const [NewPlanVisivel, setNewPlanVisivel] = useState(false);
    const [NewCardVisivel, setNewCardVisivel] = useState(false);
    const [CategoryVisivel, setCategoryVisivel] = useState(false);

    const MostrarBtnAdd = () => {
        if(btnAddVisivel == false){
            setBtnAddVisivel(true);
            setRotation(rotation - 45);
        } else {
            setBtnAddVisivel(false);
            setRotation(0)
        }
    }

    const mostrarTrans = () =>{
        setTransVisivel(!TransVisivel);
        setBtnAddVisivel(false);
        setRotation(0)
    }

    const mostrarNewPlan = () =>{
        setNewPlanVisivel(!NewPlanVisivel);
        setBtnAddVisivel(false);
        setRotation(0)
    }

    const mostrarNewCard = () =>{
        setNewCardVisivel(!NewCardVisivel);
        setBtnAddVisivel(false);
        setRotation(0)
    }

    const mostrarCategory = () =>{
        setCategoryVisivel(!CategoryVisivel);
        setBtnAddVisivel(false);
        setRotation(0)
    }

    return(
        <>
            {btnAddVisivel &&(
                <View style={styles.overlay}>
                    <View style={{position: "absolute", bottom: '15%', flexDirection: "row", gap: 5, justifyContent: 'center', width: '100%'}}>
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={mostrarTrans}>
                            <MaterialIcons style={styles.btnAdd1} name="trending-down" color='green' size={30} /><Text style={styles.txtBtnAdd1}>Recebimento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center'}} onPress={mostrarNewPlan}>
                            <MaterialIcons style={styles.btnAdd2} name="task-alt" color='cadetblue' size={30} /><Text style={styles.txtBtnAdd2}>Novo Plano</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center'}} onPress={mostrarNewCard}>
                            <MaterialIcons style={styles.btnAdd2} name="add-card" color='goldenrod' size={30} /><Text style={styles.txtBtnAdd2}>Novo cartão</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center'}} onPress={mostrarCategory}>
                            <MaterialIcons style={styles.btnAdd1} name="category" color='red' size={30} /><Text style={styles.txtBtnAdd1}>Categorias</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            )}

            <TouchableHighlight onPress={MostrarBtnAdd} style={{ position: 'absolute', bottom: '7%', left: '42.5%', backgroundColor: '#31654e', borderRadius: 50, zIndex: 1000}} underlayColor={'#45886a'}>
                <Feather name="plus" size={50} color='white' style={{ transform: [{ rotate: `${rotation}deg` }] }}/>
            </TouchableHighlight>

            <Modal
                animationType="none"
                transparent={true}
                visible={TransVisivel}
                onRequestClose={mostrarTrans}
            > 
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', flex: 1}}>
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', height: '25%', padding: 15, position: 'absolute', left: '10%', top: '40%'}}>
                        <Text>Funcionando Recebimento</Text>
                        <Button title="cancelar" onPress={mostrarTrans}/>                    
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={NewPlanVisivel}
                onRequestClose={mostrarNewPlan}
            >   
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', flex: 1}}>
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', height: '25%', padding: 15, position: 'absolute', left: '10%', top: '40%'}}>
                        <Text>Funcionando Novo Plano</Text>
                        <Button title="cancelar" onPress={mostrarNewPlan}/>                    
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={NewCardVisivel}
                onRequestClose={mostrarNewCard}
            >   
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', flex: 1}}>
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', height: '25%', padding: 15, position: 'absolute', left: '10%', top: '40%'}}>
                        <Text>Funcionando Novo Cartão</Text>
                        <Button title="cancelar" onPress={mostrarNewCard}/>                    
                    </View>
                </View>          
            </Modal>

            <Modal
                animationType="none"
                transparent={true}
                visible={CategoryVisivel}
                onRequestClose={mostrarCategory}
            >   
                <View style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', flex: 1}}>
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', height: '25%', padding: 15, position: 'absolute', left: '10%', top: '40%'}}>
                        <Text>Funcionando Categorias</Text>
                        <Button title="cancelar" onPress={mostrarCategory}/>                    
                    </View>
                </View>            
            </Modal>
        </>
    )
}