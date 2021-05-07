export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payloadCustomName: num
    }
}

export const decNumber = (num) => {
    return {
        type: "DECREMENT",
        payloadCustomName: num
    }
}