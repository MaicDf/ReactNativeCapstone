import React from 'react';
import { FlatList } from 'react-native';
import MenuItem from './MenuItem';

const menuData = [
  {
    name: 'Greek Salad',
    description: 'Crispy lettuce...',
    price: '12.99',
    imageUrl: 'https://example.com/salad.jpg',
  },
  {
    name: 'Bruschetta',
    description: 'Grilled bread...',
    price: '7.99',
    imageUrl: 'https://example.com/bruschetta.jpg',
  },
  // Add more items...
];

const MenuList = () => (
  <FlatList
    data={menuData}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => <MenuItem {...item} />}
    style={{ padding: 16 }}
  />
);

export default MenuList;
