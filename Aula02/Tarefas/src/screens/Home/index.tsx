import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles'


export default function Home() {
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
                        placeholderTextColor={"#A8A8A8"} />
                    <TouchableOpacity style={styles.btnAdd}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.div} />
                <View style={styles.task}>
                    <Image source={require('../../../assets/btn.png')} style={styles.icon} />
                    <Text style={styles.descricaoTask}>Task 1</Text>
                    <View style={styles.contentBtn}>
                        <TouchableOpacity style={styles.btnFinaliza}>
                            <Image source={require('../../../assets/confere.png')} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnRemove}>
                            <Text style={styles.btTextRemove}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}