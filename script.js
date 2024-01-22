let totalBalance = getVictoryBalance();
let heroLevel = getHeroLevel(totalBalance);

function getVictoryBalance(victories, defeats) {
    let totalBalance = victories - defeats;
    return totalBalance;
}
function getHeroLevel(totalBalance){
    let heroLevel = "";
    if (totalBalance <= 10){
        heroLevel = "Ferro";
    }
    else if (totalBalance <= 20 && totalBalance > 10){
        heroLevel = "Bronze";
    }
    else if (totalBalance <= 50 && totalBalance > 20){
        heroLevel = "Prata";
    }
    else if (totalBalance <= 80 && totalBalance > 50){
        heroLevel = "Ouro";
    }
    else if (totalBalance <= 90 && totalBalance > 80){
        heroLevel = "Diamante";
    }
    else if (totalBalance <= 100 && totalBalance > 90){
        heroLevel = "Lendário";
    }
    else if (totalBalance > 100){
        heroLevel = "Imortal";
    }
    return heroLevel;
}

console.log(`O Herói tem saldo de ${totalBalance} vitórias e está no nível de ${heroLevel}`);