import { View, Text, TouchableOpacity, Image, TextInput, PanResponder } from 'react-native';
import { styles } from './styles'
import { useRef, useState } from 'react';

type Props = {
    descricao: string;
    onRemove: () => void;
}

export function Task({ descricao, onRemove }: Props) {
    const [descUpdate, setDescUpdate] = useState<string>(descricao);
    const [isFocused, setIsFocused] = useState(false);
    const [isEditable, setIsEditable] = useState(false);

    const moveElement = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (evt, gestureState) => {
                // Aqui você atualiza a posição do elemento arrastado
                console.log('Movendo elemento:', gestureState.moveX, gestureState.moveY);
            },
            onPanResponderRelease: () => {
                // Aqui você reorganiza a FlatList
                console.log('Elemento solto');
            },
        })
    ).current;

    const handleBlur = () => {
        setIsFocused(false);
        if (descUpdate.trim() === '') {
            console.warn('Por favor, preencha o campo.');
        }
        // Supondo que você queira atualizar uma lista de tarefas com o novo valor
        // No entanto, se você quer apenas atualizar a tarefa atual, isso não é necessário
        // Exemplo: setTasks(prevTasks => prevTasks.map(task => task.id === id ? { ...task, desc: descUpdate } : task));
        console.log(descUpdate)
    };

    const descInputRef = useRef<TextInput>(null);

    const handleEditPress = () => {
        setIsEditable(true);
        descInputRef.current?.focus();
    };

    return (
        <View style={styles.content}>
            <View style={styles.task} {...moveElement.panHandlers} >
                <Image source={require('../../../assets/btn.png')} style={styles.icon} />
                <TextInput
                    style={styles.descricaoTask}
                    value={descUpdate}
                    onChangeText={setDescUpdate}
                    editable={isEditable}
                    multiline
                    onBlur={handleBlur}
                    onFocus={() => setIsFocused(true)}
                />
                <View style={styles.contentBtn}>
                    <TouchableOpacity onPress={handleEditPress}>
                        <Image source={require('../../../assets/edit.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEditPress}>
                        <Image source={require('../../../assets/confere.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnRemove} onPress={onRemove}>
                        <Text style={styles.btTextRemove}>-</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}