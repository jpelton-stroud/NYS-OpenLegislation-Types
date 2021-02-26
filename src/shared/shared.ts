export interface Items<T> {
    items: T
    size: number
}

export function isItemsList(
    arg: unknown | Items<unknown>
): arg is Items<unknown> {
    return (arg as Items<unknown>).size !== undefined
}

export type Chamber = "SENATE" | "ASSEMBLY"
export type BillVersion =
    | ""
    | "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z"
