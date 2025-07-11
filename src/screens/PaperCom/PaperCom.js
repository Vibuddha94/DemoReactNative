import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Appbar, Avatar, Badge } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function PaperCom() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Button
            icon="paper-roll"
            mode="contained"
            onPress={() => console.log('Pressed')}
          >
            Press me
          </Button>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Content title="Title" />
            <Appbar.Action icon="calendar" onPress={() => {}} />
            <Appbar.Action icon="magnify" onPress={() => {}} />
          </Appbar.Header>
          <Avatar.Icon size={50} icon="folder" />
          <Badge>5</Badge>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
