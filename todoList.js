document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.querySelector("#todo")
    const List = document.querySelector("#todoList")
    const plusButton = document.querySelector("#plusList")
    const minusButton = document.querySelector("#minusList")

    //add todo to todolist
    const addlist = () => {
        if(inputText.value.trim() === '') {
            alert('nothing entering')
            return 
        }

        //객체를 만든다 
        const item = document.createElement("div")
        const label = document.createElement("label") //라벨을 사용해 체크박스를 포함해 문장을 눌러도 체크가 된다.
        const checkbox = document.createElement("input")
        const text = document.createElement("span")
        
        //객체를 이어붙인다 
        label.appendChild(checkbox)
        label.appendChild(text)
        item.appendChild(label)
        List.appendChild(item)

        //각 객체들의 세부 설정 
        checkbox.type = 'checkbox'
        checkbox.className = 'checkboxList' //삭제를 할 때 이용됨 
        checkbox.addEventListener('change', (event) => {
            item.style.textDecoration = event.target.checked ? 'line-through' : ''
        })

        text.textContent = inputText.value

        inputText.value = ''
    }

    //remove todo from todolist 
    const removelist = () => {
        const allcheckbox = document.getElementsByClassName('checkboxList')
        for(let i=0; i<allcheckbox.length; i++) {
            if(allcheckbox[i].checked) {
                List.removeChild(allcheckbox[i].parentNode.parentNode)
                i-- //하나씩 제거될 때마다 뒤에 있는 객체가 앞으로 땡겨오므로 i의 값에도 변화를 주어야한다. 
            }
        }
    }

    plusButton.addEventListener("click", addlist)
    inputText.addEventListener("keyup", (event) => {
        const ENTER = 13
        if(event.keyCode === ENTER) {
            addlist()
        }
    })
    minusButton.addEventListener("click", removelist)
})