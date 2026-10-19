
import { View, Text, StyleSheet } from 'react-native';

export default function Cpage() {
  return (
    <View style={styles.container}>
      <Text>C Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
});