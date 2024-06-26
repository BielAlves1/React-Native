import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>

                <TouchableOpacity style={styles.btnRemove} onPress={onRemove}>
                    <Text style={styles.btnText}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}