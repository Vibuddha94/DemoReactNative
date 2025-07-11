import axios from 'axios';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function AxiosCom() {
  useEffect(() => {
    axios
      .get('https://student-api.acpt.lk/api/companies')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <View>
      <Text>AxiosCom</Text>
    </View>
  );
}
