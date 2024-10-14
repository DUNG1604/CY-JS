const arr = [
    {
        brand: 'Huyndai',
        model: 'Santafe'
    },
    {
        brand: 'Huyndai',
        model: 'Sonata'
    },
    {
        brand: 'Vinfast',
        model: 'Vf9'
    }
]

const arr1 = arr.reduce((acc, car) => {
    let brandGroup = acc.find(group => group[0].brand === car.brand);
    
    if (brandGroup) {
        brandGroup.push(car);
    } else {
        acc.push([car]);
    }
    
    return acc; 
}, []);

console.log(arr1);

