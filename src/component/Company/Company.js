import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Department from '../Department/Department';

const Company = ({
  company,
  companyIndex,
  isExpanded,
  onToggle,
  expandedDepartment,
  onDepartmentToggle,
  expandedEmployee,
  onEmployeeToggle,
}) => (
  <View style={styles.companyContainer}>
    <TouchableOpacity
      style={styles.companyHeader}
      onPress={() => onToggle(companyIndex)}
    >
      <View style={styles.companyInfo}>
        <Text style={styles.companyName}>{company.company}</Text>
        <Text style={styles.companyLocation}>{company.location}</Text>
        <Text style={styles.companyCount}>
          {company.departments.length} departments
        </Text>
      </View>
      <Text style={styles.expandIcon}>{isExpanded ? '▼' : '▶'}</Text>
    </TouchableOpacity>

    {isExpanded && (
      <View style={styles.departmentsList}>
        {company.departments.map((department, departmentIndex) => (
          <Department
            key={departmentIndex}
            department={department}
            departmentIndex={departmentIndex}
            isExpanded={expandedDepartment === departmentIndex}
            onToggle={onDepartmentToggle}
            expandedEmployee={expandedEmployee}
            onEmployeeToggle={onEmployeeToggle}
          />
        ))}
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  companyContainer: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  companyInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  companyLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  companyCount: {
    fontSize: 12,
    color: '#999',
  },
  expandIcon: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  departmentsList: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
});

export default Company;
