import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TransparentCircleButton from './TransparentCircleButton';

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row', //가로 방향 ㅓㄹ정
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
});

export default function WriteHeader() {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"></TransparentCircleButton>
      </View>
      <View style={styles.buttons}>
        <View style={(styles.iconButtonWrapper, styles.marginRight)}>
          <TransparentCircleButton
            name="delete-forever"
            color="#ef5350"
            hasMarginRight></TransparentCircleButton>
        </View>
        <View style={styles.iconButtonWrapper}>
          <TransparentCircleButton
            name="check"
            color="#009688"></TransparentCircleButton>
        </View>
      </View>
    </View>
  );
}
