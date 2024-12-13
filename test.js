function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++){
            if(arr[j] >  arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
    }
    return arr;
}

const userAge = [25, 30, 18, 22, 27, 40, 19, 21];


function rendering(arr)  {
    listEl.innerHTML = " ";
    for (let i = 0; i < arr.length; i++){
        const liEl = document.createElement("li");
        liEl.textContent = `${i+1} age: ${userAge[i]}`;
        listEl.append(liEl);
    }
}


const buttonSort = document.createElement("button");
buttonSort.textContent = "Sort";
document.body.append(buttonSort);

buttonSort.onclick = function() {
    const number = sort(userAge);
    rendering(userAge);
}

const listEl = document.createElement("ul");
document.body.append(listEl);

const mil = rendering(userAge);


