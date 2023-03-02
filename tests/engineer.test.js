const engineer = require("../lib/engineer");

test("can make an engineer object ", () => {
    const e = new engineer("Habib");
    expect(typeof e).toBe("object");
});

test("can set name via constructor", () => {
    const name = "John";
    const e = new engineer(name);
    expect(e.name).toBe(name);
});

test("can set id via constructor", () => {
    const testValue = 100;
    const e = new engineer("Foo", testValue);
    expect(e.id).toBe(testValue);
}); 

test("can set email via constructor", () => {
    const testValue = "habib@test.com";
    const e = new engineer("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("can set github via constructor", () => {
    const testValue = "GitHubUser";
    const e = new engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new engineer("John", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

