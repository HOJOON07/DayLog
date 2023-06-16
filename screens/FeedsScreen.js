import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default function FeedsScreen() {
  return (
    <View style={styles.block}>
      <FloatingWriteButton></FloatingWriteButton>
    </View>
  );
}
