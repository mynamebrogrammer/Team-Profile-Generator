const employee = require("../lib/employee");

test('can make an employee object ', () => {
    const e = new employee("Habib");
    expect(typeof(e)).toBe("object");
});

test('can set name via constructor', () => {
    const name = "Habib";
    const e = new employee(name);
    expect(e.name).toBe(name);
});

test('can set id via constructor', () => {
    const testValue = 100;
    const e = new employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test('can set email via constructor', () => {
    const testValue = "Habib@test.com";
    const e = new employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test('can get name via getName()', () => {
    const testValue = "Habib";
    const e = new employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test('can get id via getId()', () => {
    const testValue = 100;
    const e = new employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test('can get email via getEmail()', () => {
    const testValue = "Habib@test.com";
    const e = new employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
    const testValue = "Employee";
    const e = new employee("John", 1, "test@test.com"); 
    expect(e.getRole()).toBe(testValue);
});