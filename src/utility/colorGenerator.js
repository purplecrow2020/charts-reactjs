 
 
 
 const colorGenerator =()=>{
    let r= Math.floor(Math.random() * 256);          // Random between 0-255
    let g= Math.floor(Math.random() * 256);          // Random between 0-255
    let b = Math.floor(Math.random() * 256);          // Random between 0-255
    let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
    return rgb;
 }

 export default colorGenerator;