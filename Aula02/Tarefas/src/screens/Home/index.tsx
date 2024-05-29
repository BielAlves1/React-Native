import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'
import { Task } from '../../components/Task';
import { useState } from "react";


export default function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskDescricao, setTaskDescricao] = useState('');

    function addTask() {
        setTasks(prevState => [...prevState, taskDescricao]);
        setTaskDescricao('');
    }

    function removeTask(descricao: string) {
        Alert.alert("AVISO!", "Deseja mesmo remover a tarefa?", [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(task => task !== descricao));
                    Alert.alert("Tarefa removido com sucesso!");
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
            <View style={styles.header}>
                <View style={styles.headContent}>
                    <SafeAreaView style={styles.safeArea}>
                        <Text style={styles.realiText}>Realizadas:</Text>
                        <Text style={styles.realiText}>0</Text>
                        <View style={styles.divider} />
                        <Text style={styles.nRealiText}>Não Realizadas:</Text>
                        <Text style={styles.nRealiText}>0</Text>
                    </SafeAreaView>
                </View>
                <View style={styles.headContent2}>
                    <TextInput style={styles.input} placeholder="O que tenho que fazer..."
                        placeholderTextColor={"#A8A8A8"} value={taskDescricao}
                        onChangeText={e => setTaskDescricao(e)} />
                    <TouchableOpacity style={styles.btnAdd} onPress={addTask}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.div} />
            <FlatList data={tasks} keyExtractor={item => item} renderItem={({ item }) => (
                <Task key={item} descricao={item} onRemove={() => removeTask(item)} />
            )}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}