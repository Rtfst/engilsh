let lnkes = [
    'imge/boy.jpg', // boy taked
    'imge/cabinet.jpg',//cabnet taked
    'imge/chair.jpg',//chair taked
    'imge/doctor.avif',//doctor
    'imge/tree.jpg',// tree
    'imge/uinecorn.avif',//uncorn
     'imge/uniform.jpg' ,//uniform
     'imge/vuliture.jpg',//vuliture
     'imge/wall.jpg',// wall
     'imge/wex.webp',// wex
     'imge/window.jpg',// window
     'imge/hand.avif',// hand
     'imge/hippo.jpg',// hippo
     'imge/key.jpg',//  key
     'imge/lips.jpg', // lips
     'imge/man.jpg',// man
     'imge/map.png', // map
     'imge/octopus.jpg',// octopus   
     'imge/ostrich.jpg',// ostrich
     'imge/pet.webp', // pet
     'imge/police offcer.jpg', // police officer
     'imge/silent.jpg', // silent
     'imge/student.jpg', // student
     'imge/teacher.jpg', // teacher
     'imge/woman.jpg', // woman
    'imge/zebra.jpg', // zebra 
    'imge/goat.webp',// goat
    'imge/girl.jpg', // girl
    'imge/gas.jpg', // gas
    'imge/egg.jpg',// egg
    'imge/engineer.jpg', // engineer
    'imge/duck.avif', // duck
    'imge/flower.jpg',// flower
    'imge/floor.jpg', // floor
    'imge/fix.jpg', // fix
    'imge/book.jpg',// book
    'imge/baby.jpg', // baby
]

