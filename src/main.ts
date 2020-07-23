import { sayHello } from "./greet";
import {SecurityDoor,Car} from './content'
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

const s = new SecurityDoor();
const c = new Car();

s.alert();
c.alert();

showHello("greeting", "TypeScript");