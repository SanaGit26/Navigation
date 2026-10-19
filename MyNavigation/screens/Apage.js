
import { View, Text, StyleSheet } from 'react-native';

export default function Apage() {
  return (
    <View style={styles.container}>
      <Text>A Page</Text>
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
