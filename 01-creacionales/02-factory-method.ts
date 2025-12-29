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
    console.log(`${COLORS.blue}Preparing Cheese Burger`);
  }
}

class BeefBurger implements Hamburger {
    prepare(): void {
        console.log(`${COLORS.green}Preparing Beef Burger`);
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