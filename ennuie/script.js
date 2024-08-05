// country \\
let riri = 80
let dehl = 80
let bang = 105
let harb = 80
let cair = 120
let madr = 120
let jak = 135
let ber = 145
let mos = 160
let rail = 120
let toro = 160
let sel = 160
let zer = 200
let riy = 200
let syd = 240
let ele = 160
let beij = 240 
let dub = 240
let par = 280
let hong = 280
let lond = 335
let air = 200
let tok = 335
let ny = 360


// seting player \\
let player1 = 0
let money1 = 1000
let house1 = []
let p1paid = []

let player2 = 0
let money2 = 1000
let house2 = []
let p2paid = []

let player3 = 0
let money3 = 1000
let house3 = []
let p3paid = []

let player4 = 0
let money4 = 1000
let house4 = []
let p4paid = []

let round = 1
const take = []

// setting des \\

let roll = 0
let stored = 0


function affiche(){
    document.getElementById("array1").innerText = `:: ${take}`
    document.getElementById("money1").innerText = `player1: ${money1}$`
    document.getElementById("money2").innerText = `player2: ${money2}$`
    document.getElementById("money3").innerText = `player3: ${money3}$`
    document.getElementById("money4").innerText = `player4: ${money4}$`
    document.getElementById("round").innerText = `au joueur: ${round}`
    // document.getElementById("money1").innerText = `player1: ${money1} ${player1}$`
    // document.getElementById("money2").innerText = `player2: ${money2} ${player2}$`
    // document.getElementById("money3").innerText = `player3: ${money3} ${player3}$`
    // document.getElementById("money4").innerText = `player4: ${money4} ${player4}$`
    // document.getElementById("round").innerText = `au joueur: ${round}`
}

function des(){
    roll = Math.floor(Math.random()*7)
    // roll = 1
    stored = roll
    // document.getElementById("nombre").innerText = `${stored}`
    attribution()
    affiche()
    block()
    buy()
    paid()
}

    // checking des tour 
function tour1(){
    if (player1 >= 28){
        player1 -= 29
        money1 += 250
    }
}
function tour2(){
    if (player2 >= 28){
        player2 -= 29
        money2 += 250
    }
}
function tour3(){
    if (player3 >= 28){
        player3 -= 29
        money3 += 250
    }
}
function tour4(){
    if (player4 >= 28){
        player4 -= 29
        money4 += 250
    }
}

