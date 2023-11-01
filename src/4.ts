class Key {
    private signature = Math.random();
    getSignature(): number{
        return this.signature;
    }
}

class Person {
    constructor(private key: Key){}
    getKey(): Key{
        return this.key;
    }
}

abstract class House {
    door: boolean;
    key: Key;
    tenants: Person[];
    abstract openDoor(key: Key): void;
    comeIn(person: Person): void{
        if (this.door) {
          this.tenants.push(person)  
        }
    }
}

class MyHouse extends House {
    constructor(key: Key) {
        super();
        this.key = key;
    }
    openDoor(key: Key): void {
        if (key===this.key) {
            this.door = true;
        } else {
            this.door === false
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};