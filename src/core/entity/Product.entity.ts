export class ProductEntity {
  public id: string;
  public name: string;
  public price: number;
  public activated: boolean;
  public createdAt: string;

  constructor(
      productId: string,
      name: string,
      price: number,
      activated: boolean,
      createdAt: string
  ) {
      this.id = productId;
      this.name = name;
      this.price = price;
      this.activated = activated;
      this.createdAt = createdAt;
  }


  static build (
      productId: string,
      name: string,
      price: number,
      activated: boolean,
      createdAt: string
  ): ProductEntity {
      return new ProductEntity(
          productId,
          name,
          price,
          activated,
          createdAt
      )
  }
}