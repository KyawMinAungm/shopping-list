const input = document.getElementsByClassName("form-control")[0];
const productList =document.getElementsByClassName("product-list")[0];
let id = 0;
const mark = (change) => {
    id ++;
   const value = id +". " + change.target.value;

   const productItemContainer =document.createElement("div");
   productItemContainer.classList.add("product-item-container");
   const productItem = document.createElement("div");
   productItem.classList.add("product-item");
   productItemContainer.append(productItem);
   productItem.addEventListener("click",()=> {
       const clicked = productItem.classList.contains("line-through")
    if (clicked) {
        productItem.classList.remove("line-through")
    } else {
        productItem.classList.add("line-through")
    }
   });
   const trash = document.createElement("span");
   trash.classList.add()
   const icon =document.createElement("i");
   icon.classList.add("bi","bi-trash-fill")
   trash.append(icon);
   trash.addEventListener("click",() => {
    productItemContainer.remove();
   })
   productItem.append(value);
   productItemContainer.append(trash);
   productItem.classList.add("list-group-item", "m-2","rounded","d-flex","justify-content-between","aligh-items-center");
   productList.append(productItemContainer);
   input.value = "";
}
  
input.addEventListener("change",mark)