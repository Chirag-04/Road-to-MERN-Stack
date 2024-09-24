const randomNumberGenerator = () =>{
    return Math.floor(Math.random()*100);
}
const dollarToInr = (dollar) =>{
    return dollar*83.48;
}
module.exports =  {randomNumberGenerator , dollarToInr};