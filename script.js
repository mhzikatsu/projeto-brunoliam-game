function togglemode() {
const html = document.documentElement

html.classList.toggle('light')    
///if (html.classList.contains('light')) 
   /// html.classList.remove('light')
/// else 
   /// html.classList.add('light')
const img = document.querySelector('#box-1')

if (html.classList.contains('light'))
    {
    img.setAttribute('src','./assets/lima.png')
} else {
    img.setAttribute('src', './assets/Brunogomes.jpg')
}

}