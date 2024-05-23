import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
    },
    title: {
      color: '#fff',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 40,
      fontSize: 25,
      fontWeight: 'bold'
    },
    content: {
      flex: 1,  
      padding: 25,
    },
    eventName: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 15,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: '#1f1e25',
        color: '#fff',
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 20,
        marginRight: 15
    },
    btnAdd: {
        width: 50,
        height: 50,
        backgroundColor: 'rgb(0, 128, 0)',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 35,
        paddingBottom: 10,
        fontWeight: 'bold'
    }
  });

 