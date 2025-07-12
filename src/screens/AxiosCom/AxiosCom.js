import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Company from '../../component/Company/Company';

export default function AxiosCom() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [expandedDepartment, setExpandedDepartment] = useState(null);
  const [expandedEmployee, setExpandedEmployee] = useState(null);

  useEffect(() => {
    axios
      .get('https://student-api.acpt.lk/api/companies')
      .then(function (response) {
        // handle success
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setLoading(false);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const toggleCompany = companyIndex => {
    if (expandedCompany === companyIndex) {
      setExpandedCompany(null);
      setExpandedDepartment(null);
      setExpandedEmployee(null);
    } else {
      setExpandedCompany(companyIndex);
      setExpandedDepartment(null);
      setExpandedEmployee(null);
    }
  };

  const toggleDepartment = departmentIndex => {
    if (expandedDepartment === departmentIndex) {
      setExpandedDepartment(null);
      setExpandedEmployee(null);
    } else {
      setExpandedDepartment(departmentIndex);
      setExpandedEmployee(null);
    }
  };

  const toggleEmployee = employeeIndex => {
    if (expandedEmployee === employeeIndex) {
      setExpandedEmployee(null);
    } else {
      setExpandedEmployee(employeeIndex);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Company Directory</Text>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map((company, companyIndex) => (
          <Company
            key={companyIndex}
            company={company}
            companyIndex={companyIndex}
            isExpanded={expandedCompany === companyIndex}
            onToggle={toggleCompany}
            expandedDepartment={expandedDepartment}
            onDepartmentToggle={toggleDepartment}
            expandedEmployee={expandedEmployee}
            onEmployeeToggle={toggleEmployee}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
  },
  loadingText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
    color: '#666',
  },
});
