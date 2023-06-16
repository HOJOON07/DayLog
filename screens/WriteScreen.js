import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../components/WriteHeader';
import WriteEditor from '../components/WriteEditor';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default function WriteScreen() {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
      <WriteEditor />
    </SafeAreaView>
  );
}
