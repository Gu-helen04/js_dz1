const img = document.getElementById('cookie')
const AllClick = document.getElementById('clicker__counter')
const click_rate = document.getElementById('click_rate')
let lastClick = new Date().getTime()
    lastClick = lastClick / 1000;
let Timer =  new Date().getTime()   
    Timer = Timer / 1000
img.onclick = () => {
    AllClick.textContent = Number(AllClick.textContent)+1
    let NewClick = new Date().getTime()
    NewClick = NewClick / 1000;
    if ((NewClick - lastClick) < 2){
        let click_rate_new = (Number(AllClick.textContent) /( NewClick - Timer))
        click_rate.textContent = click_rate_new.toFixed(2)
        lastClick = NewClick
    if (Number(AllClick.textContent) % 2 === 0)
    {   img.width +=20
        img.height +=20
    } 
    else {
        img.width -=20
        img.height -=20
    }

}
else {
    AllClick.textContent = 0
    click_rate.textContent = 0
    lastClick = NewClick
    Timer = NewClick
    img.width = 200
    img.height = 115
    
} 
}
