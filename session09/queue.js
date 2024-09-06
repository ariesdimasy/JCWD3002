class Queue { 
    #container = []

    enqueue(element){
        this.#container.push(element)
    }

    dequeue(){
        this.#container.shift()
    }

    getElements(){
        return this.#container
    }
}

let queue1 = new Queue()

queue1.enqueue(1)
queue1.enqueue(2)
console.log(queue1.getElements())
queue1.dequeue()
console.log(queue1.getElements())
