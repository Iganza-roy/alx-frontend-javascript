class Building {
  constructor(sqft) {
    if (typeof sqft !== "number") throw new Error();
    this._sqft = sqft;

    if (
      new.target !== Building &&
      typeof this.evacuationWarningMessage !== "function"
    ) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
  }

  get sqft() {
    return this._sqft;
  }
  evacuationWarningMessage() {
<<<<<<< HEAD
    throw new Error(
        "Class extending Building must override evacuationWarningMessage"
    );
=======
    throw new Error("Method not implemented");
>>>>>>> 733cf68765ff6e5b2fce91eb8c5aa8a3e0a7ab97
  }
}
