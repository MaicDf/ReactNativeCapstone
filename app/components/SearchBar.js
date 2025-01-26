import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => (
  <View style={styles.container}>
    <TextInput placeholder="Search..." style={styles.input} />
  </View>
);

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, marginVertical: 12 },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    elevation: 1,
  },
});

export default SearchBar;
