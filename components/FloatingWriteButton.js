import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    //ios 전용 그림자 설정
    shadowColor: 28,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    //안드로이드 전용 그림자 설정
    elevation: 5,
    //안드로이드 물결 효과가 영역 밖으로 나가지 않도록 설정
    //ios에서는 overflow가 hidden일 경우 그림자가 보여지지 않음
    overflow: Platform.select({android: 'hidden'}),
  },
  buttoon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

//andrioid_ripple -> 안드로이드에서 물결 효과, 스타일 설정할 때 pressed값을 인식해서 컴포넌트가 눌리면 동적인 스타일을 적용할 수도 있다.

export default function FloatingWriteButton() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write');
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => [
          styles.buttoon,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: 'white'}}
        onPress={onPress}>
        {/* ios에서는 버튼을 누르면 투명도를 android에서는 물결 효과를 */}
        <Icon name="add" size={24} style={styles.icon}></Icon>
      </Pressable>
    </View>
  );
}
