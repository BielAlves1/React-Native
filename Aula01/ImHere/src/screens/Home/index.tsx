import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles'

export default function Home() {

    function addParticipante() {
        console.log('Participante adicionado com sucesso.')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>I'm Here</Text>

            <View style={styles.content}>
                <Text style={styles.eventName}>Confraternização Windel</Text>
                <Text style={styles.eventDate}>Sábado, 21 de Dezembro de 2024.</Text>

                <View style={styles.form}>
                    <TextInput style={styles.input} placeholder="Nome Participante" placeholderTextColor="#6b6b6b" />

                    <TouchableOpacity style={styles.btnAdd} onPress={addParticipante}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}