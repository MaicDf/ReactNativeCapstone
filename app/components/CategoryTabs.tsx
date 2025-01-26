import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Starters', 'Mains', 'Desserts', 'Drinks'];

const CategoryTabs = ({ onPress }: { onPress: (category: string) => void }) => (
  <View style={styles.container}>
    {categories.map((category, index) => (
      <TouchableOpacity key={index} onPress={() => onPress(category)}>
        <Text style={styles.tab}>{category}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
  },
  tab: { fontSize: 16, color: '#4F4F4F', padding: 8, fontWeight: 'bold' },
});

export default CategoryTabs;
