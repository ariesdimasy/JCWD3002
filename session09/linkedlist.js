class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    add(element){

        let node = new Node(element)

        let current;

        if(this.head == null){
            this.head = node 
        } else {
            current = this.head

            while(current.next) {
                current = current.next
            }

            current.next = node
        }

        this.size += 1 // 0 + 1 = 1
    }

    printList(){
        let curr = this.head 
        while(curr){
            console.log(curr.element)
            curr = curr.next
        }
    }

    insertAt(index, value){
        if(index < 0 || index > this.size){
            console.log("you shall not passed")
        } else {
            const node = new Node(value)
            let curr = this.head 

            if(index ==0){
                node.next = this.head 
                this.head = node
            } else {
                let prev

                for(let i = 0; i < index; i++){
                    prev = curr 
                    curr = curr.next 
                }

                prev.next = node 
                node.next = curr 
            }
        }

        this.size += 1
    }
}

let linkedList1 = new LinkedList()

linkedList1.add(23) // +1
linkedList1.add(24) // +1 
linkedList1.add(25) // +1

console.log(linkedList1.head)
console.log(linkedList1.size)

linkedList1.insertAt(0, 22)
linkedList1.insertAt(1,45)

console.log(linkedList1.head)

linkedList1.printList()