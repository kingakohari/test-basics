const { it, expect } = require("@jest/globals");

const search = require("./index")

const mockDb = ["Paulino Leokadia","Soraya Sachin","Paul Gohar","Jayesh Enok"]

it("This is my first test", () => {
    expect("hello").toEqual("hello")
})

it("This is my first test", () => {
    search(mockDb, "Paulino")
})

it("real search with empty result", () => {
    expect(search(mockDb, "zzz")).toEqual([])
})

it("real search with keyword `Paul`, expect non empty array", () => { 
    expect(search(mockDb, "Paul")).toEqual(["Paulino Leokadia", "Paul Gohar"])
})
 

