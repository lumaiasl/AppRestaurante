import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [pessoas, setPessoas] = useState(1);

  function aumentar(){
    if(pessoas >= 10){
      return;
    }
    
    setPessoas(pessoas + 1)
    return;
  }

  function diminuir(){
    if(pessoas <= 0){
      return;
    }
    
    setPessoas(pessoas - 1)
    return;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Pessoas no Restaurante:</Text>

      <View style={styles.areaPessoas}>
        <Text style={styles.textPessoas}>{pessoas}</Text>
      </View>
      {pessoas >= 10 && (<View style={styles.limite}>
        <Text style={styles.textoLimite}>Restaurante está no seu limite de pessoas</Text>
      </View>)}

      <View style={styles.secaoBotao}>
        <TouchableOpacity 
          style={[ 
            styles.areaBotao, 
            pessoas >= 10 ? { opacity: 0.3 } : { opacity: 1 } 
          ]}
          onPress={aumentar}
          disabled={pessoas >= 10}
        >
          <Text style={styles.textBotao}>Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[ 
            styles.areaBotao, 
            pessoas <= 0 ? { opacity: 0.3 } : { opacity: 1 } 
          ]}
          onPress={diminuir}
          disabled={pessoas <= 0}
        >
          <Text style={styles.textBotao}>Remover</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: '#faf9f9',
    fontSize: 24,
    fontWeight: 'bold'
  },
  areaPessoas:{
    backgroundColor: '#faf9f9',
    width: 100, 
    height: 100,
    justifyContent: 'center',
    borderRadius: 8,
  },
  textPessoas:{
    fontSize: 40,
    textAlign: 'center',
    color: '#1f1f1f',
  },
  secaoBotao:{
    flexDirection: 'row',
    gap: 12,
  },
  areaBotao:{
    backgroundColor: '#509afd',
    borderRadius: 8,
    padding: 8,
  },
  textBotao: {
    fontSize: 24,
    color: "#faf9f9"
  },
  limite:{
    backgroundColor: '#ffba32',
    padding: 4,
    borderRadius: 8,
  },
  textoLimite:{
    fontSize: 16,
    color: '#1f1f1f',
    fontWeight: '500'
  }
});
