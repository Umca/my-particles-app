export const capitalizeWord = (word) => {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
};

export const splitWord = (word) => {
    let result = word[0];
    for (let i = 1; i < word.length; i++) {
        const letter = word[i];
        if (letter.charCodeAt() < 97) {
            result += ` `;
        }
        result += `${letter.toLowerCase()}`;
    }
    return result;
};

export const pipe = (value, fns = []) => {
    return fns.reduce((acc, cur) => {
        return cur(acc);
    }, value);
};
