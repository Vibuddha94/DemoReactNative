import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Employee from '../Employee/Employee';

const Department = ({
  department,
  departmentIndex,
  isExpanded,
  onToggle,
  expandedEmployee,
  onEmployeeToggle,
}) => (
  <View style={styles.departmentContainer}>
    <TouchableOpacity
      style={styles.departmentHeader}
      onPress={() => onToggle(departmentIndex)}
    >
      <View style={styles.departmentInfo}>
        <Text style={styles.departmentName}>{department.name}</Text>
        <Text style={styles.departmentCount}>
          {department.employees.length} employees
        </Text>
      </View>
      <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
    </TouchableOpacity>

    {isExpanded && (
      <View style={styles.employeesList}>
        {department.employees.map((employee, employeeIndex) => (
          <Employee
            key={employeeIndex}
            employee={employee}
            employeeIndex={employeeIndex}
            isExpanded={expandedEmployee === employeeIndex}
            onToggle={onEmployeeToggle}
          />
        ))}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  departmentContainer: {
    backgroundColor: '#f8f9fa',
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  departmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  departmentInfo: {
    flex: 1,
  },
  departmentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  departmentCount: {
    fontSize: 12,
    color: '#666',
  },
  expandIcon: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  employeesList: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 12,
  },
});

export default Department;
