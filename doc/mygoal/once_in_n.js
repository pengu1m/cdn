const skips = [2]

const until = (till) => {
    const arr = Array.from({length: till}, (v,i)=>i)
    return arr
}

skips.forEach((skip_range) => {
    const rests = until(skip_range)

    rests.forEach((rest) => {
        console.log(`once_in_${skip_range}-${rest}`)
        const skiping = document.querySelectorAll(`once_in_${skip_range}-${rest}`)
        const now_date = new Date().getDate()

        if (now_date % 2 === rest) skiping.forEach((item) => item.remove())
    })
})