// components/MenuItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  imageUrl,
}) => (
  <View style={styles.container}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  image: { width: 80, height: 80, borderRadius: 8 },
  details: { marginLeft: 12, flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#4F4F4F' },
  price: { fontSize: 16, fontWeight: 'bold', color: '#FFD700', marginTop: 8 },
});

export default MenuItem;
