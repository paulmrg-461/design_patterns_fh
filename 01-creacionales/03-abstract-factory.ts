/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
    prepare(): void;
}

interface Drink {
    serve(): void;
}

class VeggieBurger implements Hamburger {
    prepare(): void {
      console.log(`Preparing a %cVeggie Burger.`, COLORS.green);
    }
}

class BeefBurger implements Hamburger {
    prepare(): void {
      console.log(`Preparing a %cBeef Burger.`, COLORS.red);
    }
}

class Water implements Drink {
  serve(): void {
    console.log(`Serving %cWater`, COLORS.blue);
  }
}

class Beer implements Drink {
  serve(): void {
    console.log(`Serving %cBeer`, COLORS.yellow);
  }
}

interface RestaurantFactory {
  createHamburger(): Hamburger;
  serveDrink(): Drink;
}

class VeggieRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new VeggieBurger();
  }

  serveDrink(): Drink {
    return new Water();
  }
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new BeefBurger();
  }

  serveDrink(): Drink {
    return new Beer();
  }
}

function main (factory: RestaurantFactory) {
  const hamburger = factory.createHamburger();
  const drink = factory.serveDrink();

  hamburger.prepare();
  drink.serve();
}

console.log('\n%cVeggie order:', COLORS.green)
main(new VeggieRestaurantFactory() );

console.log('\n%cFastFood order:', COLORS.red)
main(new FastFoodRestaurantFactory() );
