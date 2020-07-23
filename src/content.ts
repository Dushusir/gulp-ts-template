interface Alarm {
    alert(): void;
}

class Door {
}

export class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

export class Car implements Alarm {
    alert() {
        console.log('Car alert');
    }
}