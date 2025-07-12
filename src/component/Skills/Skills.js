import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Skills = ({ skills }) => (
  <View style={styles.skillsContainer}>
    {skills.map((skill, index) => (
      <View key={index} style={styles.skillTag}>
        <Text style={styles.skillText}>{skill}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 6,
  },
  skillText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '500',
  },
});

export default Skills;
