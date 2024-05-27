import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#889291'
  },
  header: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  headContent: {
    height: 70,
    width: 70,
    backgroundColor: '#6C7372',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeArea: {
    height: 60,
    width: 60,
    backgroundColor: '#ffff',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  realiText: {
    color: '#0E6571',
    fontSize:9,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#889291'
  },
  nRealiText: {
    color: '#740A0A',
    fontSize: 9,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  headContent2: {
    height: 60,
    width: '75%',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    backgroundColor: '#6C7372',
    color: '#fff',
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 30,
    backgroundColor: '#f8f8f8',
    color: '#000',
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: '5%',
    marginLeft: '5%',
    fontSize: 13,
  },
  btnAdd: {
    width: 30,
    height: 30,
    backgroundColor: '#70BB34',
    borderRadius: 20,
    marginRight: '3%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: '#346D07',
    fontSize: 30,
    paddingBottom: 7.5,
    fontWeight: 'bold'
  },
  content: {
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  div: {
    width: '90%',
    height: 2,
    backgroundColor: '#A7ABAA'
  },
  task: {
    height: 50,
    width: '90%',
    backgroundColor: '#6C7372',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: 30
  },
  icon: {
    height: 25,
    width: 25
  },
  descricaoTask: {
    fontSize: 15
  },
  contentBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around'
  },
  btnFinaliza: {

  },
  btnRemove: {
    height: 25,
    width: 25,
    backgroundColor: '#C83A3A',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20%'
  },
  btTextRemove: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 7.5,
    color: '#740A0A'
  }
});

