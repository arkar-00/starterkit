/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, View} from 'react-native';
import Card from './src/components/Card';
import useCounter from './src/hooks/useCounter';

function App(): React.JSX.Element {
  const {count, increment} = useCounter();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card title="Counter Card" content={`count: ${count}`} />
      <Button title="Like" onPress={increment} />
    </View>
  );
}

export default App;
