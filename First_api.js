let btn= document.querySelector("#cat");

btn.addEventListener("click", async ()=> {
    let fact=await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText= fact;
});

let url="https://catfact.ninja/fact";

// using axios
async function getFacts(){
            try{
                let res = await axios.get(url);
                return res.data.fact;
            }catch(e){
                console.log("error - ",e);
                return "No fact found";
            }
        }

let btn1= document.querySelector("#dog");
let url2="https://dog.ceo/api/breeds/image/random";
        
        btn1.addEventListener("click", async ()=> {
            let link=await getImage();
            //console.log(link);
            let img=document.querySelector("#result1");
            img.setAttribute("src",link);
        });
        
        // using axios
        async function getImage(){
                    try{
                        let res = await axios.get(url2);
                        return res.data.message;
                    }catch(e){
                        console.log("error - ",e);
                        return "No Image found";
                    }
                }









// using fetch with async and awaits

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }catch(e){
//         console.log("error - ",e);
//     }
//     console.log("bye");
    
// }

// fetch(url)
// .then((res) =>{
//     console.log(res);
//     res.json().then((data) => {
//         console.log(data);
//     });
// })
// .catch((err) =>{
//     console.log("ERROR -", err);
// });
