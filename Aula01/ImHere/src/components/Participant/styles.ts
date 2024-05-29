import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 10
    },
    content: {
        width: '100%',
        flexDirection: 'row',
    },
    name: {
        flex: 1,
        paddingTop: 10,
        height: 50,
        backgroundColor: '#1f1e25',
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 20,
        marginRight: 15
    },
    btnRemove: {
        width: 50,
        height: 50,
        backgroundColor: 'rgba(139, 0, 0, 1)',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 35,
        paddingBottom: 10,
        fontWeight: 'bold'
    },
});