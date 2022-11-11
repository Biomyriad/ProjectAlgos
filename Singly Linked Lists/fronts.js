class SLL {
    head = null

    constructor() {
        this.head = null
    }

    addFront(value) {
        var new_node = new Node(value)

        if(this.head == null) {
            this.head = new_node
            return this
        }

        new_node.next = this.head

        this.head = new_node
        return this
    }

    removeFront() {
        if(this.head == null) {
            return;
        }

        this.head = this.head.next
    }

    front() {
        if(this.head == null) return null
        return this.head.value
    }
}

class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

SLL1 = new SLL()
SLL1.addFront(18) //=> Node { data: 18, next: null }
SLL1.addFront(5) //=> Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73) //=> Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
console.log("hello")