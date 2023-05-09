const employee = {
    name: 'Frank',
    streetAddress: 'whateverstreet'};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employee2 = { ...employee};
    employee2[key] = value;
    return employee2
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey( employee, key) {
    const employee4 = { ...employee}
    delete employee4[key]
    return employee4
}
function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key]
    return employee
}

