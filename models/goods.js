class Goods {
  constructor(
    ID,
    categoryID,
    name,
    description,
    image,
    price,
    counterLeft,
    counterBuy
  ) {
    this.ID = ID;
    this.categoryID = categoryID;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.counterLeft = counterLeft;
    this.counterBuy = counterBuy;
  }
}

export default Goods;
