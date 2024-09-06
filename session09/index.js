class Stack { 
    #maxSize
    #container = []

    constructor(maxSize = 5){
        this.#maxSize = maxSize
    }

    #isFull(){
        return this.#container.length == this.#maxSize
    }

    #isEmpty(){
        return this.#container.length == 0
    }

    push(item){
        if(!this.#isFull()){
            this.#container.push(item)
        } else {
            console.log("Stack overflow")
        }   
    }

    pop(){
        if(this.#isEmpty()){
            console.log("stack underflow")
            return 
        }
        this.#container.pop()
    }

    getElements(){
        return this.#container
    }
}

let stack1 = new Stack()
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.push(4)
stack1.push(5)
console.log(stack1.getElements())
stack1.push(3)

/*
console.log(stack1.getElements())
stack1.pop()
console.log(stack1.getElements())
stack1.pop()
stack1.pop()
console.log(stack1.getElements())
stack1.pop()*/


