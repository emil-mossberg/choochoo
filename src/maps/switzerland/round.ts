import { inject } from "../../engine/framework/execution_context";
import { RoundEngine } from "../../engine/game/round";

import { GridHelper } from "../../engine/map/grid_helper";
import { town } from "../factory";
import { CoordinatesZod } from "../../utils/coordinates";


export class SwitzerlandRoundEngine extends RoundEngine {
  private readonly gridHelper = inject(GridHelper);

  start(round: number) {
    const townTest = town('Test town')



    // const maybeCoord = CoordinatesZod.parse({ q: 8, r: 7 }); 

    // this.gridHelper.set(maybeCoord, townTest)


    super.start(round);
  }
}
    