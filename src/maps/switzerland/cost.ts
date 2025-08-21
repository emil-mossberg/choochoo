import { BuildCostCalculator } from "../../engine/build/cost";
import { SpaceType } from "../../engine/state/location_type";
import { LandType } from "../../engine/state/space";
import { ComplexTileType, SimpleTileType } from "../../engine/state/tile";

export class SwitzerlandCostCalculator extends BuildCostCalculator {
  protected getCostOfLandType(type: LandType): number {
    switch (type) {
      case SpaceType.PLAIN:
        return 4;
      default:
        return super.getCostOfLandType(type);
    }
  }

  protected getRedirectCost() {
    return 4;
  }

  protected getTownUpgradeCost() {
    return 4;
  }

  protected getTownTileCost() {
    return 4;
  }

  protected getComplexUpgradeCost(_: SimpleTileType, __: ComplexTileType) {
    return 3;
  }
}
