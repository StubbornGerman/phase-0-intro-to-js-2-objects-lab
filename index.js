// Write your solution in this file!
const employee = {
    "name" : "Steve",
    "streetAddress" : "123"
};
function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newEmployee = {...employeeObj, [key]:value };
    return newEmployee;

}
updateEmployeeWithKeyAndValue(employee, "name", "Josh");

const newEmployee = {
    "name" : "Steve",
    "streetAddress" : "123",
    [key] : value
    
};

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value){
    employeeObj[key] = value;
    return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key) {
    const newEmployee = {...employeeObj};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
}