const profiles = document.querySelector(".profiles");
const children = Array(...profiles.children);
let i = 0;
children.forEach((element) => {
    console.log(element);
    element.style.right = `${i * 10}px`;
    element.style.zIndex = `${i + 1}px`;
    i++;
});
