const button = document.querySelector(".buttonTwet");
const content = document.querySelector(".content");
const input = document.querySelector(".input");
const form = document.querySelector(".form");
form.addEventListener("submit", addFunction);
button.addEventListener("click", addFunction);
let arr=[]
function addFunction(e) {
    e.preventDefault();
    if (input.value)
    { 
        arr.push(input.value )
        addToLocalStorage()
        showItem()
    }
    console.log(arr)
}
function addToLocalStorage() {
    localStorage.setItem("items",JSON.stringify(arr))
}
function showItem() {
  const fatherDiv = document.createElement("div");
  content.appendChild(fatherDiv);
  fatherDiv.className = "father";
  // header
  const headerDiv = document.createElement("div");
  headerDiv.className = "headerDiv";
  fatherDiv.appendChild(headerDiv);
  const headerContent = document.createElement("div");
  headerContent.className = "headerContent";
  headerDiv.appendChild(headerContent);
  const headerImge = document.createElement("img");
  headerImge.src = "./images/111.jpeg";
  headerContent.appendChild(headerImge);
  const userName = document.createElement("div");
  userName.className = "userName";
  userName.textContent = "@AbdouMonuir2020";
  headerContent.appendChild(userName);
  const iconsMenun = document.createElement("i");
  iconsMenun.innerHTML = "<i class='fa-solid fa-ellipsis'></i>";
  headerDiv.appendChild(iconsMenun);
  // end header
  // body
  const bodyDiv = document.createElement("div");
  fatherDiv.appendChild(bodyDiv);
  bodyDiv.className = "bodyDiv";
  const BodyContent = document.createElement("h1");
  BodyContent.className = "bodyContent";
  BodyContent.textContent = input.value;
  input.value = "";
  bodyDiv.appendChild(BodyContent);
  //bodyEnd
  const fotterDiv = document.createElement("div");
  fatherDiv.appendChild(fotterDiv);
  fotterDiv.className = "footerDiv";
  const iconsRetweet = document.createElement("i");
  iconsRetweet.innerHTML = "<i class='fa-solid fa-retweet'></i>";
  fotterDiv.appendChild(iconsRetweet);
  //retwett function
  iconsRetweet.addEventListener("click", () => {
    const fatherDivRe = document.createElement("div");
    content.appendChild(fatherDivRe);
    fatherDivRe.className = "father";
    // header
    const headerDivRe = document.createElement("div");
    headerDivRe.className = "headerDiv";
    fatherDivRe.appendChild(headerDivRe);
    const headerContentRe = document.createElement("div");
    headerContentRe.className = "headerContent";
    headerDivRe.appendChild(headerContentRe);
    const headerImgeRe = document.createElement("img");
    headerImgeRe.src = "./images/111.jpeg";
    headerContentRe.appendChild(headerImgeRe);
    const userNameRe = document.createElement("div");
    userNameRe.className = "userName";
    userNameRe.textContent = "@AbdouMonuir2020";
    headerContentRe.appendChild(userNameRe);
    const iconSpanRe = document.createElement("i");
    headerDivRe.appendChild(iconSpanRe);
    // end header
    // body
    const bodyDivRe = document.createElement("div");
    fatherDivRe.appendChild(bodyDivRe);
    bodyDivRe.className = "bodyDiv";
    const BodyContentRe = document.createElement("h1");
    BodyContentRe.className = "bodyContent";
    BodyContentRe.textContent = BodyContent.textContent;
    console.log(fatherDiv);
    bodyDivRe.appendChild(BodyContentRe);
    //bodyEnd
    const fotterDivRe = document.createElement("div");
    fatherDivRe.appendChild(fotterDivRe);
    fotterDivRe.className = "footerDiv";
    const iconsRetweetRe = document.createElement("i");
    iconsRetweetRe.innerHTML = "<i class='fa-solid fa-retweet'></i>";
    fotterDivRe.appendChild(iconsRetweetRe);
    const iconsHeartRe = document.createElement("i");
    iconsHeartRe.innerHTML = "<i class='fa-solid fa-heart'></i>";
    fotterDivRe.appendChild(iconsHeartRe);
    iconsHeartRe.addEventListener("click", () => {
      fatherDivRe.classList.toggle("achtive");
      iconsHeartRe.classList.toggle("heartColor");
    });
  });
  //end function
  const iconsHeart = document.createElement("i");
  iconsHeart.innerHTML = "<i class='fa-solid fa-heart'></i>";
  fotterDiv.appendChild(iconsHeart);
  iconsHeart.addEventListener("click", () => {
    fatherDiv.classList.toggle("achtive");
    iconsHeart.classList.toggle("heartColor");
  });
}
window.addEventListener("load", () => {
    let items=localStorage.getItem('items')
    let arrItems = JSON.parse(items)
    if(arrItems){
        arr = arrItems
    let show = arrItems.map(e => {
        const fatherDiv = document.createElement("div");
        content.appendChild(fatherDiv);
        fatherDiv.className = "father";
      // header
      const headerDiv = document.createElement("div");
      headerDiv.className = "headerDiv";
      fatherDiv.appendChild(headerDiv);
      const headerContent = document.createElement("div");
      headerContent.className = "headerContent";
      headerDiv.appendChild(headerContent);
      const headerImge = document.createElement("img");
      headerImge.src = "./images/111.jpeg";
      headerContent.appendChild(headerImge);
      const userName = document.createElement("div");
      userName.className = "userName";
      userName.textContent = "@AbdouMonuir2020";
      headerContent.appendChild(userName);
      const iconSpan = document.createElement("i");
      headerDiv.appendChild(iconSpan);
      // end header
      // body
      const bodyDiv = document.createElement("div");
      fatherDiv.appendChild(bodyDiv);
      bodyDiv.className = "bodyDiv";
      const BodyContent = document.createElement("h1");
      BodyContent.className = "bodyContent";
      BodyContent.textContent = e;
      input.value = "";
      bodyDiv.appendChild(BodyContent);
      //bodyEnd
      const fotterDiv = document.createElement("div");
      fatherDiv.appendChild(fotterDiv);
      fotterDiv.className = "footerDiv";
      const iconsRetweet = document.createElement("i");
      iconsRetweet.innerHTML = "<i class='fa-solid fa-retweet'></i>";
        fotterDiv.appendChild(iconsRetweet);
        //retwett function 
        iconsRetweet.addEventListener('click', () => {
            const fatherDivRe = document.createElement("div");
            content.appendChild(fatherDivRe);
            fatherDivRe.className = "father";
            // header
            const headerDivRe = document.createElement("div");
            headerDivRe.className = "headerDiv";
            fatherDivRe.appendChild(headerDivRe);
            const headerContentRe = document.createElement("div");
            headerContentRe.className = "headerContent";
            headerDivRe.appendChild(headerContentRe);
            const headerImgeRe = document.createElement("img");
            headerImgeRe.src = "./images/111.jpeg";
            headerContentRe.appendChild(headerImgeRe);
            const userNameRe = document.createElement("div");
            userNameRe.className = "userName";
            userNameRe.textContent = "@AbdouMonuir2020";
            headerContentRe.appendChild(userNameRe);
            const iconSpanRe = document.createElement("i");
            headerDivRe.appendChild(iconSpanRe);
            // end header
            // body
            const bodyDivRe = document.createElement("div");
            fatherDivRe.appendChild(bodyDivRe);
            bodyDivRe.className = "bodyDiv";
            const BodyContentRe = document.createElement("h1");
            BodyContentRe.className = "bodyContent";
            BodyContentRe.innerText = BodyContent.textContent;
            console.log(fatherDiv)
            bodyDivRe.appendChild(BodyContentRe);
            //bodyEnd
            const fotterDivRe = document.createElement("div");
            fatherDivRe.appendChild(fotterDivRe);
            fotterDivRe.className = "footerDiv";
            const iconsRetweetRe = document.createElement("i");
            iconsRetweetRe.innerHTML = "<i class='fa-solid fa-retweet'></i>";
            fotterDivRe.appendChild(iconsRetweetRe);
            const iconsHeartRe = document.createElement("i");
            iconsHeartRe.innerHTML = "<i class='fa-solid fa-heart'></i>";
            fotterDivRe.appendChild(iconsHeartRe);
            iconsHeartRe.addEventListener("click", () => {
                fatherDivRe.classList.toggle("achtive");
                iconsHeartRe.classList.toggle("heartColor");
            });
        })
        //end function 
        const iconsHeart = document.createElement("i");
        iconsHeart.innerHTML = "<i class='fa-solid fa-heart'></i>";
        fotterDiv.appendChild(iconsHeart);
        iconsHeart.addEventListener("click", () => {
            fatherDiv.classList.toggle("achtive");
            iconsHeart.classList.toggle("heartColor");
        });
    })
}
});