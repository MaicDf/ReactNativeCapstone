import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const ProfileForm = () => (
  <View style={styles.container}>
    <Text style={styles.label}>First Name</Text>
    <TextInput style={styles.input} placeholder="Enter your first name" />
    <Text style={styles.label}>Last Name</Text>
    <TextInput style={styles.input} placeholder="Enter your last name" />
    <Text style={styles.label}>Email</Text>
    <TextInput style={styles.input} placeholder="Enter your email" />
    <Button title="Save Changes" onPress={() => alert('Changes Saved!')} />
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 14, color: '#4F4F4F', marginVertical: 4 },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default ProfileForm;
