export const changeColor = (color) => {
    const meta = document.querySelector('meta[name="theme-color"]')
    meta.setAttribute("content", color)
}

export const changeTitle = (title) => {
    document.title = title
}