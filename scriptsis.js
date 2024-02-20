function verificar() {
    let cha = document.getElementsByName('sino')
      let mod = document.getElementsByName('radmod')
      let imga = document.querySelector('.slider')
      let imgf = document.querySelector('.iphone')
  if(mod[0].checked && imga.style.display === "none"){      
      imga.style.display = "block"
  }else{
      imga.style.display = "none"
  }
  if(mod[1].checked && imgf.style.display === "none"){
      imgf.style.display = "block"
  }else{
      imgf.style.display ="none"
  }
  }
  // função de slide automático para os 2 modelos
  let counta = 1
  document.getElementById("radio1").checked = true;
  
          setInterval(function(){
              nextImage();
          },7000)
  
          function nextImage(){
              counta++;
              if(counta>5){
                  counta = 1;
              }
              document.getElementById('radio'+counta).checked = true;
          }
          let counti = 1
  document.getElementById("radioi1").checked = true;
  
          setInterval(function(){
              nextImagei();
          },7000)
  
          function nextImagei(){
              counti++;
              if(counti>5){
                  counti = 1;
              }
              document.getElementById('radioi'+counti).checked = true;
          }