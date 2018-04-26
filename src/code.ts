import { Observable } from "rxjs/Observable"

let observable = Observable.create( (observer : any) => {
    observer.next('Hey mec !')
})

let addItem = ((val:any) => {
    let node = document.createElement("li")
    let textnode = document.createTextNode(val)
    node.appendChild(textnode)
    document.getElementById("output").appendChild(node)
})

observable.subscribe((x:any) => addItem(x))