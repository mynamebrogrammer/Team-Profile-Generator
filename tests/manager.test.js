const manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("can set office number via constructor", () => {
    const testValue = 100;
    const e = new manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new manager("John", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("can get office number via getOffice()", () => {
    const testValue = 100;
    const e = new manager("John", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
}); 