let main = document.getElementById('main');
let ans1 = document.querySelector('.answer1');
let ans2 = document.querySelector('.answer2');
let ans3 = document.querySelector('.answer3');
let win = 'Romany'; 
let randomURL = Math.floor(Math.random()* lnkes.length);
main.src = lnkes[randomURL];
function showAnswer(){
    if(randomURL === 0){
        ans1.innerHTML = 'boy';
        ans2.innerHTML = 'girl';
        ans3.innerHTML = 'man';
        ans1.classList.add('winer');
        ans2.classList.add('losser');
        ans3.classList.add('losser');
    }
    if(randomURL === 1){
        ans1.innerHTML = 'chair';
        ans2.innerHTML = 'cabnet';
        ans3.innerHTML = 'table';
        ans1.classList.add('losser');
        ans2.classList.add('winer');
        ans3.classList.add('losser');
    }
    if(randomURL === 2){
        ans1.innerHTML = 'chair';
        ans2.innerHTML = 'floor';
        ans3.innerHTML = 'celing';
        ans1.classList.add('winer');
        ans2.classList.add('losser');
        ans3.classList.add('losser'); 
    }
    if(randomURL === 3){
       ans1.innerHTML = 'engineer';
       ans2.innerHTML = 'teachr';
       ans3.innerHTML= 'doctor';
       ans1.classList.add('losser');
       ans2.classList.add('losser');
       ans3.classList.add('winer'); 
    }
    if(randomURL === 4){
        ans1.innerHTML = 'book';
        ans2.innerHTML = 'tree';
        ans3.innerHTML = 'black';
        ans1.classList.add('losser');
        ans2.classList.add('winer');
        ans3.classList.add('losser');
    }
    if(randomURL=== 5){
        ans1.innerHTML = 'uncorn';
        ans2.innerHTML = 'hourse';
        ans3.innerHTML = 'zebra';
        ans1.classList.add('winer');
        ans2.classList.add('losser');
        ans3.classList.add('losser'); 
    }
    if(randomURL === 6){
        ans1.innerHTML = 'call';
        ans2.innerHTML = 'uncorn';
        ans3.innerHTML = 'unform';
        ans1.classList.add('losser');
        ans2.classList.add('losser');
        ans3.classList.add('winer');
    }
    if(randomURL === 7){
        ans1.innerHTML = 'vuliture';
        ans2.innerHTML = 'bard';
        ans3.innerHTML = 'bread';
        ans1.classList.add('winer');
        ans2.classList.add('losser');
        ans3.classList.add('losser');
    }
    if(randomURL === 8){
     ans1.innerHTML= 'cealing';
     ans2.innerHTML = 'floor';
     ans3.innerHTML = 'wall';
     ans1.classList.add('losser');
     ans2.classList.add('losser');
     ans3.classList.add('winer');
    }
    if(randomURL === 9){
        ans1.innerHTML = 'fit' ;    
        ans2.innerHTML = 'wex' ;    
        ans3.innerHTML = 'fix' ;    
        ans1.classList.add('losser');
        ans2.classList.add('winer');
        ans3.classList.add('losser');
    }
    if(randomURL === 10){
        ans1.innerHTML = 'gas';
        ans2.innerHTML = 'window';
        ans3.innerHTML = 'wall';
        ans1.classList.add('losser');
        ans2.classList.add('winer');
        ans3.classList.add('losser');
    }
     if(randomURL=== 11){
         ans1.innerHTML = 'hand';
         ans2.innerHTML = 'foot';
         ans3.innerHTML = 'leg';
         ans1.classList.add('winer');
         ans2.classList.add('losser');
         ans3.classList.add('losser');
     }
     if(randomURL === 12){
     ans1.innerHTML = 'hippo';
     ans2.innerHTML = 'zebra';
     ans3.innerHTML = 'octpus';
     ans1.classList.add('winer');
     ans2.classList.add('losser');
     ans3.classList.add('losser');
     }
     if(randomURL === 13){
         ans1.innerHTML = 'door';
         ans2.innerHTML = 'port';
         ans3.innerHTML ='key';
         ans1.classList.add('losser');
         ans2.classList.add('losser');
         ans3.classList.add('winer');
     }
     if(randomURL === 14){
         ans1.innerHTML = 'lips';
         ans2.innerHTML = 'tousth';
         ans3.innerHTML = 'face';
         ans1.classList.add('winer');
         ans2.classList.add('losser');
         ans3.classList.add('losser');
     }
     if(randomURL === 15){
         ans1.innerHTML = 'parson';
         ans2.innerHTML = 'man';
         ans3.innerHTML= 'women';
         ans1.classList.add('losser');
         ans2.classList.add('winer');
         ans3.classList.add('losser');
     }
     if(randomURL === 16){
        ans1.innerHTML = 'mop'
        ans2.innerHTML = 'man';
        ans3.innerHTML = 'map';
        ans1.classList.add('losser');
        ans2.classList.add('losser');
        ans3.classList.add('winer'); 
     }
     if(randomURL === 17){
         ans1.innerHTML = 'octpus';
         ans2.innerHTML = 'outcode';
         ans3.innerHTML = 'ppotes';
         ans1.classList.add('winer');
         ans2.classList.add('losser');
         ans3.classList.add('losser');
     }
     if(randomURL === 18){
         ans1.innerHTML = 'octpus';
         ans2.innerHTML = 'ostrich';
         ans3.innerHTML = 'strich';
         ans1.classList.add('losser');
         ans2.classList.add('winer');
         ans3.classList.add('losser');
     }
     if(randomURL === 19){
         ans1.innerHTML = 'kit';
         ans2.innerHTML = 'bit';
         ans3.innerHTML = 'pit';
         ans1.classList.add('losser');
         ans2.classList.add('losser');
         ans3.classList.add('winer');   
     }
     if(randomURL === 20){
         ans1.innerHTML = 'police offcer';
         ans2.innerHTML = 'fireman';
         ans3.innerHTML = 'profe';
         ans1.classList.add('winer');
         ans2.classList.add('losser');
         ans3.classList.add('losser');
     }
     if(randomURL === 21){
         ans1.innerHTML = 'student';
         ans2.innerHTML = 'teacher';
         ans3.innerHTML = 'silent';
         ans1.classList.add('losser');
         ans2.classList.add('losser');
         ans3.classList.add('winer');
     }
     if(randomURL === 22){
         ans1.innerHTML = 'baby';
         ans2.innerHTML = 'student';
         ans3.innerHTML = 'wall';
         ans1.classList.add('losser');
         ans2.classList.add('winer');
         ans3.classList.add('losser');
     }
     if(randomURL === 23){
         ans1.innerHTML = ' teacher';
         ans2.innerHTML = 'uniform';
         ans3.innerHTML = 'octopus';
         ans1.classList.add('winer');
         ans2.classList.add('losser');
         ans3.classList.add('losser');
     }
     if(randomURL === 24){
         ans1.innerHTML = 'hippo';
         ans2.innerHTML = 'cabnet';
         ans3.innerHTML = 'woman' ;
         ans1.classList.add('losser');
         ans2.classList.add('losser');
         ans3.classList.add('winer');  
     }
     if(randomURL === 25){
         ans1.innerHTML = 'zebra';
         ans2.innerHTML = 'uniform';
         ans3.innerHTML = 'wall';
     }
     if(randomURL === 26){
         ans1.innerHTML = ' goat';
         ans2.innerHTML = 'vuliture';
         ans3.innerHTML = 'floor';
         ans1.classList.add('winer');
         ans2.classList.add('losser');
         ans3.classList.add('losser');
     }
     if(randomURL === 27){
         ans1.innerHTML = 'gas';
         ans2.innerHTML = 'girl';
         ans3.innerHTML = 'engineer';
         ans1.classList.add('losser');
         ans2.classList.add('winer');
         ans3.classList.add('losser')
     }
     if(randomURL === 28){
         ans1.innerHTML = 'floor';
         ans2.innerHTML = 'window';
         ans3.innerHTML = 'gas';
        ans1.classList.add('losser');
        ans2.classList.add('losser');
        ans3.classList.add('winer');
        }
        if(randomURL === 29){
            ans1.innerHTML = ' egg';
            ans2.innerHTML = 'hand';
            ans3.innerHTML = 'hippo';
            ans1.classList.add('winer');
            ans2.classList.add('losser');
            ans3.classList.add('lossrt');
        }
        if(randomURL === 30){
            ans1.innerHTML = 'engineer';
            ans2.innerHTML = 'book';
            ans3.innerHTML = 'egg';
            ans1.classList.add('winer');
            ans2.classList.add('losser');
            ans3.classList.add('losse')
        }
         if(randomURL === 31){
             ans1.innerHTML = 'ostrich';
             ans2.innerHTML = 'doctor';
             ans3.innerHTML = 'duck';
             ans1.classList.add('losser');
             ans2.classList.add('losser');
            ans3.classList.add('winer')
         }  
         if(randomURL === 32){
             ans1.innerHTML = 'floor';
             ans2.innerHTML = 'flower';
             ans3.innerHTML = 'foot';
             ans1.classList.add('losser');
             ans2.classList.add('winer');
             ans3.classList.add('losser');
         }
         if(randomURL === 33){
             ans1.innerHTML = 'fix';
             ans2.innerHTML = 'flower';
             ans3.innerHTML = ' floor';
             ans1.classList.add('losser');
             ans2.classList.add('losser');
            ans3.classList.add('winer');
            }
            if(randomURL === 34){
                ans1.innerHTML = 'fit';
                ans2.innerHTML = 'fix';
                ans3.innerHTML = 'pet';
                ans1.classList.add('losser');
                ans2.classList.add('winer');
                ans3.classList.add('losser');
            }
            if(randomURL === 35){
                ans1.innerHTML = ' book';
                ans2.innerHTML = ' baby';
                ans3.innerHTML = 'bed';
                ans1.classList.add('winer');
                ans2.classList.add('losser');
                ans3.classList.add('losser');
            }
            if(randomURL === 36){
                ans1.innerHTML = 'baby';
                ans2.innerHTML = 'duck';
                ans3.innerHTML = ' book';
                ans1.classList.add('winer');
                ans2.classList.add('losser');
                ans3.classList.add('losser');
            }
}
showAnswer();
function rightAnswer(){
    let los = document.querySelectorAll('.losser');
    showAnswer();
    let winer = document.querySelector('.winer');
    winer.onclick = () =>{
        document.getElementById('win').play();
        winer.classList.add('clicked');
        los[0].classList.add('los');
        los[1].classList.add('los');
        }
}
function wrongAnswer(){
    showAnswer();
    let winer = document.querySelector('.winer');
    let los = document.querySelectorAll('.losser');
    los[0].onclick = ()=>{
        winer.classList.add('clicked');
        los[0].classList.add('los');
        los[1].classList.add('los');
        document.getElementById('loss').play();
    }
    los[1].onclick = ()=>{
        winer.classList.add('clicked');
        los[0].classList.add('los');
        los[1].classList.add('los');
        document.getElementById('loss').play();
    }

}
wrongAnswer();
rightAnswer();