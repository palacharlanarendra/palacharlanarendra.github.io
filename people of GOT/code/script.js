let newArray=[];
function searchQuery(){
    let SearchBar = document.querySelector(".search");

SearchBar.addEventListener("keyup",(event)=>{
    searchHouses(event.target.value)
});

function searchHouses(value){
    let elementNames ="";
    let ul = document.querySelector("ul");
                ul.innerHTML="";
    got.houses.forEach((element)=>{
        element.people.forEach((elem)=>{
            elementNames=elem.name;
            if(elementNames.startsWith(value)){
                
                commonUI(elem);
            }
            
        });
        
    });
    
    
}
}
searchQuery();
function allHouses(){
    let ul = document.querySelector("ul");
    ul.innerHTML="";
    got.houses.forEach((element)=>{
        element.people.forEach((elem)=>{
            commonUI(elem);
        });
        
    });
    
}
allHouses();

let filteredArray=[];

function commonUI(arg){
    let li = document.createElement("li");
    let div = document.createElement("div");
    let p = document.createElement("p");
    let btn = document.createElement("button");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let nameHeading = document.createElement("div");
    let imageWrap = document.createElement("div");
    let ul = document.querySelector("ul");
    nameHeading.classList.add("span");
    btn.innerText="Know More!";
    img.src=arg.image;
    imageWrap.append(img);
    p.innerText = arg.description;
    nameHeading.innerText=arg.name;
    li.append(imageWrap,nameHeading,div,p,btn);
    
    ul.append(li); 
}

function createUI(arg){
    let ul = document.querySelector("ul");
    ul.innerHTML="";
    got.houses.forEach((element)=>{
        filteredArray.push(element);
        console.log(filteredArray)
        
    });
    filteredArray[arg].people.forEach((elem)=>{
        commonUI(elem);
    });
}


let combinedBtn = document.querySelector(".combinedBtn");
combinedBtn.addEventListener("click",(event)=>
{
    if(event.target.dataset.name==="Starks"){
        createUI(0);
    };
    if(event.target.dataset.name==="Lannisters"){
        createUI(1);
    };
    if(event.target.dataset.name==="Baratheons"){
        createUI(2);
    };
    if(event.target.dataset.name==="Targaryens"){
        createUI(3);
    };

    if(event.target.dataset.name==="Greyjoys"){
        createUI(4);
    };if(event.target.dataset.name==="Tyrells"){
        createUI(5);
    };
    if(event.target.dataset.name==="Tullys"){
        createUI(6);
    };if(event.target.dataset.name==="Redwyne"){
        createUI(7);
    };
    if(event.target.dataset.name==="Freys"){
        createUI(8);
    };
    if(event.target.dataset.name==="Arryns"){
        createUI(9);
    };
    if(event.target.dataset.name==="Dothrakis"){
        createUI(10);
    };
});

