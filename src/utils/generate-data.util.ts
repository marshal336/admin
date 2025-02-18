export const generateDynamicData = (length: number) => {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * 300) + 1); // Генерация случайных чисел от 1 до 100
    }
    return data;
};
