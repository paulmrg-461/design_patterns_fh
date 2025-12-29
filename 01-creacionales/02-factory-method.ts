/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare(): void;
}

class CheeseBurger implements Hamburger {
  prepare(): void {
    console.log(`%cPreparing Cheese Burger`, COLORS.orange);
  }
}

class BeefBurger implements Hamburger {
    prepare(): void {
        console.log(`%cPreparing Beef Burger`, COLORS.red);
    }
}

class BeaconBurger implements Hamburger {
    prepare(): void {
        console.log(`%cPreparing Beacon Burger`, COLORS.blue);
    }
}

abstract class Restaurant {
    abstract createHamburger() : Hamburger;

    orderHamburger():void {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeefBurger();
    }
}

class CheeseRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new CheeseBurger();
    }
}

class BeaconRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeaconBurger();
    }
}

function main() {
    let restaurant: Restaurant;
    const orderType = prompt("Enter order type (beef/cheese/beacon):");

    switch(orderType) {
        case 'beef':
            restaurant = new BeefRestaurant();
            break;
        case 'cheese':
            restaurant = new CheeseRestaurant();
            break;
        case 'beacon':
            restaurant = new BeaconRestaurant();
            break;
        default:
            throw new Error("Invalid order type");
            return;
    }

    restaurant.orderHamburger();
}

main();
