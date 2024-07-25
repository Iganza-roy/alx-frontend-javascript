class Building {
  constructor(sqft) {
    if (typeof sqft !== "number") throw new Error();
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
  evacuationWarningMessage() {
    if (new.target === Building) {
      throw new Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
    throw new Error("Method not implemented");
  }
}
