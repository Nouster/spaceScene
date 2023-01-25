// let configElement = {id:"e1", image:"./images/astre1.png", posX:100, posY:100, echelle: 0.7, type:"astre"};
let configElements = [
    {id:"e1", image:"./images/astre1.png", posX:100, posY:-90, echelle: 0.7, type:"astre"},
    {id:"e2", image:"./images/astre2.png", posX:200, posY:200, echelle: 0.9, type:"astre"},
    {id:"e3", image:"./images/astre2.png", posX:200, posY:200, echelle: 0.9, type:"etoile"},
    {id:"e4", image:"./images/etoile1.png", posX:600, posY:800, echelle: 0.9, type:"etoile"},
    {id:"e5", image:"./images/etoile1.png", posX:400, posY:450, echelle: 0.9, type:"etoile"},
    {id:"e6", image:"./images/objet1.png", posX: 610, posY:60, echelle: 0.3, type:"objet"},
    {id:"e7", image:"./images/objet3.png", posX:150, posY:280, echelle: 0.9, type:"objet"},
    {id:"e8", image:"./images/planete1.png", posX:0, posY:680, echelle: 0.2, type:"planete"},
    {id:"e9", image:"./images/planete3.png", posX:950, posY:280, echelle: 0.3, type:"planete"},
    {id:"e10",image:"./images/objet4.png", posX:1050, posY:-180, echelle: 0.6, type:"planete"}

];

 majInterface("");

function majInterface(typeDemande){

    let skyElements = document.querySelectorAll(".skyElement");
    skyElements.forEach((v)=>{
        v.remove();
    })

    if(typeDemande==""){
       var  configElementsFiltres = configElements;
    }else{
        var configElementsFiltres = configElements.filter((configElement, i)=>{
        return configElement.type == typeDemande;
    });
    }

    console.log(configElementsFiltres);

    configElementsFiltres.forEach((laConfig)=>{
        afficherElement(laConfig);
})
}


function afficherElement(configElement){
let element = document.createElement("img");
element.setAttribute("src", configElement.image);
element.id = configElement.id;
element.className ="skyElement " + configElement.type;
element.style.left = configElement.posX +"px";
element.style.top = configElement.posY +"px";
element.style.transform = `scale(${configElement.echelle})`;
document.body.appendChild(element);
}




