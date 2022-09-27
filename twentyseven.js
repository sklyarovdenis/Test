let ConvertsTwodimensionalArrayToOnedimensional = (arrays) => {
    console.log(arrays.reduce((flat,current) => {
        return flat.concat(current);
    }, []))
};

ConvertsTwodimensionalArrayToOnedimensional(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
);