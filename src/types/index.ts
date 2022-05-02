export type Image = {
    src: any
    id: number
    selected: boolean
}
export type Category = {
    name: string
    id: number
    items: Array<CategoryItem> | undefined
}
export type CategoryItem = {
    name: string
    id: number

}