import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import CategoryTabs from './components/CategoryTabs';
import MenuList from './components/MenuList.js';
import ProfileForm from './components/ProfileForm.js';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <Header />
      <SearchBar />
      <CategoryTabs onPress={(category) => alert(`Selected: ${category}`)} />
      <MenuList />
      <ProfileForm />
    </ScrollView>
  </SafeAreaView>
);

export default App;
