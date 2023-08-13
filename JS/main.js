// ----------------------------------------------------------
//                          Team
// ----------------------------------------------------------

let listTeam = document.querySelectorAll('.team li');
let cards = document.querySelectorAll('.team .parent-card');

// console.log(listTeam);

listTeam.forEach(e => {
    e.addEventListener('click', () =>{
        listTeam.forEach(event =>{
            event.classList.remove('general-btn');
        })
        e.classList.add('general-btn');
        
        switch(e.textContent){
            case 'Newst':
                cards[2].classList.add('active-user');
                cards[3].classList.add('active-user');
                cards[0].classList.remove('active-user');
                cards[1].classList.remove('active-user');
                break;
                
            case 'Popular':
                cards[2].classList.remove('active-user');
                cards[3].classList.remove('active-user');
                cards[0].classList.add('active-user');
                cards[1].classList.add('active-user');
                break;

            default: 
            cards.forEach(e =>{
                e.classList.remove('active-user');
            })
        }
    })
})

// ----------------------------------------------------------
//                          
// ----------------------------------------------------------
