import React from 'react';
import { Text, View } from 'react-native';
import Card from './components/Card'

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Card>
          <Text>Hello, world!</Text>
        </Card>
    </View>
  )
}
export default App;
