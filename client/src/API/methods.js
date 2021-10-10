export const pushBook = async (options) => {
    try {
        const data = JSON.stringify(options);
        await fetch('http://localhost:8080/api/createBook', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: data
        })
    } catch (e) {
        throw new Error(e.message)
    }
}

export const deleteBook = async (options) => {
    try {

    } catch(e) {
        throw new Error(e.message);
    }
}