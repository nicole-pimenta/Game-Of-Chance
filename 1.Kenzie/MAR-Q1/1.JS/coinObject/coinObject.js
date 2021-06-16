
        //ESCOPO GLOBAL
const getRandom =(min, max) => Math.floor(Math.random() * (max - min) + min)-1  
const div = document.createElement("div") 
const divImage = document.createElement("div") 

const coin = {
    state: 0,

    flip() { 
     this.state = getRandom(1,3)
     return this.state
    }, 
    
    toString() {
      if(this.state === 0){
          return "Heads"
        } 
    return "Tails"
    }, 
    toHTML() {
        const image = document.createElement("img");
        if(this.state === 0){
            image.src="/img/cara.png"
            image.alt="Head"
            return image
        } 
        if (this.state === 1){
            image.src="/img/coroa.png"
            image.alt="Tail"
            return image
        }
    }
}   


function display20Flips() {
  const results = [];
    for(let i=0; i < 20; i++ ) {                // Use um loop para arremessar a moeda 20 vezes.
        results[i] = coin.flip()  
    } 
    div.innerHTML=`Display20Flips : ${results.toString()} <br> Last flip : ${results[results.length-1].toString()}  ${coin.toString()}` 
    document.body.appendChild(div) 
    return results
  }
display20Flips()
  
function display20Images() {
  const results = [];
    for(let i=0; i < 20; i++ ) {
        results[i] = coin.flip()
    } 
    divImage.innerHTML=`Display20Images : ${results.toString()} <br> Last flip: ${coin.toString()} <br> ` 
    divImage.className="divImage"
    let img = coin.toHTML()
    divImage.appendChild(img)
    document.body.appendChild(divImage) 
    return results
  } 

display20Images()



