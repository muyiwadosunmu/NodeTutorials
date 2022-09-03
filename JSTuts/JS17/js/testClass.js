class Shawarma {
    constructor (shawarmaSize, shawarmaType) {
        this.size = shawarmaSize;
        this.type = shawarmaType;
        this.shape = "round";
    }
    getShape () {
        return this.shape;
    }
    setShape() {
        this.shape = shawarmaShape;
    }
    baked () {
        console.log(
            `Baking a ${this.size} ${this.round} ${this.type} shawarma` 
        )
    }
}

const myShawarma = new Shawarma("medium", "chicken flavour");
myShawarma.setShape("round");
myShawarma.baked();
console.log(myShawarma.getShape());


