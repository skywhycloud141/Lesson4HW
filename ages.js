const ages = [10,18,55,3,20];
const checkAcess = (myAge) =>{
    for (moreAges of ages){
        if (moreAges >=18){
            console.log(`Возраст:${moreAges} Доступ разрешен `);
        }
        else {
            console.log(`Возраст:${moreAges} Доступ закрыт `)
        }
    }
}
checkAcess()