import { Observable } from "rxjs/Observable"
import { Subscription } from "rxjs/Subscription";

let observable = Observable.create((observer : any) => {
    try {
        observer.next('Hey mec!')
        observer.next('ça roule ?')
        setInterval(() => {
            observer.next('Ouais mec ! =)')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

let addItem = ((val:any) => {
    let node = document.createElement("li")
    let textnode = document.createTextNode(val)
    node.appendChild(textnode)
    document.getElementById("output").appendChild(node)
})

let subscription = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Complété')
)

setTimeout(() => {
    subscription.unsubscribe()
}, 6001)