function attribution(){
    if (round == 1){
        tour1()
        player1 += stored
        round ++
    } else if (round == 2){
        tour2()
        player2 += stored
        round++
    } else if (round == 3){
        tour3()
        player3 += stored
        round++
    } else if (round == 4){
        tour4()
        player4 += stored
        round = 1
    }
    }

        // achat \\

        function riob(){
            if (take[0] == null){
                if (player1 == 1 && money1 >= 100 && house1[0] != "wont"){
                    const reponse = confirm("player 1, do you want to buy rio?")
                    if (reponse){
                        take[0] = "1"
                        money1 -= 100
                }else{
                    house1[0] = "wont"
                }
                }
                if (player2 == 1 && money2 >= 100 && house2[0] != "wont"){
                    const reponse = confirm("player 2, do you want to buy rio?")
                    if (reponse){
                        take[0] = "2"
                        money2 -= 100
                    }else{
                        house2[0] = "wont"
                    }
                }
                if (player3 == 1 && money3 >= 100 && house3[0] != "wont"){
                    const reponse = confirm("player 3, do you want to buy rio?")
                    if (reponse){
                        money3 -= 5100
                        take[0] = "3"
                    }else{
                        house3[0] = "wont"
                    }
                }
                if (player4 == 1 && money4 >= 100 && house4[0] != "wont"){
                    const reponse = confirm("player 4, do you want to buy rio?")
                    if (reponse){
                        take[0] = "4"
                        money4 -= 100
                    }else{
                        house4[0] = "wont"
                    }
                }
            }
        }
        
        function dehlib(){
            if (take[1] == null){
                if (player1 == 2 && money1 >= 100 && house1[1] != "wont"){
                    const reponse = confirm("player 1, do you want to buy dehli?")
                    if (reponse){
                        take[1] = "1"
                        money1 -= 100
                }else{
                    house1[1] = "wont"
                }
                }
                if (player2 == 2 && money2 >= 100 && house2[1] != "wont"){
                    const reponse = confirm("player 2, do you want to buy dehli?")
                    if (reponse){
                        take[1] = "2"
                        money2 -= 100
                    }else{
                        house2[1] = "wont"
                    }
                }
                if (player3 == 2 && money3 >= 100 && house3[1] != "wont"){
                    const reponse = confirm("player 3, do you want to buy dehli?")
                    if (reponse){
                        money3 -= 100
                        take[1] = "3"
                    }else{
                        house3[1] = "wont"
                    }
                }
                if (player4 == 2 && money4 >= 100 && house4[1] != "wont"){
                    const reponse = confirm("player 4, do you want to buy dehli?")
                    if (reponse){
                        take[1] = "4"
                        money4 -= 100
                    }else{
                        house4[1] = "wont"
                    }
                }
            }
        }

        function bangkokb(){
            if (take[2] == null){
                if (player1 == 3 && money1 >= 130 && house1[2] != "wont"){
                    const reponse = confirm("player 1, do you want to buy bangkok?")
                    if (reponse){
                        take[2] = "1"
                        money1 -= 130
                }else{
                    house1[2] = "wont"
                }
                }
                if (player2 == 3 && money2 >= 130 && house2[2] != "wont"){
                    const reponse = confirm("player 2, do you want to buy bangkok?")
                    if (reponse){
                        take[2] = "2"
                        money2 -= 130
                    }else{
                        house2[2] = "wont"
                    }
                }
                if (player3 == 3 && money3 >= 130 && house3[2] != "wont"){
                    const reponse = confirm("player 3, do you want to buy bangkok?")
                    if (reponse){
                        money3 -= 130
                        take[2] = "3"
                    }else{
                        house3[2] = "wont"
                    }
                }
                if (player4 == 3 && money4 >= 130 && house4[2] != "wont"){
                    const reponse = confirm("player 4, do you want to buy bangkok?")
                    if (reponse){
                        take[2] = "4"
                        money4 -= 130
                    }else{
                        house4[2] = "wont"
                    }
                }
            }
        }

        function harborb(){
            if (take[3] == null){
                if (player1 == 4 && money1 >= 100 && house1[3] != "wont"){
                    const reponse = confirm("player 1, do you want to buy harbor?")
                    if (reponse){
                        take[3] = "1"
                        money1 -= 100
                }else{
                    house1[3] = "wont"
                }
                }
                if (player2 == 4 && money2 >= 100 && house2[3] != "wont"){
                    const reponse = confirm("player 2, do you want to buy harbor?")
                    if (reponse){
                        take[3] = "2"
                        money2 -= 100
                    }else{
                        house2[3] = "wont"
                    }
                }
                if (player3 == 4 && money3 >= 100 && house3[3] != "wont"){
                    const reponse = confirm("player 3, do you want to buy harbor?")
                    if (reponse){
                        money3 -= 100
                        take[3] = "3"
                    }else{
                        house3[3] = "wont"
                    }
                }
                if (player4 == 4 && money4 >= 100 && house4[3] != "wont"){
                    const reponse = confirm("player 4, do you want to buy harbor?")
                    if (reponse){
                        take[3] = "4"
                        money4 -= 100
                    }else{
                        house4[3] = "wont"
                    }
                }
            }
        }

        function cairob(){
            if (take[4] == null){
                if (player1 == 5 && money1 >= 150 && house1[4] != "wont"){
                    const reponse = confirm("player 1, do you want to buy cairo?")
                    if (reponse){
                        take[4] = "1"
                        money1 -= 150
                }else{
                    house1[4] = "wont"
                }
                }
                if (player2 == 5 && money2 >= 150 && house2[4] != "wont"){
                    const reponse = confirm("player 2, do you want to buy cairo?")
                    if (reponse){
                        take[4] = "2"
                        money2 -= 150
                    }else{
                        house2[4] = "wont"
                    }
                }
                if (player3 == 5 && money3 >= 150 && house3[4] != "wont"){
                    const reponse = confirm("player 3, do you want to buy cairo?")
                    if (reponse){
                        money3 -= 150
                        take[4] = "3"
                    }else{
                        house3[4] = "wont"
                    }
                }
                if (player4 == 5 && money4 >= 150 && house4[4] != "wont"){
                    const reponse = confirm("player 4, do you want to buy cairo?")
                    if (reponse){
                        take[4] = "4"
                        money4 -= 150
                    }else{
                        house4[4] = "wont"
                    }
                }
            }
        }
        
        function madridb(){
            if (take[5] == null){
                if (player1 == 6 && money1 >= 150 && house1[5] != "wont"){
                    const reponse = confirm("player 1, do you want to buy madrid?")
                    if (reponse){
                        take[5] = "1"
                        money1 -= 150
                }else{
                    house1[5] = "wont"
                }
                }1
                if (player2 == 6 && money2 >= 150 && house2[5] != "wont"){
                    const reponse = confirm("player 2, do you want to buy madrid?")
                    if (reponse){
                        take[5] = "2"
                        money2 -= 150
                    }else{
                        house2[5] = "wont"
                    }
                }
                if (player3 == 6 && money3 >= 150 && house3[5] != "wont"){
                    const reponse = confirm("player 3, do you want to buy madrid?")
                    if (reponse){
                        money3 -= 150
                        take[5] = "3"
                    }else{
                        house3[5] = "wont"
                    }
                }
                if (player4 == 6 && money4 >= 150 && house4[5] != "wont"){
                    const reponse = confirm("player 4, do you want to buy madrid?")
                    if (reponse){
                        take[5] = "4"
                        money4 -= 150
                    }else{
                        house4[5] = "wont"
                    }
                }
            }
        }

        function jakartab(){
            if (take[7] == null){
                if (player1 == 8 && money1 >= 170 && house1[7] != "wont"){
                    const reponse = confirm("player 1, do you want to buy jakarta?")
                    if (reponse){
                        take[7] = "1"
                        money1 -= 170
                }else{
                    house1[7] = "wont"
                }
                }
                if (player2 == 8 && money2 >= 170 && house2[7] != "wont"){
                    const reponse = confirm("player 2, do you want to buy jakarta?")
                    if (reponse){
                        take[7] = "2"
                        money2 -= 170
                    }else{
                        house2[7] = "wont"
                    }
                }
                if (player3 == 8 && money3 >= 170 && house3[7] != "wont"){
                    const reponse = confirm("player 3, do you want to buy jakarta?")
                    if (reponse){
                        money3 -= 170
                        take[7] = "3"
                    }else{
                        house3[7] = "wont"
                    }
                }
                if (player4 == 8 && money4 >= 170 && house4[7] != "wont"){
                    const reponse = confirm("player 4, do you want to buy jakarta?")
                    if (reponse){
                        take[7] = "4"
                        money4 -= 170
                    }else{
                        house4[7] = "wont"
                    }
                }
            }
        }

        function berlinb(){
            if (take[8] == null){
                if (player1 == 9 && money1 >= 180 && house1[8] != "wont"){
                    const reponse = confirm("player 1, do you want to buy berlin?")
                    if (reponse){
                        take[8] = "1"
                        money1 -= 180
                }else{
                    house1[8] = "wont"
                }
                }
                if (player2 == 9 && money2 >= 180 && house2[8] != "wont"){
                    const reponse = confirm("player 2, do you want to buy berlin?")
                    if (reponse){
                        take[8] = "2"
                        money2 -= 180
                    }else{
                        house2[8] = "wont"
                    }
                }
                if (player3 == 9 && money3 >= 180 && house3[8] != "wont"){
                    const reponse = confirm("player 3, do you want to buy berlin?")
                    if (reponse){
                        money3 -= 180
                        take[8] = "3"
                    }else{
                        house3[8] = "wont"
                    }
                }
                if (player4 == 9 && money4 >= 180 && house4[8] != "wont"){
                    const reponse = confirm("player 4, do you want to buy berlin?")
                    if (reponse){
                        take[8] = "4"
                        money4 -= 180
                    }else{
                        house4[8] = "wont"
                    }
                }
            }
        }

        function moscowb(){
            if (take[9] == null){
                if (player1 == 10 && money1 >= 200 && house1[9] != "wont"){
                    const reponse = confirm("player 1, do you want to buy moscow?")
                    if (reponse){
                        take[9] = "1"
                        money1 -= 200
                }else{
                    house1[9] = "wont"
                }
                }
                if (player2 == 10 && money2 >= 200 && house2[9] != "wont"){
                    const reponse = confirm("player 2, do you want to buy moscow?")
                    if (reponse){
                        take[9] = "2"
                        money2 -= 200
                    }else{
                        house2[9] = "wont"
                    }
                }
                if (player3 == 10 && money3 >= 200 && house3[9] != "wont"){
                    const reponse = confirm("player 3, do you want to buy moscow?")
                    if (reponse){
                        money3 -= 200
                        take[9] = "3"
                    }else{
                        house3[9] = "wont"
                    }
                }
                if (player4 == 10 && money4 >= 200 && house4[9] != "wont"){
                    const reponse = confirm("player 4, do you want to buy moscow?")
                    if (reponse){
                        take[9] = "4"
                        money4 -= 200
                    }else{
                        house4[9] = "wont"
                    }
                }
            }
        }

        function railwayb(){
            if (take[10] == null){
                if (player1 == 11 && money1 >= 150 && house1[10] != "wont"){
                    const reponse = confirm("player 1, do you want to buy railway?")
                    if (reponse){
                        take[10] = "1"
                        money1 -= 150
                }else{
                    house1[10] = "wont"
                }
                }
                if (player2 == 11 && money2 >= 150 && house2[10] != "wont"){
                    const reponse = confirm("player 2, do you want to buy railway?")
                    if (reponse){
                        take[10] = "2"
                        money2 -= 150
                    }else{
                        house2[10] = "wont"
                    }
                }
                if (player3 == 11 && money3 >= 150 && house3[10] != "wont"){
                    const reponse = confirm("player 3, do you want to buy railway?")
                    if (reponse){
                        money3 -= 150
                        take[10] = "3"
                    }else{
                        house3[10] = "wont"
                    }
                }
                if (player4 == 11 && money4 >= 150 && house4[9] != "wont"){
                    const reponse = confirm("player 4, do you want to buy railway?")
                    if (reponse){
                        take[10] = "4"
                        money4 -= 150
                    }else{
                        house4[10] = "wont"
                    }
                }
            }
        }

        function torontob(){
            if (take[11] == null){
                if (player1 == 12 && money1 >= 200 && house1[11] != "wont"){
                    const reponse = confirm("player 1, do you want to buy toronto?")
                    if (reponse){
                        take[11] = "1"
                        money1 -= 200
                }else{
                    house1[11] = "wont"
                }
                }
                if (player2 == 12 && money2 >= 500 && house2[11] != "wont"){
                    const reponse = confirm("player 2, do you want to buy toronto?")
                    if (reponse){
                        take[11] = "2"
                        money2 -= 200
                    }else{
                        house2[11] = "wont"
                    }
                }
                if (player3 == 12 && money3 >= 500 && house3[11] != "wont"){
                    const reponse = confirm("player 3, do you want to buy toronto?")
                    if (reponse){
                        money3 -= 200
                        take[11] = "3"
                    }else{
                        house3[11] = "wont"
                    }
                }
                if (player4 == 12 && money4 >= 500 && house4[11] != "wont"){
                    const reponse = confirm("player 4, do you want to buy toronto?")
                    if (reponse){
                        take[11] = "4"
                        money4 -= 200
                    }else{
                        house4[11] = "wont"
                    }
                }
            }
        }

        function seoulb(){
            if (take[12] == null){
                if (player1 == 13 && money1 >= 200 && house1[12] != "wont"){
                    const reponse = confirm("player 1, do you want to buy seoul?")
                    if (reponse){
                        take[12] = "1"
                        money1 -= 200
                }else{
                    house1[12] = "wont"
                }
                }
                if (player2 == 13 && money2 >= 200 && house2[12] != "wont"){
                    const reponse = confirm("player 2, do you want to buy seoul?")
                    if (reponse){
                        take[12] = "2"
                        money2 -= 200
                    }else{
                        house2[12] = "wont"
                    }
                }
                if (player3 == 13 && money3 >= 200 && house3[12] != "wont"){
                    const reponse = confirm("player 3, do you want to buy seoul?")
                    if (reponse){
                        money3 -= 200
                        take[12] = "3"
                    }else{
                        house3[12] = "wont"
                    }
                }
                if (player4 == 13 && money4 >= 200 && house4[12] != "wont"){
                    const reponse = confirm("player 4, do you want to buy seoul?")
                    if (reponse){
                        take[12] = "4"
                        money4 -= 200
                    }else{
                        house4[12] = "wont"
                    }
                }
            }
        }

        function zeruichb(){
            if (take[13] == null){
                if (player1 == 15 && money1 >= 250 && house1[13] != "wont"){
                    const reponse = confirm("player 1, do you want to buy zeruich?")
                    if (reponse){
                        take[13] = "1"
                        money1 -= 250
                }else{
                    house1[13] = "wont"
                }
                }
                if (player2 == 15 && money2 >= 250 && house2[13] != "wont"){
                    const reponse = confirm("player 2, do you want to buy zeruich?")
                    if (reponse){
                        take[13] = "2"
                        money2 -= 250
                    }else{
                        house2[13] = "wont"
                    }
                }
                if (player3 == 15 && money3 >= 250 && house3[13] != "wont"){
                    const reponse = confirm("player 3, do you want to buy zeruich?")
                    if (reponse){
                        money3 -= 250
                        take[13] = "3"
                    }else{
                        house3[13] = "wont"
                    }
                }
                if (player4 == 15 && money4 >= 250 && house4[13] != "wont"){
                    const reponse = confirm("player 4, do you want to buy zeruich?")
                    if (reponse){
                        take[13] = "4"
                        money4 -= 250
                    }else{
                        house4[13] = "wont"
                    }
                }
            }
        }

        function riyadb(){
            if (take[14] == null){
                if (player1 == 16 && money1 >= 250 && house1[14] != "wont"){
                    const reponse = confirm("player 1, do you want to buy riyad?")
                    if (reponse){
                        take[14] = "1"
                        money1 -= 250
                }else{
                    house1[14] = "wont"
                }
                }
                if (player2 == 16 && money2 >= 250 && house2[14] != "wont"){
                    const reponse = confirm("player 2, do you want to buy riyad?")
                    if (reponse){
                        take[14] = "2"
                        money2 -= 250
                    }else{
                        house2[14] = "wont"
                    }
                }
                if (player3 == 16 && money3 >= 250 && house3[14] != "wont"){
                    const reponse = confirm("player 3, do you want to buy riyad?")
                    if (reponse){
                        money3 -= 250
                        take[14] = "3"
                    }else{
                        house3[14] = "wont"
                    }
                }
                if (player4 == 16 && money4 >= 250 && house4[14] != "wont"){
                    const reponse = confirm("player 4, do you want to buy riyad?")
                    if (reponse){
                        take[14] = "4"
                        money4 -= 250
                    }else{
                        house4[14] = "wont"
                    }
                }
            }
        }

        function sydneyb(){
            if (take[15] == null){
                if (player1 == 17 && money1 >= 300 && house1[15] != "wont"){
                    const reponse = confirm("player 1, do you want to buy sydney?")
                    if (reponse){
                        take[15] = "1"
                        money1 -= 300
                }else{
                    house1[15] = "wont"
                }
                }
                if (player2 == 17 && money2 >= 300 && house2[15] != "wont"){
                    const reponse = confirm("player 2, do you want to buy sydney?")
                    if (reponse){
                        take[15] = "2"
                        money2 -= 300
                    }else{
                        house2[15] = "wont"
                    }
                }
                if (player3 == 17 && money3 >= 300 && house3[15] != "wont"){
                    const reponse = confirm("player 3, do you want to buy sydney?")
                    if (reponse){
                        money3 -= 300
                        take[15] = "3"
                    }else{
                        house3[15] = "wont"
                    }
                }
                if (player4 == 17 && money4 >= 300 && house4[15] != "wont"){
                    const reponse = confirm("player 4, do you want to buy sydney?")
                    if (reponse){
                        take[15] = "4"
                        money4 -= 300
                    }else{
                        house4[15] = "wont"
                    }
                }
            }
        }

        function elecb(){
            if (take[16] == null){
                if (player1 == 18 && money1 >= 200 && house1[16] != "wont"){
                    const reponse = confirm("player 1, do you want to buy elec?")
                    if (reponse){
                        take[16] = "1"
                        money1 -= 200
                }else{
                    house1[16] = "wont"
                }
                }
                if (player2 == 18 && money2 >= 200 && house2[16] != "wont"){
                    const reponse = confirm("player 2, do you want to buy elec?")
                        take[16] = "2"
                        money2 -= 200
                    }else{
                        house2[16] = "wont"
                    }
                }
                if (player3 == 18 && money3 >= 200 && house3[16] != "wont"){
                    const reponse = confirm("player 3, do you want to buy elec?")
                    if (reponse){
                        money3 -= 200
                        take[16] = "3"
                    }else{
                        house3[16] = "wont"
                    }
                }
                if (player4 == 18 && money4 >= 200 && house4[16] != "wont"){
                    const reponse = confirm("player 4, do you want to buy elec?")
                    if (reponse){
                        take[16] = "4"
                        money4 -= 200
                    }else{
                        house4[16] = "wont"
                    }
                }
            }

        function beijngb(){
            if (take[17] == null){
                if (player1 == 19 && money1 >= 300 && house1[17] != "wont"){
                    const reponse = confirm("player 1, do you want to buy beijng?")
                    if (reponse){
                        take[17] = "1"
                        money1 -= 300
                }else{
                    house1[17] = "wont"
                }
                }
                if (player2 == 19 && money2 >= 300 && house2[17] != "wont"){
                    const reponse = confirm("player 2, do you want to buy beijng?")
                    if (reponse){
                        take[17] = "2"
                        money2 -= 300
                    }else{
                        house2[17] = "wont"
                    }
                }
                if (player3 == 19 && money3 >= 300 && house3[17] != "wont"){
                    const reponse = confirm("player 3, do you want to buy beijng?")
                    if (reponse){
                        money3 -= 300
                        take[17] = "3"
                    }else{
                        house3[17] = "wont"
                    }
                }
                if (player4 == 19 && money4 >= 300 && house4[17] != "wont"){
                    const reponse = confirm("player 4, do you want to buy beijng?")
                    if (reponse){
                        take[17] = "4"
                        money4 -= 300
                    }else{
                        house4[17] = "wont"
                    }
                }
            }
        }

        function dubaib(){
            if (take[18] == null){
                if (player1 == 20 && money1 >= 300 && house1[18] != "wont"){
                    const reponse = confirm("player 1, do you want to buy doubai?")
                    if (reponse){
                        take[18] = "1"
                        money1 -= 300
                }else{
                    house1[18] = "wont"
                }
                }
                if (player2 == 20 && money2 >= 300 && house2[18] != "wont"){
                    const reponse = confirm("player 2, do you want to buy doubai?")
                    if (reponse){
                        take[18] = "2"
                        money2 -= 300
                    }else{
                        house2[18] = "wont"
                    }
                }
                if (player3 == 20 && money3 >= 300 && house3[18] != "wont"){
                    const reponse = confirm("player 3, do you want to buy doubai?")
                    if (reponse){
                        money3 -= 300
                        take[18] = "3"
                    }else{
                        house3[18] = "wont"
                    }
                }
                if (player4 == 20 && money4 >= 300 && house4[18] != "wont"){
                    const reponse = confirm("player 4, do you want to buy doubai?")
                    if (reponse){
                        take[18] = "4"
                        money4 -= 300
                    }else{
                        house4[18] = "wont"
                    }
                }
            }
        }

        function parisb(){
            if (take[20] == null){
                if (player1 == 22 && money1 >= 350 && house1[20] != "wont"){
                    const reponse = confirm("player 1, do you want to buy paris?")
                    if (reponse){
                        take[20] = "1"
                        money1 -= 350
                }else{
                    house1[20] = "wont"
                }
                }
                if (player2 == 22 && money2 >= 350 && house2[20] != "wont"){
                    const reponse = confirm("player 2, do you want to buy paris?")
                    if (reponse){
                        take[20] = "2"
                        money2 -= 350
                    }else{
                        house2[20] = "wont"
                    }
                }
                if (player3 == 22 && money3 >= 350 && house3[20] != "wont"){
                    const reponse = confirm("player 3, do you want to buy paris?")
                    if (reponse){
                        money3 -= 350
                        take[20] = "3"
                    }else{
                        house3[20] = "wont"
                    }
                }
                if (player4 == 22 && money4 >= 350 && house4[20] != "wont"){
                    const reponse = confirm("player 4, do you want to buy paris?")
                    if (reponse){
                        take[20] = "4"
                        money4 -= 350
                    }else{
                        house4[20] = "wont"
                    }
                }
            }
        }

        function hongkongb(){
            if (take[21] == null){
                if (player1 == 23 && money1 >= 350 && house1[21] != "wont"){
                    const reponse = confirm("player 1, do you want to buy hongkong?")
                    if (reponse){
                        take[21] = "1"
                        money1 -= 350
                }else{
                    house1[21] = "wont"
                }
                }
                if (player2 == 23 && money2 >= 350 && house2[21] != "wont"){
                    const reponse = confirm("player 2, do you want to buy hongkong?")
                    if (reponse){
                        take[21] = "2"
                        money2 -= 350
                    }else{
                        house2[21] = "wont"
                    }
                }
                if (player3 == 23 && money3 >= 350 && house3[21] != "wont"){
                    const reponse = confirm("player 3, do you want to buy hongkong?")
                    if (reponse){
                        money3 -= 350
                        take[21] = "3"
                    }else{
                        house3[21] = "wont"
                    }
                }
                if (player4 == 23 && money4 >= 350 && house4[21] != "wont"){
                    const reponse = confirm("player 4, do you want to buy hongkong?")
                    if (reponse){
                        take[21] = "4"
                        money4 -= 350
                    }else{
                        house4[21] = "wont"
                    }
                }
            }
        }

        function londonb(){
            if (take[22] == null){
                if (player1 == 24 && money1 >= 420 && house1[22] != "wont"){
                    const reponse = confirm("player 1, do you want to buy london?")
                    if (reponse){
                        take[22] = "1"
                        money1 -= 420
                }else{
                    house1[22] = "wont"
                }
                }
                if (player2 == 24 && money2 >= 420 && house2[22] != "wont"){
                    const reponse = confirm("player 2, do you want to buy london?")
                    if (reponse){
                        take[22] = "2"
                        money2 -= 420
                    }else{
                        house2[22] = "wont"
                    }
                }
                if (player3 == 24 && money3 >= 420 && house3[22] != "wont"){
                    const reponse = confirm("player 3, do you want to buy london?")
                    if (reponse){
                        money3 -= 420
                        take[22] = "3"
                    }else{
                        house3[22] = "wont"
                    }
                }
                if (player4 == 24 && money4 >= 420 && house4[22] != "wont"){
                    const reponse = confirm("player 4, do you want to buy london?")
                    if (reponse){
                        take[22] = "4"
                        money4 -= 420
                    }else{
                        house4[22] = "wont"
                    }
                }
            }
        }

        function airportb(){
            if (take[23] == null){
                if (player1 == 25 && money1 >= 150 && house1[23] != "wont"){
                    const reponse = confirm("player 1, do you want to buy airport?")
                    if (reponse){
                        take[23] = "1"
                        money1 -= 150
                }else{
                    house1[23] = "wont"
                }
                }
                if (player2 == 25 && money2 >= 150 && house2[23] != "wont"){
                    const reponse = confirm("player 2, do you want to buy airport?")
                    if (reponse){
                        take[23] = "2"
                        money2 -= 150
                    }else{
                        house2[23] = "wont"
                    }
                }
                if (player3 == 25 && money3 >= 150 && house3[23] != "wont"){
                    const reponse = confirm("player 3, do you want to buy airport?")
                    if (reponse){
                        money3 -= 150
                        take[23] = "3"
                    }else{
                        house3[23] = "wont"
                    }
                }
                if (player4 == 25 && money4 >= 150 && house4[23] != "wont"){
                    const reponse = confirm("player 4, do you want to buy airport?")
                    if (reponse){
                        take[23] = "4"
                        money4 -= 150
                    }else{
                        house4[23] = "wont"
                    }
                }
            }
        }

        function tokyob(){
            if (take[24] == null){
                if (player1 == 26 && money1 >= 420 && house1[24] != "wont"){
                    const reponse = confirm("player 1, do you want to buy tokyo?")
                    if (reponse){
                        take[24] = "1"
                        money1 -= 420
                }else{
                    house1[24] = "wont"
                }
                }
                if (player2 == 26 && money2 >= 420 && house2[24] != "wont"){
                    const reponse = confirm("player 2, do you want to buy tokyo?")
                    if (reponse){
                        take[24] = "2"
                        money2 -= 420
                    }else{
                        house2[24] = "wont"
                    }
                }
                if (player3 == 26 && money3 >= 420 && house3[24] != "wont"){
                    const reponse = confirm("player 3, do you want to buy tokyo?")
                    if (reponse){
                        money3 -= 420
                        take[24] = "3"
                    }else{
                        house3[24] = "wont"
                    }
                }
                if (player4 == 26 && money4 >= 420 && house4[24] != "wont"){
                    const reponse = confirm("player 4, do you want to buy tokyo?")
                    if (reponse){
                        take[24] = "4"
                        money4 -= 420
                    }else{
                        house4[24] = "wont"
                    }
                }
            }
        }

        function newyorkb(){
            if (take[25] == null){
                if (player1 == 27 && money1 >= 450 && house1[25] != "wont"){
                    const reponse = confirm("player 1, do you want to buy new york?")
                    if (reponse){
                        take[25] = "1"
                        money1 -= 450
                }else{
                    house1[25] = "wont"
                }
                }
                if (player2 == 27 && money2 >= 450 && house2[25] != "wont"){
                    const reponse = confirm("player 2, do you want to buy new york?")
                    if (reponse){
                        take[25] = "2"
                        money2 -= 450
                    }else{
                        house2[25] = "wont"
                    }
                }
                if (player3 == 27 && money3 >= 450 && house3[25] != "wont"){
                    const reponse = confirm("player 3, do you want to buy new york?")
                    if (reponse){
                        money3 -= 450
                        take[25] = "3"
                    }else{
                        house3[25] = "wont"
                    }
                }
                if (player4 == 27 && money4 >= 450 && house4[25] != "wont"){
                    const reponse = confirm("player 4, do you want to buy new york?")
                    if (reponse){
                        take[25] = "4"
                        money4 -= 450
                    }else{
                        house4[25] = "wont"
                    }
                }
            }
        }
        


    function buy(){
        riob()
        dehlib()
        bangkokb()
        harborb()
        cairob()
        madridb()
        jakartab()
        berlinb()
        moscowb()
        railwayb()
        torontob()
        seoulb()
        zeruichb()
        riyadb()
        sydneyb()
        elecb()
        beijngb()
        dubaib()
        // tradeb()
        parisb()
        hongkongb()
        londonb()
        airportb()
        tokyob()
        newyorkb()

    }



    // maison \\

    function freestart(){
        reset()        
        if (player1 == 0){
            document.getElementById("pos1").innerText = ` position: free start`
        }
        if (player2 == 0){
            document.getElementById("pos2").innerText = ` position: free start`
        }
        if (player3 == 0){
            document.getElementById("pos3").innerText = ` position: free start`
        }
        if (player4 == 0){
            document.getElementById("pos4").innerText = ` position: free start`
        }
    }
    function rio(){
        if (player1 == 1){
            document.getElementById("pos1").innerText = ` position: rio`
        }
        if (player2 == 1){
            document.getElementById("pos2").innerText = ` position: rio`
        }
        if (player3 == 1){
            document.getElementById("pos3").innerText = ` position: rio`
        }
        if (player4 == 1){
            document.getElementById("pos4").innerText = ` position: rio`
        }
    }
    function dehli(){
        if (player1 == 2){
            document.getElementById("pos1").innerText = ` position: dehli`
        }
        if (player2 == 2){
            document.getElementById("pos2").innerText = ` position: dehli`
        }
        if (player3 == 2){
            document.getElementById("pos3").innerText = ` position: dehli`
        }
        if (player4 == 2){
            document.getElementById("pos4").innerText = ` position: dehli`
        }
    }
    function bangkok(){
        if (player1 == 3){
            document.getElementById("pos1").innerText = ` position: bangkok`
        }
        if (player2 == 3){
            document.getElementById("pos2").innerText = ` position: bangkok`
        }
        if (player3 == 3){
            document.getElementById("pos3").innerText = ` position: bangkok`
        }
        if (player4 == 3){
            document.getElementById("pos4").innerText = ` position: bangkok`
        }
    }
    function harbor(){
        if (player1 == 4){
            document.getElementById("pos1").innerText = ` position: harbor`
        }
        if (player2 == 4){
            document.getElementById("pos2").innerText = ` position: harbor`
        }
        if (player3 == 4){
            document.getElementById("pos3").innerText = ` position: harbor`
        }
        if (player4 == 4){
            document.getElementById("pos4").innerText = ` position: harbor`
        }
    }
    function cairo(){
        if (player1 == 5){
            document.getElementById("pos1").innerText = ` position: cairo`
        }
        if (player2 == 5){
            document.getElementById("pos2").innerText = ` position: cairo`
        }
        if (player3 == 5){
            document.getElementById("pos3").innerText = ` position: cairo`
        }
        if (player4 == 5){
            document.getElementById("pos4").innerText = ` position: cairo`
        }
    }
    function madrid(){
        if (player1 == 6){
            document.getElementById("pos1").innerText = ` position: madrid`
        }
        if (player2 == 6){
            document.getElementById("pos2").innerText = ` position: madrid`
        }
        if (player3 == 6){
            document.getElementById("pos3").innerText = ` position: madrid`
        }
        if (player4 == 6){
            document.getElementById("pos4").innerText = ` position: madrid`
        }
    }
    function chance(){
        if (player1 == 7){
            document.getElementById("pos1").innerText = ` position: chance`
        }
        if (player2 == 7){
            document.getElementById("pos2").innerText = ` position: chance`
        }
        if (player3 == 7){
            document.getElementById("pos3").innerText = ` position: chance`
        }
        if (player4 == 7){
            document.getElementById("pos4").innerText = ` position: chance`
        }
    }
    function jakarta(){
        if (player1 == 8){
            document.getElementById("pos1").innerText = ` position: jakarta`
        }
        if (player2 == 8){
            document.getElementById("pos2").innerText = ` position: jakarta`
        }
        if (player3 == 8){
            document.getElementById("pos3").innerText = ` position: jakarta`
        }
        if (player4 == 8){
            document.getElementById("pos4").innerText = ` position: jakarta`
        }
    }
    function berlin(){
        if (player1 == 9){
            document.getElementById("pos1").innerText = ` position: berlin`
        }
        if (player2 == 9){
            document.getElementById("pos2").innerText = ` position: berlin`
        }
        if (player3 == 9){
            document.getElementById("pos3").innerText = ` position: berlin`
        }
        if (player4 == 9){
            document.getElementById("pos4").innerText = ` position: berlin`
        }
    }
    function moscow(){
        if (player1 == 10){
            document.getElementById("pos1").innerText = ` position: moscow`
        }
        if (player2 == 10){
            document.getElementById("pos2").innerText = ` position: moscow`
        }
        if (player3 == 10){
            document.getElementById("pos3").innerText = ` position: moscow`
        }
        if (player4 == 10){
            document.getElementById("pos4").innerText = ` position: moscow`
        }
    }
    function railway(){
        if (player1 == 11){
            document.getElementById("pos1").innerText = ` position: railway`
        }
        if (player2 == 11){
            document.getElementById("pos2").innerText = ` position: railway`
        }
        if (player3 == 11){
            document.getElementById("pos3").innerText = ` position: railway`
        }
        if (player4 == 11){
            document.getElementById("pos4").innerText = ` position: railway`
        }
    }
    function toronto(){
        if (player1 == 12){
            document.getElementById("pos1").innerText = ` position: toronto`
        }
        if (player2 == 12){
            document.getElementById("pos2").innerText = ` position: toronto`
        }
        if (player3 == 12){
            document.getElementById("pos3").innerText = ` position: toronto`
        }
        if (player4 == 12){
            document.getElementById("pos4").innerText = ` position: toronto`
        }
    }
    function seoul(){
        if (player1 == 13){
            document.getElementById("pos1").innerText = ` position: seoul`
        }
        if (player2 == 13){
            document.getElementById("pos2").innerText = ` position: selou`
        }
        if (player3 == 13){
            document.getElementById("pos3").innerText = ` position: selou`
        }
        if (player4 == 13){
            document.getElementById("pos4").innerText = ` position: selou`
        }
    }
    function jail(){
        if (player1 == 14){
            document.getElementById("pos1").innerText = ` position: jail`
        }
        if (player2 == 14){
            document.getElementById("pos2").innerText = ` position: jail`
        }
        if (player3 == 14){
            document.getElementById("pos3").innerText = ` position: jail`
        }
        if (player4 == 14){
            document.getElementById("pos4").innerText = ` position: jail`
        }
    }
    function zeruich(){
        if (player1 == 15){
            document.getElementById("pos1").innerText = ` position: zeruich`
        }
        if (player2 == 15){
            document.getElementById("pos2").innerText = ` position: zeruich`
        }
        if (player3 == 15){
            document.getElementById("pos3").innerText = ` position: zeruich`
        }
        if (player4 == 15){
            document.getElementById("pos4").innerText = ` position: zeruich`
        }
    }
    function riyad(){
        if (player1 == 16){
            document.getElementById("pos1").innerText = ` position: riyad`
        }
        if (player2 == 16){
            document.getElementById("pos2").innerText = ` position: riyad`
        }
        if (player3 == 16){
            document.getElementById("pos3").innerText = ` position: riyad`
        }
        if (player4 == 16){
            document.getElementById("pos4").innerText = ` position: riyad`
        }
    }
    function sydney(){
        if (player1 == 17){
            document.getElementById("pos1").innerText = ` position: sydney`
        }
        if (player2 == 17){
            document.getElementById("pos2").innerText = ` position: sydney`
        }
        if (player3 == 17){
            document.getElementById("pos3").innerText = ` position: sydney`
        }
        if (player4 == 17){
            document.getElementById("pos4").innerText = ` position: sydney`
        }
    }
    function elec(){
        if (player1 == 18){
            document.getElementById("pos1").innerText = ` position: elec`
        }
        if (player2 == 18){
            document.getElementById("pos2").innerText = ` position: elec`
        }
        if (player3 == 18){
            document.getElementById("pos3").innerText = ` position: elec`
        }
        if (player4 == 18){
            document.getElementById("pos4").innerText = ` position: elec`
        }
    }
    function beijng(){
        if (player1 == 19){
            document.getElementById("pos1").innerText = ` position: beijng`
        }
        if (player2 == 19){
            document.getElementById("pos2").innerText = ` position: beijng`
        }
        if (player3 == 19){
            document.getElementById("pos3").innerText = ` position: beijng`
        }
        if (player4 == 19){
            document.getElementById("pos4").innerText = ` position: beijng`
        }
    }
    function dubai(){
        if (player1 == 20){
            document.getElementById("pos1").innerText = ` position: dubai`
        }
        if (player2 == 20){
            document.getElementById("pos2").innerText = ` position: dubai`
        }
        if (player3 == 20){
            document.getElementById("pos3").innerText = ` position: dubai`
        }
        if (player4 == 20){
            document.getElementById("pos4").innerText = ` position: dubai`
        }
    }
    function trade(){
        if (player1 == 21){
            document.getElementById("pos1").innerText = ` position: trade`
        }
        if (player2 == 21){
            document.getElementById("pos2").innerText = ` position: trade`
        }
        if (player3 == 21){
            document.getElementById("pos3").innerText = ` position: trade`
        }
        if (player4 == 21){
            document.getElementById("pos4").innerText = ` position: trade`
        }
    }
    function paris(){
        if (player1 == 22){
            document.getElementById("pos1").innerText = ` position: paris`
        }
        if (player2 == 22){
            document.getElementById("pos2").innerText = ` position: paris`
        }
        if (player3 == 22){
            document.getElementById("pos3").innerText = ` position: paris`
        }
        if (player4 == 22){
            document.getElementById("pos4").innerText = ` position: paris`
        }
    }
    function hongkong(){
        if (player1 == 23){
            document.getElementById("pos1").innerText = ` position: hongkong`
        }
        if (player2 == 23){
            document.getElementById("pos2").innerText = ` position: hongkong`
        }
        if (player3 == 23){
            document.getElementById("pos3").innerText = ` position: hongkong`
        }
        if (player4 == 23){
            document.getElementById("pos4").innerText = ` position: hongkong`
        }
    }
    function london(){
        if (player1 == 24){
            document.getElementById("pos1").innerText = ` position: london`
        }
        if (player2 == 24){
            document.getElementById("pos2").innerText = ` position: london`
        }
        if (player3 == 24){
            document.getElementById("pos3").innerText = ` position: london`
        }
        if (player4 == 24){
            document.getElementById("pos4").innerText = ` position: london`
        }
    }
    function airport(){
        if (player1 == 25){
            document.getElementById("pos1").innerText = ` position: airport`
        }
        if (player2 == 25){
            document.getElementById("pos2").innerText = ` position: airport`
        }
        if (player3 == 25){
            document.getElementById("pos3").innerText = ` position: airport`
        }
        if (player4 == 25){
            document.getElementById("pos4").innerText = ` position: airport`
        }
    }
    function tokyo(){
        if (player1 == 26){
            document.getElementById("pos1").innerText = ` position: tokyo`
        }
        if (player2 == 26){
            document.getElementById("pos2").innerText = ` position: tokyo`
        }
        if (player3 == 26){
            document.getElementById("pos3").innerText = ` position: tokyo`
        }
        if (player4 == 26){
            document.getElementById("pos4").innerText = ` position: tokyo`
        }
    }
    function newyork(){
        if (player1 == 27){
            document.getElementById("pos1").innerText = ` position: new york`
        }
        if (player2 == 27){
            document.getElementById("pos2").innerText = ` position: new york`
        }
        if (player3 == 27){
            document.getElementById("pos3").innerText = ` position: new york`
        }
        if (player4 == 27){
            document.getElementById("pos4").innerText = ` position: new york`
        }
    }

    function block(){
        freestart()
        rio()
        dehli()
        bangkok()
        harbor()
        cairo()
        madrid()
        chance()
        jakarta()
        berlin()
        moscow()
        railway()
        toronto()
        seoul()
        jail()
        zeruich()
        riyad()
        sydney()
        elec()
        beijng()
        dubai()
        trade()
        paris()
        hongkong()
        london()
        airport()
        tokyo()
        newyork()
    }


    function reset(){
        if (player1 == 0){
            house1 = []
            p1paid = []
        }
        if (player2 == 0){
            house2 = []
            p2paid = []
        }
        if (player3 == 0){
            house3 = []
            p3paid = []
        }
        if (player4 == 0){
            house4 = []
            p4paid = []
        }
    }


    function paid(){
        riop()
        dehlip()
        bangp()
        harbp()
        cairp()
        madrp()
        jakp()
        berp()
        mosp()
        railp()
        torop()
        selp()
        zerp()
        riyp()
        sydp()
        elep()
        beijp()
        dubp()
        parp()
        hongp()
        londp()
        airp()
        tokp()
        nyp()
    }

    function riop(){
        if (take[0] == "1"){
            if (player2 == 1 && p2paid[0] != "paid"){
                money1 += riri
                money2 -= riri
                p2paid[0] = "paid"
            }
            if (player3 == 1 && p3paid[0] != "paid"){
                money1 += riri
                money3 -= riri
                p3paid[0] = "paid"
            }
            if (player4 == 1 && p4paid[0] != "paid"){
                money1 += riri
                money4 -= riri
                p4paid[0] = "paid"
            }
        }
        if (take[0] == "2"){
            if (player1 == 1 && p1paid[0] != "paid"){
                money1 -= riri
                money2 += riri
                p1paid[0] = "paid"
            }
            if (player3 == 1 && p3paid[0] != "paid"){
                money2 += riri
                money3 -= riri
                p3paid[0] = "paid"
            }
            if (player4 == 1 && p4paid[0] != "paid"){
                money2 += riri
                money4 -= riri
                p4paid[0] = "paid"
            }
        }
        if (take[0] == "3"){
            if (player1 == 1 && p1paid[0] != "paid"){
                money1 -= riri
                money3 += riri
                p1paid[0] = "paid"
            }
            if (player2 == 1 && p2paid[0] != "paid"){
                money3 += riri
                money2 -= riri
                p2paid[0] = "paid"
            }
            if (player4 == 1 && p4paid[0] != "paid"){
                money3 += riri
                money4 -= riri
                p4paid[0] = "paid"
            }
        }
        if (take[0] == "4"){
            if (player1 == 1 && p1paid[0] != "paid"){
                money1 -= riri
                money4 += riri
                p1paid[0] = "paid"
            }
            if (player2 == 1 && p2paid[0] != "paid"){
                money4 += riri
                money2 -= riri
                p2paid[0] = "paid"
            }
            if (player4 == 1 && p3paid[0] != "paid"){
                money4 += riri
                money3 -= riri
                p3paid[0] = "paid"
            }
        }
    }
    function dehlip(){
        if (take[1] == "1"){
            if (player2 == 2 && p2paid[1] != "paid"){
                money1 += dehl
                money2 -= dehl
                p2paid[1] = "paid"
            }
            if (player3 == 2 && p3paid[1] != "paid"){
                money1 += dehl
                money3 -= dehl
                p3paid[1] = "paid"
            }
            if (player4 == 2 && p4paid[1] != "paid"){
                money1 += dehl
                money4 -= dehl
                p4paid[1] = "paid"
            }
        }
        if (take[1] == "2"){
            if (player1 == 2 && p1paid[1] != "paid"){
                money1 -= dehl
                money2 += dehl
                p1paid[1] = "paid"
            }
            if (player3 == 2 && p3paid[1] != "paid"){
                money2 += dehl
                money3 -= dehl
                p3paid[1] = "paid"
            }
            if (player4 == 2 && p4paid[1] != "paid"){
                money2 += dehl
                money4 -= dehl
                p4paid[1] = "paid"
            }
        }
        if (take[1] == "3"){
            if (player1 == 2 && p1paid[1] != "paid"){
                money1 -= dehl
                money3 += dehl
                p1paid[1] = "paid"
            }
            if (player2 == 2 && p2paid[1] != "paid"){
                money3 += dehl
                money2 -= dehl
                p2paid[1] = "paid"
            }
            if (player4 == 2 && p4paid[1] != "paid"){
                money3 += dehl
                money4 -= dehl
                p4paid[1] = "paid"
            }
        }
        if (take[1] == "4"){
            if (player1 == 2 && p1paid[1] != "paid"){
                money1 -= dehl
                money4 += dehl
                p1paid[1] = "paid"
            }
            if (player2 == 2 && p2paid[1] != "paid"){
                money4 += dehl
                money2 -= dehl
                p2paid[1] = "paid"
            }
            if (player4 == 2 && p4paid[1] != "paid"){
                money4 += dehl
                money3 -= dehl
                p4paid[1] = "paid"
            }
        }
    }
    function bangp(){
        if (take[2] == "1"){
            if (player2 == 3 && p2paid[2] != "paid"){
                money1 += bang
                money2 -= bang
                p2paid[2] = "paid"
            }
            if (player3 == 3 && p3paid[2] != "paid"){
                money1 += bang
                money3 -= bang
                p3paid[2] = "paid"
            }
            if (player4 == 3 && p4paid[2] != "paid"){
                money1 += bang
                money4 -= bang
                p4paid[2] = "paid"
            }
        }
        if (take[2] == "2"){
            if (player1 == 3 && p1paid[2] != "paid"){
                money1 -= bang
                money2 += bang
                p1paid[2] = "paid"
            }
            if (player3 == 3 && p3paid[2] != "paid"){
                money2 += bang
                money3 -= bang
                p3paid[2] = "paid"
            }
            if (player4 == 3 && p4paid[2] != "paid"){
                money2 += bang
                money4 -= bang
                p4paid[2] = "paid"
            }
        }
        if (take[2] == "3"){
            if (player1 == 3 && p1paid[2] != "paid"){
                money1 -= bang
                money3 += bang
                p1paid[2] = "paid"
            }
            if (player2 == 3 && p2paid[2] != "paid"){
                money3 += bang
                money2 -= bang
                p2paid[2] = "paid"
            }
            if (player4 == 3 && p4paid[2] != "paid"){
                money3 += bang
                money4 -= bang
                p4paid[2] = "paid"
            }
        }
        if (take[2] == "4"){
            if (player1 == 3 && p1paid[2] != "paid"){
                money1 -= bang
                money4 += bang
                p1paid[2] = "paid"
            }
            if (player2 == 3 && p2paid[2] != "paid"){
                money4 += bang
                money2 -= bang
                p2paid[2] = "paid"
            }
            if (player4 == 3 && p4paid[2] != "paid"){
                money4 += bang
                money3 -= bang
                p4paid[2] = "paid"
            }
        }
    }
    function harbp(){
        if (take[3] == "1"){
            if (player2 == 4 && p2paid[3] != "paid"){
                money1 += harb
                money2 -= harb
                p2paid[3] = "paid"
            }
            if (player3 == 4 && p3paid[3] != "paid"){
                money1 += harb
                money3 -= harb
                p3paid[3] = "paid"
            }
            if (player4 == 4 && p4paid[3] != "paid"){
                money1 += harb
                money4 -= harb
                p4paid[3] = "paid"
            }
        }
        if (take[3] == "2"){
            if (player1 == 4 && p1paid[3] != "paid"){
                money1 -= harb
                money2 += harb
                p1paid[3] = "paid"
            }
            if (player3 == 4 && p3paid[3] != "paid"){
                money2 += harb
                money3 -= harb
                p3paid[3] = "paid"
            }
            if (player4 == 4 && p4paid[3] != "paid"){
                money2 += harb
                money4 -= harb
                p4paid[3] = "paid"
            }
        }
        if (take[3] == "3"){
            if (player1 == 4 && p1paid[3] != "paid"){
                money1 -= harb
                money3 += harb
                p1paid[3] = "paid"
            }
            if (player2 == 4 && p2paid[3] != "paid"){
                money3 += harb
                money2 -= harb
                p2paid[3] = "paid"
            }
            if (player4 == 4 && p4paid[3] != "paid"){
                money3 += harb
                money4 -= harb
                p4paid[3] = "paid"
            }
        }
        if (take[3] == "4"){
            if (player1 == 4 && p1paid[3] != "paid"){
                money1 -= harb
                money4 += harb
                p1paid[3] = "paid"
            }
            if (player2 == 4 && p2paid[3] != "paid"){
                money4 += harb
                money2 -= harb
                p2paid[3] = "paid"
            }
            if (player4 == 4 && p4paid[3] != "paid"){
                money4 += harb
                money3 -= harb
                p4paid[3] = "paid"
            }
        }
    }
    function cairp(){
        if (take[4] == "1"){
            if (player2 == 5 && p2paid[4] != "paid"){
                money1 += cair
                money2 -= cair
                p2paid[4] = "paid"
            }
            if (player3 == 5 && p3paid[4] != "paid"){
                money1 += cair
                money3 -= cair
                p3paid[4] = "paid"
            }
            if (player4 == 5 && p4paid[4] != "paid"){
                money1 += cair
                money4 -= cair
                p4paid[4] = "paid"
            }
        }
        if (take[4] == "2"){
            if (player1 == 5 && p1paid[4] != "paid"){
                money1 -= cair
                money2 += cair
                p1paid[4] = "paid"
            }
            if (player3 == 5 && p3paid[4] != "paid"){
                money2 += cair
                money3 -= cair
                p3paid[4] = "paid"
            }
            if (player4 == 5 && p4paid[4] != "paid"){
                money2 += cair
                money4 -= cair
                p4paid[4] = "paid"
            }
        }
        if (take[4] == "3"){
            if (player1 == 5 && p1paid[4] != "paid"){
                money1 -= cair
                money3 += cair
                p1paid[4] = "paid"
            }
            if (player2 == 5 && p2paid[4] != "paid"){
                money3 += cair
                money2 -= cair
                p2paid[4] = "paid"
            }
            if (player4 == 5 && p4paid[4] != "paid"){
                money3 += cair
                money4 -= cair
                p4paid[4] = "paid"
            }
        }
        if (take[4] == "4"){
            if (player1 == 5 && p1paid[4] != "paid"){
                money1 -= cair
                money4 += cair
                p1paid[4] = "paid"
            }
            if (player2 == 5 && p2paid[4] != "paid"){
                money4 += cair
                money2 -= cair
                p2paid[4] = "paid"
            }
            if (player4 == 5 && p4paid[4] != "paid"){
                money4 += cair
                money3 -= cair
                p4paid[4] = "paid"
            }
        }
    }
    function madrp(){
        if (take[5] == "1"){
            if (player2 == 6 && p2paid[5] != "paid"){
                money1 += madr
                money2 -= madr
                p2paid[5] = "paid"
            }
            if (player3 == 6 && p3paid[5] != "paid"){
                money1 += madr
                money3 -= madr
                p3paid[5] = "paid"
            }
            if (player4 == 6 && p4paid[5] != "paid"){
                money1 += madr
                money4 -= madr
                p4paid[5] = "paid"
            }
        }
        if (take[5] == "2"){
            if (player1 == 6 && p1paid[5] != "paid"){
                money1 -= madr
                money2 += madr
                p1paid[5] = "paid"
            }
            if (player3 == 6 && p3paid[5] != "paid"){
                money2 += madr
                money3 -= madr
                p3paid[5] = "paid"
            }
            if (player4 == 6 && p4paid[5] != "paid"){
                money2 += madr
                money4 -= madr
                p4paid[5] = "paid"
            }
        }
        if (take[5] == "3"){
            if (player1 == 6 && p1paid[5] != "paid"){
                money1 -= madr
                money3 += madr
                p1paid[5] = "paid"
            }
            if (player2 == 6 && p2paid[5] != "paid"){
                money3 += madr
                money2 -= madr
                p2paid[5] = "paid"
            }
            if (player4 == 6 && p4paid[5] != "paid"){
                money3 += madr
                money4 -= madr
                p4paid[5] = "paid"
            }
        }
        if (take[5] == "4"){
            if (player1 == 6 && p1paid[5] != "paid"){
                money1 -= madr
                money4 += madr
                p1paid[5] = "paid"
            }
            if (player2 == 6 && p2paid[5] != "paid"){
                money4 += madr
                money2 -= madr
                p2paid[5] = "paid"
            }
            if (player4 == 6 && p4paid[5] != "paid"){
                money4 += madr
                money3 -= madr
                p4paid[5] = "paid"
            }
        }
    }
    function jakp(){
        if (take[7] == "1"){
            if (player2 == 8 && p2paid[7] != "paid"){
                money1 += jak
                money2 -= jak
                p2paid[7] = "paid"
            }
            if (player3 == 8 && p3paid[7] != "paid"){
                money1 += jak
                money3 -= jak
                p3paid[7] = "paid"
            }
            if (player4 == 8 && p4paid[7] != "paid"){
                money1 += jak
                money4 -= jak
                p4paid[7] = "paid"
            }
        }
        if (take[7] == "2"){
            if (player1 == 8 && p1paid[7] != "paid"){
                money1 -= jak
                money2 += jak
                p1paid[7] = "paid"
            }
            if (player3 == 8 && p3paid[7] != "paid"){
                money2 += jak
                money3 -= jak
                p3paid[7] = "paid"
            }
            if (player4 == 8 && p4paid[7] != "paid"){
                money2 += jak
                money4 -= jak
                p4paid[7] = "paid"
            }
        }
        if (take[7] == "3"){
            if (player1 == 8 && p1paid[7] != "paid"){
                money1 -= jak
                money3 += jak
                p1paid[7] = "paid"
            }
            if (player2 == 8 && p2paid[7] != "paid"){
                money3 += jak
                money2 -= jak
                p2paid[7] = "paid"
            }
            if (player4 == 8 && p4paid[7] != "paid"){
                money3 += jak
                money4 -= jak
                p4paid[7] = "paid"
            }
        }
        if (take[7] == "4"){
            if (player1 == 8 && p1paid[7] != "paid"){
                money1 -= jak
                money4 += jak
                p1paid[7] = "paid"
            }
            if (player2 == 8 && p2paid[7] != "paid"){
                money4 += jak
                money2 -= jak
                p2paid[7] = "paid"
            }
            if (player4 == 8 && p4paid[7] != "paid"){
                money4 += jak
                money3 -= jak
                p4paid[7] = "paid"
            }
        }
    }
    function berp(){
        if (take[8] == "1"){
            if (player2 == 9 && p2paid[8] != "paid"){
                money1 += ber
                money2 -= ber
                p2paid[8] = "paid"
            }
            if (player3 == 9 && p3paid[8] != "paid"){
                money1 += ber
                money3 -= ber
                p3paid[8] = "paid"
            }
            if (player4 == 9 && p4paid[8] != "paid"){
                money1 += ber
                money4 -= ber
                p4paid[8] = "paid"
            }
        }
        if (take[8] == "2"){
            if (player1 == 9 && p1paid[8] != "paid"){
                money1 -= ber
                money2 += ber
                p1paid[8] = "paid"
            }
            if (player3 == 9 && p3paid[8] != "paid"){
                money2 += ber
                money3 -= ber
                p3paid[8] = "paid"
            }
            if (player4 == 9 && p4paid[8] != "paid"){
                money2 += ber
                money4 -= ber
                p4paid[8] = "paid"
            }
        }
        if (take[8] == "3"){
            if (player1 == 9 && p1paid[8] != "paid"){
                money1 -= ber
                money3 += ber
                p1paid[8] = "paid"
            }
            if (player2 == 9 && p2paid[8] != "paid"){
                money3 += ber
                money2 -= ber
                p2paid[8] = "paid"
            }
            if (player4 == 9 && p4paid[8] != "paid"){
                money3 += ber
                money4 -= ber
                p4paid[8] = "paid"
            }
        }
        if (take[8] == "4"){
            if (player1 == 9 && p1paid[8] != "paid"){
                money1 -= ber
                money4 += ber
                p1paid[8] = "paid"
            }
            if (player2 == 9 && p2paid[8] != "paid"){
                money4 += ber
                money2 -= ber
                p2paid[8] = "paid"
            }
            if (player4 == 9 && p4paid[8] != "paid"){
                money4 += ber
                money3 -= ber
                p4paid[8] = "paid"
            }
        }
    }
    function mosp(){
        if (take[9] == "1"){
            if (player2 == 10 && p2paid[9] != "paid"){
                money1 += mos
                money2 -= mos
                p2paid[9] = "paid"
            }
            if (player3 == 10 && p3paid[9] != "paid"){
                money1 += mos
                money3 -= mos
                p3paid[9] = "paid"
            }
            if (player4 == 10 && p4paid[9] != "paid"){
                money1 += mos
                money4 -= mos
                p4paid[9] = "paid"
            }
        }
        if (take[9] == "2"){
            if (player1 == 10 && p1paid[9] != "paid"){
                money1 -= mos
                money2 += mos
                p1paid[9] = "paid"
            }
            if (player3 == 10 && p3paid[9] != "paid"){
                money2 += mos
                money3 -= mos
                p3paid[9] = "paid"
            }
            if (player4 == 10 && p4paid[9] != "paid"){
                money2 += mos
                money4 -= mos
                p4paid[9] = "paid"
            }
        }
        if (take[9] == "3"){
            if (player1 == 10 && p1paid[9] != "paid"){
                money1 -= mos
                money3 += mos
                p1paid[9] = "paid"
            }
            if (player2 == 10 && p2paid[9] != "paid"){
                money3 += mos
                money2 -= mos
                p2paid[9] = "paid"
            }
            if (player4 == 10 && p4paid[9] != "paid"){
                money3 += mos
                money4 -= mos
                p4paid[9] = "paid"
            }
        }
        if (take[9] == "4"){
            if (player1 == 10 && p1paid[9] != "paid"){
                money1 -= mos
                money4 += mos
                p1paid[9] = "paid"
            }
            if (player2 == 10 && p2paid[9] != "paid"){
                money4 += mos
                money2 -= mos
                p2paid[9] = "paid"
            }
            if (player4 == 10 && p4paid[9] != "paid"){
                money4 += mos
                money3 -= mos
                p4paid[9] = "paid"
            }
        }
    }
    function railp(){
        if (take[10] == "1"){
            if (player2 == 11 && p2paid[10] != "paid"){
                money1 += rail
                money2 -= rail
                p2paid[10] = "paid"
            }
            if (player3 == 11 && p3paid[10] != "paid"){
                money1 += rail
                money3 -= rail
                p3paid[10] = "paid"
            }
            if (player4 == 11 && p4paid[10] != "paid"){
                money1 += rail
                money4 -= rail
                p4paid[10] = "paid"
            }
        }
        if (take[10] == "2"){
            if (player1 == 11 && p1paid[10] != "paid"){
                money1 -= rail
                money2 += rail
                p1paid[10] = "paid"
            }
            if (player3 == 11 && p3paid[10] != "paid"){
                money2 += rail
                money3 -= rail
                p3paid[10] = "paid"
            }
            if (player4 == 11 && p4paid[10] != "paid"){
                money2 += rail
                money4 -= rail
                p4paid[10] = "paid"
            }
        }
        if (take[10] == "3"){
            if (player1 == 11 && p1paid[10] != "paid"){
                money1 -= rail
                money3 += rail
                p1paid[10] = "paid"
            }
            if (player2 == 11 && p2paid[10] != "paid"){
                money3 += rail
                money2 -= rail
                p2paid[10] = "paid"
            }
            if (player4 == 11 && p4paid[10] != "paid"){
                money3 += rail
                money4 -= rail
                p4paid[10] = "paid"
            }
        }
        if (take[10] == "4"){
            if (player1 == 11 && p1paid[10] != "paid"){
                money1 -= rail
                money4 += rail
                p1paid[10] = "paid"
            }
            if (player2 == 11 && p2paid[10] != "paid"){
                money4 += rail
                money2 -= rail
                p2paid[10] = "paid"
            }
            if (player4 == 11 && p4paid[10] != "paid"){
                money4 += rail
                money3 -= rail
                p4paid[10] = "paid"
            }
        }
    }
    function torop(){
        if (take[11] == "1"){
            if (player2 == 12 && p2paid[11] != "paid"){
                money1 += toro
                money2 -= toro
                p2paid[11] = "paid"
            }
            if (player3 == 12 && p3paid[11] != "paid"){
                money1 += toro
                money3 -= toro
                p3paid[11] = "paid"
            }
            if (player4 == 12 && p4paid[11] != "paid"){
                money1 += toro
                money4 -= toro
                p4paid[11] = "paid"
            }
        }
        if (take[11] == "2"){
            if (player1 == 12 && p1paid[11] != "paid"){
                money1 -= toro
                money2 += toro
                p1paid[11] = "paid"
            }
            if (player3 == 12 && p3paid[11] != "paid"){
                money2 += toro
                money3 -= toro
                p3paid[11] = "paid"
            }
            if (player4 == 12 && p4paid[11] != "paid"){
                money2 += toro
                money4 -= toro
                p4paid[11] = "paid"
            }
        }
        if (take[11] == "3"){
            if (player1 == 12 && p1paid[11] != "paid"){
                money1 -= toro
                money3 += toro
                p1paid[11] = "paid"
            }
            if (player2 == 12 && p2paid[11] != "paid"){
                money3 += toro
                money2 -= toro
                p2paid[11] = "paid"
            }
            if (player4 == 12 && p4paid[11] != "paid"){
                money3 += toro
                money4 -= toro
                p4paid[11] = "paid"
            }
        }
        if (take[11] == "4"){
            if (player1 == 12 && p1paid[11] != "paid"){
                money1 -= toro
                money4 += toro
                p1paid[11] = "paid"
            }
            if (player2 == 12 && p2paid[11] != "paid"){
                money4 += toro
                money2 -= toro
                p2paid[11] = "paid"
            }
            if (player4 == 12 && p4paid[11] != "paid"){
                money4 += toro
                money3 -= toro
                p4paid[11] = "paid"
            }
        }
    }
    function selp(){
        if (take[12] == "1"){
            if (player2 == 13 && p2paid[12] != "paid"){
                money1 += sel
                money2 -= sel
                p2paid[12] = "paid"
            }
            if (player3 == 13 && p3paid[12] != "paid"){
                money1 += sel
                money3 -= sel
                p3paid[12] = "paid"
            }
            if (player4 == 13 && p4paid[12] != "paid"){
                money1 += sel
                money4 -= sel
                p4paid[12] = "paid"
            }
        }
        if (take[12] == "2"){
            if (player1 == 13 && p1paid[12] != "paid"){
                money1 -= sel
                money2 += sel
                p1paid[12] = "paid"
            }
            if (player3 == 13 && p3paid[12] != "paid"){
                money2 += sel
                money3 -= sel
                p3paid[12] = "paid"
            }
            if (player4 == 13 && p4paid[12] != "paid"){
                money2 += sel
                money4 -= sel
                p4paid[12] = "paid"
            }
        }
        if (take[12] == "3"){
            if (player1 == 13 && p1paid[12] != "paid"){
                money1 -= sel
                money3 += sel
                p1paid[12] = "paid"
            }
            if (player2 == 13 && p2paid[12] != "paid"){
                money3 += sel
                money2 -= sel
                p2paid[12] = "paid"
            }
            if (player4 == 13 && p4paid[12] != "paid"){
                money3 += sel
                money4 -= sel
                p4paid[12] = "paid"
            }
        }
        if (take[12] == "4"){
            if (player1 == 13 && p1paid[12] != "paid"){
                money1 -= sel
                money4 += sel
                p1paid[12] = "paid"
            }
            if (player2 == 13 && p2paid[12] != "paid"){
                money4 += sel
                money2 -= sel
                p2paid[12] = "paid"
            }
            if (player4 == 13 && p4paid[12] != "paid"){
                money4 += sel
                money3 -= sel
                p4paid[12] = "paid"
            }
        }
    }
    function zerp(){
        if (take[13] == "1"){
            if (player2 == 15 && p2paid[13] != "paid"){
                money1 += zer
                money2 -= zer
                p2paid[13] = "paid"
            }
            if (player3 == 15 && p3paid[13] != "paid"){
                money1 += zer
                money3 -= zer
                p3paid[13] = "paid"
            }
            if (player4 == 15 && p4paid[12] != "paid"){
                money1 += zer
                money4 -= zer
                p4paid[12] = "paid"
            }
        }
        if (take[13] == "2"){
            if (player1 == 15 && p1paid[13] != "paid"){
                money1 -= zer
                money2 += zer
                p1paid[13] = "paid"
            }
            if (player3 == 15 && p3paid[13] != "paid"){
                money2 += zer
                money3 -= zer
                p3paid[13] = "paid"
            }
            if (player4 == 15 && p4paid[13] != "paid"){
                money2 += zer
                money4 -= zer
                p4paid[13] = "paid"
            }
        }
        if (take[13] == "3"){
            if (player1 == 15 && p1paid[13] != "paid"){
                money1 -= zer
                money3 += zer
                p1paid[13] = "paid"
            }
            if (player2 == 15 && p2paid[13] != "paid"){
                money3 += zer
                money2 -= zer
                p2paid[13] = "paid"
            }
            if (player4 == 15 && p4paid[13] != "paid"){
                money3 += zer
                money4 -= zer
                p4paid[13] = "paid"
            }
        }
        if (take[13] == "4"){
            if (player1 == 15 && p1paid[13] != "paid"){
                money1 -= zer
                money4 += zer
                p1paid[13] = "paid"
            }
            if (player2 == 15 && p2paid[13] != "paid"){
                money4 += zer
                money2 -= zer
                p2paid[13] = "paid"
            }
            if (player4 == 15 && p4paid[13] != "paid"){
                money4 += zer
                money3 -= zer
                p4paid[13] = "paid"
            }
        }
    }
    function riyp(){
        if (take[14] == "1"){
            if (player2 == 16 && p2paid[14] != "paid"){
                money1 += riy
                money2 -= riy
                p2paid[14] = "paid"
            }
            if (player3 == 16 && p3paid[14] != "paid"){
                money1 += riy
                money3 -= riy
                p3paid[14] = "paid"
            }
            if (player4 == 16 && p4paid[14] != "paid"){
                money1 += riy
                money4 -= riy
                p4paid[14] = "paid"
            }
        }
        if (take[14] == "2"){
            if (player1 == 16 && p1paid[14] != "paid"){
                money1 -= riy
                money2 += riy
                p1paid[14] = "paid"
            }
            if (player3 == 16 && p3paid[14] != "paid"){
                money2 += riy
                money3 -= riy
                p3paid[14] = "paid"
            }
            if (player4 == 16 && p4paid[14] != "paid"){
                money2 += riy
                money4 -= riy
                p4paid[14] = "paid"
            }
        }
        if (take[14] == "3"){
            if (player1 == 16 && p1paid[14] != "paid"){
                money1 -= riy
                money3 += riy
                p1paid[14] = "paid"
            }
            if (player2 == 16 && p2paid[14] != "paid"){
                money3 += riy
                money2 -= riy
                p2paid[14] = "paid"
            }
            if (player4 == 16 && p4paid[14] != "paid"){
                money3 += riy
                money4 -= riy
                p4paid[14] = "paid"
            }
        }
        if (take[14] == "4"){
            if (player1 == 16 && p1paid[14] != "paid"){
                money1 -= riy
                money4 += riy
                p1paid[14] = "paid"
            }
            if (player2 == 16 && p2paid[14] != "paid"){
                money4 += riy
                money2 -= riy
                p2paid[14] = "paid"
            }
            if (player4 == 16 && p4paid[14] != "paid"){
                money4 += riy
                money3 -= riy
                p4paid[14] = "paid"
            }
        }
    }
    function sydp(){
        if (take[15] == "1"){
            if (player2 == 17 && p2paid[15] != "paid"){
                money1 += syd
                money2 -= syd
                p2paid[15] = "paid"
            }
            if (player3 == 17 && p3paid[15] != "paid"){
                money1 += syd
                money3 -= syd
                p3paid[15] = "paid"
            }
            if (player4 == 17 && p4paid[15] != "paid"){
                money1 += syd
                money4 -= syd
                p4paid[15] = "paid"
            }
        }
        if (take[15] == "2"){
            if (player1 == 17 && p1paid[15] != "paid"){
                money1 -= syd
                money2 += syd
                p1paid[15] = "paid"
            }
            if (player3 == 17 && p3paid[15] != "paid"){
                money2 += syd
                money3 -= syd
                p3paid[15] = "paid"
            }
            if (player4 == 17 && p4paid[15] != "paid"){
                money2 += syd
                money4 -= syd
                p4paid[15] = "paid"
            }
        }
        if (take[15] == "3"){
            if (player1 == 17 && p1paid[15] != "paid"){
                money1 -= syd
                money3 += syd
                p1paid[15] = "paid"
            }
            if (player2 == 17 && p2paid[15] != "paid"){
                money3 += syd
                money2 -= syd
                p2paid[15] = "paid"
            }
            if (player4 == 17 && p4paid[15] != "paid"){
                money3 += syd
                money4 -= syd
                p4paid[15] = "paid"
            }
        }
        if (take[15] == "4"){
            if (player1 == 17 && p1paid[15] != "paid"){
                money1 -= syd
                money4 += syd
                p1paid[15] = "paid"
            }
            if (player2 == 17 && p2paid[15] != "paid"){
                money4 += syd
                money2 -= syd
                p2paid[15] = "paid"
            }
            if (player4 == 17 && p4paid[15] != "paid"){
                money4 += syd
                money3 -= syd
                p4paid[15] = "paid"
            }
        }
    }
    function elep(){
        if (take[16] == "1"){
            if (player2 == 18 && p2paid[16] != "paid"){
                money1 += ele
                money2 -= ele
                p2paid[16] = "paid"
            }
            if (player3 == 18 && p3paid[16] != "paid"){
                money1 += ele
                money3 -= ele
                p3paid[16] = "paid"
            }
            if (player4 == 18 && p4paid[16] != "paid"){
                money1 += ele
                money4 -= ele
                p4paid[16] = "paid"
            }
        }
        if (take[16] == "2"){
            if (player1 == 18 && p1paid[16] != "paid"){
                money1 -= ele
                money2 += ele
                p1paid[16] = "paid"
            }
            if (player3 == 18 && p3paid[16] != "paid"){
                money2 += ele
                money3 -= ele
                p3paid[16] = "paid"
            }
            if (player4 == 18 && p4paid[16] != "paid"){
                money2 += ele
                money4 -= ele
                p4paid[16] = "paid"
            }
        }
        if (take[16] == "3"){
            if (player1 == 18 && p1paid[16] != "paid"){
                money1 -= ele
                money3 += ele
                p1paid[16] = "paid"
            }
            if (player2 == 18 && p2paid[16] != "paid"){
                money3 += ele
                money2 -= ele
                p2paid[16] = "paid"
            }
            if (player4 == 18 && p4paid[16] != "paid"){
                money3 += ele
                money4 -= ele
                p4paid[16] = "paid"
            }
        }
        if (take[16] == "4"){
            if (player1 == 18 && p1paid[16] != "paid"){
                money1 -= ele
                money4 += ele
                p1paid[16] = "paid"
            }
            if (player2 == 18 && p2paid[16] != "paid"){
                money4 += ele
                money2 -= ele
                p2paid[16] = "paid"
            }
            if (player4 == 18 && p4paid[16] != "paid"){
                money4 += ele
                money3 -= ele
                p4paid[16] = "paid"
            }
        }
    }
    function beijp(){
        if (take[17] == "1"){
            if (player2 == 19 && p2paid[17] != "paid"){
                money1 += beij
                money2 -= beij
                p2paid[17] = "paid"
            }
            if (player3 == 19 && p3paid[17] != "paid"){
                money1 += beij
                money3 -= beij
                p3paid[17] = "paid"
            }
            if (player4 == 19 && p4paid[17] != "paid"){
                money1 += beij
                money4 -= beij
                p4paid[17] = "paid"
            }
        }
        if (take[17] == "2"){
            if (player1 == 19 && p1paid[17] != "paid"){
                money1 -= beij
                money2 += beij
                p1paid[17] = "paid"
            }
            if (player3 == 19 && p3paid[17] != "paid"){
                money2 += beij
                money3 -= beij
                p3paid[17] = "paid"
            }
            if (player4 == 19 && p4paid[17] != "paid"){
                money2 += beij
                money4 -= beij
                p4paid[17] = "paid"
            }
        }
        if (take[17] == "3"){
            if (player1 == 19 && p1paid[17] != "paid"){
                money1 -= beij
                money3 += beij
                p1paid[17] = "paid"
            }
            if (player2 == 19 && p2paid[17] != "paid"){
                money3 += beij
                money2 -= beij
                p2paid[17] = "paid"
            }
            if (player4 == 19 && p4paid[17] != "paid"){
                money3 += beij
                money4 -= beij
                p4paid[17] = "paid"
            }
        }
        if (take[17] == "4"){
            if (player1 == 19 && p1paid[17] != "paid"){
                money1 -= beij
                money4 += beij
                p1paid[17] = "paid"
            }
            if (player2 == 19 && p2paid[17] != "paid"){
                money4 += beij
                money2 -= beij
                p2paid[17] = "paid"
            }
            if (player4 == 19 && p4paid[17] != "paid"){
                money4 += beij
                money3 -= beij
                p4paid[17] = "paid"
            }
        }
    }
    function dubp(){
        if (take[18] == "1"){
            if (player2 == 20 && p2paid[18] != "paid"){
                money1 += dub
                money2 -= dub
                p2paid[18] = "paid"
            }
            if (player3 == 20 && p3paid[18] != "paid"){
                money1 += dub
                money3 -= dub
                p3paid[18] = "paid"
            }
            if (player4 == 20 && p4paid[18] != "paid"){
                money1 += dub
                money4 -= dub
                p4paid[18] = "paid"
            }
        }
        if (take[18] == "2"){
            if (player1 == 20 && p1paid[18] != "paid"){
                money1 -= dub
                money2 += dub
                p1paid[18] = "paid"
            }
            if (player3 == 20 && p3paid[18] != "paid"){
                money2 += dub
                money3 -= dub
                p3paid[18] = "paid"
            }
            if (player4 == 20 && p4paid[18] != "paid"){
                money2 += dub
                money4 -= dub
                p4paid[18] = "paid"
            }
        }
        if (take[18] == "3"){
            if (player1 == 20 && p1paid[18] != "paid"){
                money1 -= dub
                money3 += dub
                p1paid[18] = "paid"
            }
            if (player2 == 20 && p2paid[18] != "paid"){
                money3 += dub
                money2 -= dub
                p2paid[18] = "paid"
            }
            if (player4 == 20 && p4paid[18] != "paid"){
                money3 += dub
                money4 -= dub
                p4paid[18] = "paid"
            }
        }
        if (take[18] == "4"){
            if (player1 == 20 && p1paid[18] != "paid"){
                money1 -= dub
                money4 += dub
                p1paid[18] = "paid"
            }
            if (player2 == 20 && p2paid[18] != "paid"){
                money4 += dub
                money2 -= dub
                p2paid[18] = "paid"
            }
            if (player4 == 20 && p4paid[18] != "paid"){
                money4 += dub
                money3 -= dub
                p4paid[18] = "paid"
            }
        }
    }
    function parp(){
        if (take[20] == "1"){
            if (player2 == 22 && p2paid[20] != "paid"){
                money1 += par
                money2 -= par
                p2paid[20] = "paid"
            }
            if (player3 == 22 && p3paid[20] != "paid"){
                money1 += par
                money3 -= par
                p3paid[20] = "paid"
            }
            if (player4 == 22 && p4paid[20] != "paid"){
                money1 += par
                money4 -= par
                p4paid[20] = "paid"
            }
        }
        if (take[20] == "2"){
            if (player1 == 22 && p1paid[20] != "paid"){
                money1 -= par
                money2 += par
                p1paid[20] = "paid"
            }
            if (player3 == 22 && p3paid[20] != "paid"){
                money2 += par
                money3 -= par
                p3paid[20] = "paid"
            }
            if (player4 == 22 && p4paid[20] != "paid"){
                money2 += par
                money4 -= par
                p4paid[20] = "paid"
            }
        }
        if (take[20] == "3"){
            if (player1 == 22 && p1paid[20] != "paid"){
                money1 -= par
                money3 += par
                p1paid[20] = "paid"
            }
            if (player2 == 22 && p2paid[20] != "paid"){
                money3 += par
                money2 -= par
                p2paid[20] = "paid"
            }
            if (player4 == 22 && p4paid[20] != "paid"){
                money3 += par
                money4 -= par
                p4paid[20] = "paid"
            }
        }
        if (take[20] == "4"){
            if (player1 == 22 && p1paid[20] != "paid"){
                money1 -= par
                money4 += par
                p1paid[20] = "paid"
            }
            if (player2 == 22 && p2paid[20] != "paid"){
                money4 += par
                money2 -= par
                p2paid[20] = "paid"
            }
            if (player4 == 22 && p4paid[20] != "paid"){
                money4 += par
                money3 -= par
                p4paid[20] = "paid"
            }
        }
    }
    function hongp(){
        if (take[21] == "1"){
            if (player2 == 23 && p2paid[21] != "paid"){
                money1 += hong
                money2 -= hong
                p2paid[21] = "paid"
            }
            if (player3 == 23 && p3paid[21] != "paid"){
                money1 += hong
                money3 -= hong
                p3paid[21] = "paid"
            }
            if (player4 == 23 && p4paid[21] != "paid"){
                money1 += hong
                money4 -= hong
                p4paid[21] = "paid"
            }
        }
        if (take[21] == "2"){
            if (player1 == 23 && p1paid[21] != "paid"){
                money1 -= hong
                money2 += hong
                p1paid[21] = "paid"
            }
            if (player3 == 23 && p3paid[21] != "paid"){
                money2 += hong
                money3 -= hong
                p3paid[21] = "paid"
            }
            if (player4 == 23 && p4paid[21] != "paid"){
                money2 += hong
                money4 -= hong
                p4paid[21] = "paid"
            }
        }
        if (take[21] == "3"){
            if (player1 == 23 && p1paid[21] != "paid"){
                money1 -= hong
                money3 += hong
                p1paid[21] = "paid"
            }
            if (player2 == 23 && p2paid[21] != "paid"){
                money3 += hong
                money2 -= hong
                p2paid[21] = "paid"
            }
            if (player4 == 23 && p4paid[21] != "paid"){
                money3 += hong
                money4 -= hong
                p4paid[21] = "paid"
            }
        }
        if (take[21] == "4"){
            if (player1 == 23 && p1paid[21] != "paid"){
                money1 -= hong
                money4 += hong
                p1paid[21] = "paid"
            }
            if (player2 == 23 && p2paid[21] != "paid"){
                money4 += hong
                money2 -= hong
                p2paid[21] = "paid"
            }
            if (player4 == 23 && p4paid[21] != "paid"){
                money4 += hong
                money3 -= hong
                p4paid[21] = "paid"
            }
        }
    }
    function londp(){
        if (take[22] == "1"){
            if (player2 == 24 && p2paid[22] != "paid"){
                money1 += lond
                money2 -= lond
                p2paid[22] = "paid"
            }
            if (player3 == 24 && p3paid[22] != "paid"){
                money1 += lond
                money3 -= lond
                p3paid[22] = "paid"
            }
            if (player4 == 24 && p4paid[22] != "paid"){
                money1 += lond
                money4 -= lond
                p4paid[22] = "paid"
            }
        }
        if (take[22] == "2"){
            if (player1 == 24 && p1paid[22] != "paid"){
                money1 -= lond
                money2 += lond
                p1paid[22] = "paid"
            }
            if (player3 == 24 && p3paid[22] != "paid"){
                money2 += lond
                money3 -= lond
                p3paid[22] = "paid"
            }
            if (player4 == 24 && p4paid[22] != "paid"){
                money2 += lond
                money4 -= lond
                p4paid[22] = "paid"
            }
        }
        if (take[22] == "3"){
            if (player1 == 24 && p1paid[22] != "paid"){
                money1 -= lond
                money3 += lond
                p1paid[22] = "paid"
            }
            if (player2 == 24 && p2paid[22] != "paid"){
                money3 += lond
                money2 -= lond
                p2paid[22] = "paid"
            }
            if (player4 == 24 && p4paid[22] != "paid"){
                money3 += lond
                money4 -= lond
                p4paid[22] = "paid"
            }
        }
        if (take[22] == "4"){
            if (player1 == 24 && p1paid[22] != "paid"){
                money1 -= lond
                money4 += lond
                p1paid[22] = "paid"
            }
            if (player2 == 24 && p2paid[22] != "paid"){
                money4 += lond
                money2 -= lond
                p2paid[22] = "paid"
            }
            if (player4 == 24 && p4paid[22] != "paid"){
                money4 += lond
                money3 -= lond
                p4paid[22] = "paid"
            }
        }
    }
    function airp(){
        if (take[23] == "1"){
            if (player2 == 25 && p2paid[23] != "paid"){
                money1 += air
                money2 -= air
                p2paid[23] = "paid"
            }
            if (player3 == 25 && p3paid[23] != "paid"){
                money1 += air
                money3 -= air
                p3paid[23] = "paid"
            }
            if (player4 == 25 && p4paid[23] != "paid"){
                money1 += air
                money4 -= air
                p4paid[23] = "paid"
            }
        }
        if (take[23] == "2"){
            if (player1 == 25 && p1paid[23] != "paid"){
                money1 -= air
                money2 += air
                p1paid[23] = "paid"
            }
            if (player3 == 25 && p3paid[23] != "paid"){
                money2 += air
                money3 -= air
                p3paid[23] = "paid"
            }
            if (player4 == 25 && p4paid[23] != "paid"){
                money2 += air
                money4 -= air
                p4paid[23] = "paid"
            }
        }
        if (take[23] == "3"){
            if (player1 == 25 && p1paid[23] != "paid"){
                money1 -= air
                money3 += air
                p1paid[23] = "paid"
            }
            if (player2 == 25 && p2paid[23] != "paid"){
                money3 += air
                money2 -= air
                p2paid[23] = "paid"
            }
            if (player4 == 25 && p4paid[23] != "paid"){
                money3 += air
                money4 -= air
                p4paid[23] = "paid"
            }
        }
        if (take[23] == "4"){
            if (player1 == 25 && p1paid[23] != "paid"){
                money1 -= air
                money4 += air
                p1paid[23] = "paid"
            }
            if (player2 == 25 && p2paid[23] != "paid"){
                money4 += air
                money2 -= air
                p2paid[23] = "paid"
            }
            if (player4 == 25 && p4paid[23] != "paid"){
                money4 += air
                money3 -= air
                p4paid[23] = "paid"
            }
        }
    }
    function tokp(){
        if (take[24] == "1"){
            if (player2 == 26 && p2paid[24] != "paid"){
                money1 += tok
                money2 -= tok
                p2paid[24] = "paid"
            }
            if (player3 == 26 && p3paid[24] != "paid"){
                money1 += tok
                money3 -= tok
                p3paid[24] = "paid"
            }
            if (player4 == 26 && p4paid[24] != "paid"){
                money1 += tok
                money4 -= tok
                p4paid[24] = "paid"
            }
        }
        if (take[24] == "2"){
            if (player1 == 26 && p1paid[24] != "paid"){
                money1 -= tok
                money2 += tok
                p1paid[24] = "paid"
            }
            if (player3 == 26 && p3paid[24] != "paid"){
                money2 += tok
                money3 -= tok
                p3paid[24] = "paid"
            }
            if (player4 == 26 && p4paid[24] != "paid"){
                money2 += tok
                money4 -= tok
                p4paid[24] = "paid"
            }
        }
        if (take[24] == "3"){
            if (player1 == 26 && p1paid[24] != "paid"){
                money1 -= tok
                money3 += tok
                p1paid[24] = "paid"
            }
            if (player2 == 26 && p2paid[24] != "paid"){
                money3 += tok
                money2 -= tok
                p2paid[24] = "paid"
            }
            if (player4 == 26 && p4paid[24] != "paid"){
                money3 += tok
                money4 -= tok
                p4paid[24] = "paid"
            }
        }
        if (take[24] == "4"){
            if (player1 == 26 && p1paid[24] != "paid"){
                money1 -= tok
                money4 += tok
                p1paid[24] = "paid"
            }
            if (player2 == 26 && p2paid[24] != "paid"){
                money4 += tok
                money2 -= tok
                p2paid[24] = "paid"
            }
            if (player4 == 26 && p4paid[24] != "paid"){
                money4 += tok
                money3 -= tok
                p4paid[24] = "paid"
            }
        }
    }
    function nyp(){
        if (take[25] == "1"){
            if (player2 == 27 && p2paid[25] != "paid"){
                money1 += ny
                money2 -= ny
                p2paid[25] = "paid"
            }
            if (player3 == 27 && p3paid[25] != "paid"){
                money1 += ny
                money3 -= ny
                p3paid[25] = "paid"
            }
            if (player4 == 27 && p4paid[25] != "paid"){
                money1 += ny
                money4 -= ny
                p4paid[25] = "paid"
            }
        }
        if (take[25] == "2"){
            if (player1 == 27 && p1paid[25] != "paid"){
                money1 -= ny
                money2 += ny
                p1paid[25] = "paid"
            }
            if (player3 == 27 && p3paid[25] != "paid"){
                money2 += ny
                money3 -= ny
                p3paid[25] = "paid"
            }
            if (player4 == 27 && p4paid[25] != "paid"){
                money2 += ny
                money4 -= ny
                p4paid[25] = "paid"
            }
        }
        if (take[25] == "3"){
            if (player1 == 27 && p1paid[25] != "paid"){
                money1 -= ny
                money3 += ny
                p1paid[25] = "paid"
            }
            if (player2 == 27 && p2paid[25] != "paid"){
                money3 += ny
                money2 -= ny
                p2paid[25] = "paid"
            }
            if (player4 == 27 && p4paid[25] != "paid"){
                money3 += ny
                money4 -= ny
                p4paid[25] = "paid"
            }
        }
        if (take[25] == "4"){
            if (player1 == 27 && p1paid[25] != "paid"){
                money1 -= ny
                money4 += ny
                p1paid[25] = "paid"
            }
            if (player2 == 27 && p2paid[25] != "paid"){
                money4 += ny
                money2 -= ny
                p2paid[25] = "paid"
            }
            if (player4 == 27 && p4paid[25] != "paid"){
                money4 += ny
                money3 -= ny
                p4paid[25] = "paid"
            }
        }
    }

    function blabla(){
        const element = document.getElementById("test")
        element.classList.remove("board")
    }
    