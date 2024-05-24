import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles'
import { Participant } from '../../components/Participant';
import React, { useState } from 'react';

export default function Home() {
    const [participantes, setParticipantes] = useState<string[]>([]);
    const [participanteName, setParticipanteName] = useState('');

    function addParticipante() {
        if (participantes.includes(participanteName)) {
            return Alert.alert("AVISO!", "Participante com esse nome já existente na lista.")
        } else if(participanteName == null || participanteName == ''){
            console.warn("Você não informou nenhum nome.")
        } else {
            setParticipantes(prevState => [...prevState, participanteName]);
            setParticipanteName('');
        }
    }

    function removeParticipante(name: string) {
        Alert.alert("AVISO!", `Deseja remover participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipantes(prevState => prevState.filter(participante => participante !== name));
                    Alert.alert(`Participante ${name} removido com sucesso!`);
                }
            },
            {
                text: 'Não',
                style: 'cancel'
                
            },
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>I'm Here</Text>
            <View style={styles.content}>
                <Text style={styles.eventName}>Confraternização Windel</Text>
                <Text style={styles.eventDate}>Sábado, 21 de Dezembro de 2024.</Text>

                <View style={styles.form}>
                    <TextInput style={styles.input} value={participanteName} 
                    placeholder="Nome Participante" placeholderTextColor="#6b6b6b" 
                    onChangeText={e => setParticipanteName(e)} />

                    <TouchableOpacity style={styles.btnAdd} onPress={addParticipante}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
                <FlatList data={participantes} keyExtractor={item => item} renderItem={({ item }) => (
                    <Participant key={item} name={item} onRemove={() => removeParticipante(item)} />
                )}
                    showsVerticalScrollIndicator={false} />
            </View>
        </View>
    );
}