import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import RenderIcon from './RenderIcon';
const { height, width } = Dimensions.get('window'); 

const CardItem = ({ item, isFirst, swipe, ...props }) => {
  const backgroundColor = item.color;
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            { position: 'absolute', top: isFirst ? 50 : 20, left: 20 }, // Adjust top position for overlap
            { opacity: likeOpacity },
          ]}>
          <RenderIcon type={'✔'} /> 
        </Animated.View>
        <Animated.View
          style={[
            { position: 'absolute', top: isFirst ? 50 : 20, right: 20 }, // Adjust top position for overlap
            { opacity: rejectOpacity },
          ]}>
          <RenderIcon type={'X'} /> 
        </Animated.View>
      </>
    );
  }, [isFirst, likeOpacity, rejectOpacity]);

  return (
    <Animated.View
      style={[
        { width: width - 20, height: height - 200, alignSelf: 'center', position: 'absolute', top: isFirst ? 0 : 15, borderRadius: 10,marginTop:40 }, 
        isFirst && { transform: [...swipe.getTranslateTransform(), { rotate: rotate }] },
      ]}
      {...props}
    >
      <View style={{ flex: 1, backgroundColor: backgroundColor, borderRadius: 10 }}>
  
        {isFirst && renderChoice()}
      </View>
    </Animated.View>
  );
};

export default CardItem;

const styles = StyleSheet.create({});
