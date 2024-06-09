import { Feather } from "@expo/vector-icons";
import { Pressable, View, Text, Button, TouchableOpacity, TouchableHighlight, Modal, TextInput } from "react-native";
import styles from '../../Css/Style';
import { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import { PaymentIcon } from 'react-native-payment-icons';

export default function Footer(){

    const endereco = 'http://192.168.1.109:8081';

    const [errorMessage, setErrorMessage] = useState('');

    const [btnAddVisivel, setBtnAddVisivel] = useState(false);
    const [rotation, setRotation] = useState(0);

    const [TransVisivel, setTransVisivel] = useState(false);

    //-----------------Modal Meta-------------------------
    const [NewPlanVisivel, setNewPlanVisivel] = useState(false);
    const [openMenuCateg, setOpenMenuCateg] = useState(false);
    const [choseCateg, setChoseCateg] = useState(false);

    //-----------------Modal Cartão-------------------------
    const [NewCardVisivel, setNewCardVisivel] = useState(false);
    const [openCartao, setOpenCartao] = useState(false);
    const [valueCartao, setValueCartao] = useState(null);
    const [openFech, setOpenFech] = useState(false);
    const [valueFech, setValueFech] = useState(null);
    const [openVenc, setOpenVenc] = useState(false);
    const [valueVenc, setValueVenc] = useState(null);

    //-----------------Modal Categoria-------------------------
    const [CategoryVisivel, setCategoryVisivel] = useState(false);
    const [valueCategoria, setValueCategoria] = useState(null);
    const [corValueCategoria, setCorValueCategoria] = useState(null);
    const [openCategoria, setOpenCategoria] = useState(false);
    const [openCorCategoria, setOpenCorCategoria] = useState(false);

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
        setRotation(0);
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

    //------------------Valores dos campos ------------------------
    const [nomeTrans, setNomeTrans] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [nomeCategory, setNomeCategory] = useState('');

    const [checked, setChecked] = useState('receb');

    const [valor, setValor] = useState(0);

    const formatarValorMonetario = (valor) => {
        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    };

    const items = Array.from({ length: 31 }, (_, i) => ({
        label: `${i + 1}`,
        value: `${i + 1}`, 
    }));


    const adicionarCartao = (tipo) => {
        setValueCartao(tipo);
        setOpenCartao(false);
    };

    const itemsCartao = [
        { label: 'Visa', value: 'visa', icon: () => <PaymentIcon type='visa'/>, onPress: () => adicionarCartao('visa') },
        { label: 'Mastercard', value: 'mastercard', icon: () => <PaymentIcon type='mastercard'/>, onPress: () => adicionarCartao('mastercard') },
    ];

    const escolherCategoria = (tipo) => {
        setChoseCateg(tipo);
        setOpenMenuCateg(false);
    };

    const adicionarCategoria = (tipo) => {
        setValueCategoria(tipo);
        setOpenCategoria(false);
    };

    const corCategoria = (tipo) => {
        setCorValueCategoria(tipo);
        setOpenCategoria(false);
    };

    const itemsCategoria = [
        { label: '', value: 'casa', icon: () => <MaterialIcons name='cottage' size={30}/>, onPress: () => adicionarCategoria('cottage') },
        { label: '', value: 'mercado', icon: () => <MaterialIcons name='shopping-cart' size={30}/>, onPress: () => adicionarCategoria('shopping-cart') },
    ];
    
    const itemsChoseCateg = [
        { label: 'Casinha', value: 'casa', icon: () => <MaterialIcons name='cottage' size={30}/>, onPress: () => escolherCategoria('cottage') },
        { label: 'Mercado', value: 'mercado', icon: () => <MaterialIcons name='shopping-cart' size={30}/>, onPress: () => escolherCategoria('shopping-cart') },
    ];

    const coresCategoria = [
        { label: '', value: '#FFFF00', icon: () => <MaterialIcons name='radio-button-checked' size={30} color={'#ffff00'}/>, onPress: () => corCategoria('radio-button-checked') },
        { label: '', value: '#1E90FF', icon: () => <MaterialIcons name='radio-button-checked' size={30} color={'#1e90ff'}/>, onPress: () => corCategoria('radio-button-checked') },
    ];
    

    return(
        <>
            {btnAddVisivel &&(
                <View style={styles.overlay}>
                    <View style={{position: "absolute", bottom: '15%', flexDirection: "row", gap: 5, justifyContent: 'center', width: '100%'}}>
                        <TouchableOpacity style={{alignItems: 'center'}} onPress={mostrarTrans}>
                            <MaterialIcons style={styles.btnAdd1} name="trending-down" color='green' size={30} /><Text style={styles.txtBtnAdd1}>Recebimento</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems: 'center'}} onPress={mostrarNewPlan}>
                            <MaterialIcons style={styles.btnAdd2} name="task-alt" color='cadetblue' size={30} /><Text style={styles.txtBtnAdd2}>Nova Meta</Text>
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
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', minHeight: '28%', padding: 15, position: 'absolute', left: '10%', top: '35%', alignItems: 'center'}}>
                        <TextInput
                            placeholder="Nome da Transação: "
                            placeholderTextColor="#999"
                            value={nomeTrans}
                            onChangeText={setNomeTrans}
                        />
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Recebimento:</Text>
                            <RadioButton
                                value='receb'
                                status={ checked === 'receb' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('receb')}
                            />
                            <Text>Pagamento:</Text>
                            <RadioButton
                                value='envio'
                                status={ checked === 'envio' ? 'checked' : 'unchecked' }
                                onPress={() => setChecked('envio')}
                            />
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text>Valor: </Text>
                            <TextInput
                                placeholder="0,00"
                                placeholderTextColor="#999"
                                value={formatarValorMonetario(valor)}
                                onChangeText={(text) => { 
                                    const novoValor = text.replace(/[^0-9,]/g, '');
                                    setValor(parseFloat(novoValor.replace(',', '.')));
                                }}
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Button title="Cancelar" onPress={mostrarTrans}/>                    
                            <Button title="Salvar" onPress={cadTransacao}/>   
                        </View>
                        <Text>{errorMessage}</Text>                     
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
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', height: 200, padding: 15, position: 'absolute', left: '10%', top: '40%', alignItems: 'center'}}>
                        <TextInput placeholder="Nome da Meta" />
                        <DropDownPicker
                            open={openMenuCateg}
                            value={choseCateg}
                            items={itemsChoseCateg}
                            setOpen={setOpenMenuCateg}
                            setValue={setChoseCateg}
                            placeholder="Seleione a Categoria"
                            listMode="MODAL"
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Button title="cancelar" onPress={mostrarNewPlan}/>                    
                            <Button title="salvar" onPress={mostrarNewPlan}/>    
                        </View>               
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
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', height: 300, padding: 15, position: 'absolute', left: '10%', top: '30%', alignItems: 'center'}}>
                        <TextInput
                            placeholder="Nome do cartão (Opcional)"
                            placeholderTextColor="#999"
                            value={nomeCartao}
                            onChangeText={setNomeCartao}
                            style={{textAlign: 'center'}}
                        />
                        <View>
                            <TextInput
                                placeholder="Numero do cartão"
                                placeholderTextColor="#999"
                                keyboardType="numeric"
                            />
                            <DropDownPicker
                                open={openCartao}
                                value={valueCartao}
                                items={itemsCartao}
                                setOpen={setOpenCartao}
                                setValue={setValueCartao}
                                placeholder="Seleione a bandeira"
                                listMode="MODAL"
                            />
                        </View>
                        <DropDownPicker
                            open={openFech}
                            value={valueFech}
                            items={items}
                            setOpen={setOpenFech}
                            setValue={setValueFech}
                            placeholder="Dia de fechamento: "
                            listMode="MODAL"
                        />
                        <DropDownPicker
                            open={openVenc}
                            value={valueVenc}
                            items={items}
                            setOpen={setOpenVenc}
                            setValue={setValueVenc}
                            placeholder="Dia de vencimento: "
                            listMode="MODAL"
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Button title="Cancelar" onPress={mostrarNewCard}/>                    
                            <Button title="Salvar" onPress={mostrarNewCard}/>   
                        </View>                 
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
                    <View style={{backgroundColor: '#ffffff', borderRadius: 25, width: '80%', height: 200, padding: 15, position: 'absolute', left: '10%', top: '40%', alignItems: 'center'}}>
                        <Text>Funcionando Categorias: </Text>
                        <TextInput
                            placeholder="Nome da categoria: "
                            placeholderTextColor="#999"
                            value={nomeCategory}
                            onChangeText={setNomeCategory}
                        />
                        <View style={{flexDirection:'row', width: 100, justifyContent: 'center'}}>
                            <DropDownPicker
                                open={openCategoria}
                                value={valueCategoria}
                                items={itemsCategoria}
                                setOpen={setOpenCategoria}
                                setValue={setValueCategoria}
                                placeholder="ícone"
                                listMode="MODAL"
                                style={{width: 100}}
                            />
                            <DropDownPicker
                                open={openCorCategoria}
                                value={corValueCategoria}
                                items={coresCategoria}
                                setOpen={setOpenCorCategoria}
                                setValue={setCorValueCategoria}
                                placeholder="cor"
                                listMode="MODAL"
                                style={{width: 100}}
                            />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Button title="Cancelar" onPress={mostrarCategory}/>                    
                            <Button title="Salvar" onPress={mostrarCategory}/>   
                        </View>                   
                    </View>
                </View>            
            </Modal>
        </>
    )
    async function cadTransacao() {
        if (!nomeTrans || !checked || !valor) {
          setErrorMessage('Todos os campos são obrigatórios.');
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);
          return;
        }
    
        try {
          console.log('Iniciando cadastro com:', {
            Transacao: nomeTrans,
            check: checked,
            valor: valor
          });
    
          const reqs = await fetch(endereco + '/transaction', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
                Transacao: nomeTrans,
                check: checked,
                valor: valor,
            })
          });
    
          const ress = await reqs.json();
          if (ress) {
            setHasLogin(true);
            setErrorMessage('Transação salva');
          } else {
            setErrorMessage(ress.message || 'Erro ao salvar a transação');
          }
        } catch (error) {
          setErrorMessage('Erro ao salvar a transação');
        }
    
        setTransVisivel(!TransVisivel);
        setBtnAddVisivel(false);
        setRotation(0);
    }
}
