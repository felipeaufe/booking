import { get, set, remove } from "@utils/store";

describe("store", () => {
  it("should set and get using store functions", () => {
    set("key", "bar");
    expect(get("key")).toBe("bar");
  });

  it("should set and get a number using store functions", () => {
    set("key", 10);
    const response = get("key");

    expect(typeof response).toBe("number");
    expect(response).toBe(10);
  });

  it("should set and get a object using store functions", () => {
    set("key", ["bar"]);
    const response = get("key");

    expect(typeof response).toBe("object");
    expect(response).toMatchObject(["bar"]);
  });

  it("should set and get a object with a custom type using store functions", () => {
    type MyCustomType = {
      bar: string;
    };

    set("key", { bar: "bar" });
    const response = get("key") as MyCustomType;

    if (response) {
      expect(typeof response).toBe("object");
      expect(response.bar).toMatch("bar");
    }
  });

  it("should remove using store remove function", () => {
    set("key", "value");
    remove("key");
    expect(get("key")).toBeNull();
  });
});
