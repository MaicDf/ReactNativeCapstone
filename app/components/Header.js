import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Image source={require('../assets/logo.jpg')} style={styles.logo} />
    <Text style={styles.title}>Little Lemon</Text>
    <Text style={styles.subtitle}>Chicago</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingVertical: 16 },
  logo: { width: 50, height: 50, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFD700' },
  subtitle: { fontSize: 16, color: '#4F4F4F' },
});

export default Header;
