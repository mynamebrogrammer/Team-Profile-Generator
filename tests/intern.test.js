const intern = require("../lib/intern");

test("can set school via constructor", () => {
    const testValue = "UCLA";
    const e = new intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new intern("John", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("can get school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new intern("John", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});