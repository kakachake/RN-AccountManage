import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Home() {
  const renderTitle = () => {
    return (
      <View style={styles.titleLayout}>
        <Text style={styles.titleTxt}>账号管理</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {renderTitle()}
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  titleLayout: {
    width: '100%',
    height: 46,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    color: '#333',
  },
});
