function toggleMode(){
  const html = document.documentElement


  /* Uma Maneira de se fazer:

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }  
  Mas que a mais simplificada:::*/ 

  html.classList.toggle('light')

  // Pegar a tag img
  // se tiver light mode = add img light
  // caso sem light mode = manter img

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  }else {
    img.setAttribute('src', './assets/avatar.png')
  }
}