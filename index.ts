
export const enum SortDirectionTypes {
    Ascending = "ASC",
    Descending = "DESC",
}
/**
 * sort array of tabke rows
 * @param items table rows array
 * @param columnName the target column name
 * @param sortDirection the sort direction
 */

export function sortArray<T>(items: Array<T> = [], columnName: string, sortDirection: SortDirectionTypes): Array<T> {
    const languages: Readonly<Array<string>> = globalThis?.window?.navigator?.languages || ["sw", "en"];

    const sortedItems: Array<any> = [...items].sort((firstItem: T, secondItem: T) => {
        let result: number = 0;
        if (sortDirection === SortDirectionTypes.Ascending) {
            if (isNaN(secondItem[columnName]) && isNaN(firstItem[columnName])) {
                result = String(firstItem[columnName]).localeCompare(String(secondItem[columnName]), languages as Array<string>, { sensitivity: "base", ignorePunctuation: true });
            } else {
                result = firstItem[columnName] - secondItem[columnName];
            }
        } else {
            if (isNaN(secondItem[columnName]) && isNaN(firstItem[columnName])) {
                result = String(secondItem[columnName]).localeCompare(String(firstItem[columnName]), languages as Array<string>, { sensitivity: "base", ignorePunctuation: true });
            } else {
                result = secondItem[columnName] - firstItem[columnName];
            }
        }
        return result;
    });
    return sortedItems;
}

const array = [
    {
        id: 1,
        name: "Sadiq"
    },
    {
        id: 2,
        name: "Naseer"
    }
]
sortArray(array, 'name', SortDirectionTypes.Ascending);