import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView, Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import data from '../../assets/data.json';
import level1 from '../../assets/images/levelSelection/level1.png';
import level2 from '../../assets/images/levelSelection/level2.png';
import level3 from '../../assets/images/levelSelection/level3.png';
import level4 from '../../assets/images/levelSelection/level4.png';
import CardLevel from '../../components/CardLevel';

import styles from './styles';

function LevelSelection({navigation}) {
  // eslint-disable-next-line no-unused-vars
  const [levelsAvailable, setLevelsAvailable] = useState({});

  const getData = async () => {
    try {
      const levels = {
        level2: JSON.parse(await AsyncStorage.getItem('level2')),
        level3: JSON.parse(await AsyncStorage.getItem('level3')),
        level4: JSON.parse(await AsyncStorage.getItem('level4'))
      };

      if (!levels) {
        await Promise.all([
          AsyncStorage.setItem('level2', 'false'),
          AsyncStorage.setItem('level3', 'false'),
          AsyncStorage.setItem('level4', 'false')
        ]);
      }

      setLevelsAvailable(levels);
    } catch (e) {
      Alert.alert('Erro', 'Não foi possivel carregar o seu nível atual');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>     
      <ScrollView>
        <View style={styles.boxContainer}>
          
          <CardLevel
            level="1"
            image={level1}
            available
            onPress={() => navigation.navigate('Exercises', {data: data[0]})}
          />

          <CardLevel
            level="2"
            image={level2}
            available={levelsAvailable.level2}
            onPress={() => navigation.navigate('Exercises', {data: data[1]})}
          />
        </View>
        
        <View style={styles.boxContainer}>
          <CardLevel
            level="3"
            image={level3}
            available={levelsAvailable.level3}
            onPress={() => navigation.navigate('Exercises', {data: data[2]})}
          />

          <CardLevel
            level="4"
            image={level4}
            available={levelsAvailable.level4}
            onPress={() => navigation.navigate('Exercises', {data: data[3]})}
          />

        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default LevelSelection;