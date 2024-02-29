import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';

const RenderIcon = ({ type }) => {
  return (
    <View style={{  alignItems: 'center' }}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: type === '✔' ? '#00eda6' : '#FF0060',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 40,
            textTransform: 'uppercase',
            letterSpacing: 4,
            fontWeight: 'bold',
            color: '#fff',
            transform: [{ rotate: type === '✔' ? '-30deg' : '0deg' }],
          }}
        >
          {type}
        </Text>
      </View>
    </View>
  );
};

export default RenderIcon;

