function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishers = Number(input[2]);

  const spring = 3000;
  const summer = 4200;
  const autumn = 4200;
  const winter = 2600;

  let finalPrice;
  let priceWithDiscount;

  switch (season) {
    case "Spring":
      finalPrice = spring;
      break;
    case "Summer":
      finalPrice = summer;
      break;
    case "Autumn":
      finalPrice = autumn;
      break;
    case "Winter":
      finalPrice = winter;
      break;

    default:
      break;
  }

  if (fishers <= 6) {
    priceWithDiscount = finalPrice - finalPrice * 0.1;
  } else if (fishers >= 7 && fishers <= 11) {
    priceWithDiscount = finalPrice - finalPrice * 0.15;
  } else if (fishers > 12) {
    priceWithDiscount = finalPrice - finalPrice * 0.25;
  }

  if (season != "Autumn" && fishers % 2 == 0) {
    priceWithDiscount -= priceWithDiscount * 0.05;
  }

  if (budget >= priceWithDiscount) {
    console.log(
      `Yes! You have ${(budget - priceWithDiscount).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money! You need ${(priceWithDiscount - budget).toFixed(
        2
      )} leva.`
    );
  }
}

fishingBoat(["3000", "Summer", "11"]);
