//1
const usdToRUb=(u) =>{
    const r=90;
    usdt=r*u
    console.log(`Сумма USD в рублях=${usdt}`)
}
usdToRUb(9);
const euroToRub=(e) =>{
    const r=95;
    Eur=r*e
    console.log(`Сумма EUR в рублях=${Eur}`)
}
euroToRub(9)
//2
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