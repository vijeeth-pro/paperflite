let timeoutId: ReturnType<typeof setTimeout>


export const debounceText = async (text: string, timeout = 1000) => {
    clearTimeout(timeoutId) // this always clears undefined
    return new Promise((resolve) => {
        if(text.length > 0){
            timeoutId = setTimeout(() => {
                resolve(text)
            }, timeout)
        } else{
            resolve('')
        }
    })

}