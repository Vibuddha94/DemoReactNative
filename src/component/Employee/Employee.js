import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Skills from '../Skills/Skills';

const Employee = ({ employee, employeeIndex, isExpanded, onToggle }) => (
  <View style={styles.employeeContainer}>
    <TouchableOpacity
      style={styles.employeeHeader}
      onPress={() => onToggle(employeeIndex)}
    >
      <View style={styles.employeeInfo}>
        <Text style={styles.employeeName}>{employee.name}</Text>
        <Text style={styles.employeePosition}>{employee.position}</Text>
      </View>
      <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
    </TouchableOpacity>

    {isExpanded && (
      <View style={styles.skillsSection}>
        <Text style={styles.skillsTitle}>Skills:</Text>
        <Skills skills={employee.skills} />
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  employeeContainer: {
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 6,
    borderLeftWidth: 2,
    borderLeftColor: '#28a745',
  },
  employeeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  employeeInfo: {
    flex: 1,
  },
  employeeName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  employeePosition: {
    fontSize: 12,
    color: '#666',
  },
  expandIcon: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  skillsSection: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  skillsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
});

export default Employee;
