
const employee = {
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const Newemployee = { ...employee }
  // employee[key[0]] = [value[0]]
  // employee[key[1]] = [value[1]]
  Newemployee.name = "Sam"
  Newemployee.streetAddress = "11 Broadway"
  console.log([value[1]])
  return Newemployee

}
updateEmployeeWithKeyAndValue(employee, ['name', 'streetAddress'], ["Sam", "11 Broadway"])


function destructivelyUpdateEmployeeWithKeyAndValue(employee) {
  employee.name = "Sam"
  employee.streetAddress = "12 Broadway"
  return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee)

function deleteFromEmployeeByKey(employee, key) {
  const newemployee = { ...employee }
  delete newemployee[key];
  return newemployee
}
deleteFromEmployeeByKey(employee, 'name')

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  console.log(employee)
  return employee
}

destructivelyDeleteFromEmployeeByKey(employee, 'name')
