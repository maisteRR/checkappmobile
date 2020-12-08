export const getCorrectSum = (price) =>{
    return `${price.substring(0, price.length - 2)}.${price.substring(price.length - 2, price.length)}`;
}
export const getCorrectWeight = (weight) =>{
    switch (weight.length) {
        case 2:
            return `0.0${weight}кг`
            break;
        case 3:
            return `0.${weight}кг`
            break;
        case 4:
            return `${weight.slice(0, 1)}.${weight.slice(1, weight.length)}`
            break;
    }
}