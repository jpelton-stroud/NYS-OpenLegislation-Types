import { isItemsList, Items } from "./shared"

const itemsList: Items<string[]> = {
    items: ["hi", "there"],
    size: 0,
}

const itemsMap: Items<{ [key: string]: string }> = {
    items: {
        message: "hi, there!",
    },
    size: 0,
}

test("isItemsList", () => {
    expect(isItemsList(itemsList)).toBe(true)
    expect(isItemsList(itemsMap)).toBe(false)
})
