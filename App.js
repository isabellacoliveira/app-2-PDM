import { Text, SafeAreaView, View, Button } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0); 

  function adicionarPessoas(){
    setCount(count + 1);
  }

  function diminuirPessoas(){
    if(count == 0){
      console.log("Não é possível diminuir as pessoas");
    } else {
      setCount(count - 1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Contador de Pessoas
      </Text>
      <View style={styles.contador}>
        {count}
      </View>
      <View>
        <View style={styles.greenButton}>
          <Button 
            onPress={() => adicionarPessoas()}
            title="+"
            color="#228b22"
            accessibilityLabel="Learn more about this green button"
          />
        </View>
        <View style={styles.redButton}>
          <Button 
            onPress={() => diminuirPessoas()}
            title="-"
            color="#ec5353"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

