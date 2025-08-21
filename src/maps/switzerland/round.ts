import { inject } from "../../engine/framework/execution_context";
import { RoundEngine } from "../../engine/game/round";

import { GridHelper } from "../../engine/map/grid_helper";
import { town } from "../factory";
import { CoordinatesZod } from "../../utils/coordinates";
import { injectGrid } from "../../engine/game/state";


import { SwitzerlandMapData } from './build'

export class SwitzerlandRoundEngine extends RoundEngine {
  private readonly gridHelper = inject(GridHelper);
  protected readonly grid = injectGrid();

  start(round: number) {
    console.log('start round', round)
    // TO DO this happens on round 5
    // const raron = town('Raron')

    // townTest.tile?.tileType
    for (const space of this.grid().values()) { 
      console.log(space.getMapSpecific(SwitzerlandMapData.parse))

      space.data.type
    }

    // const maybeCoord = CoordinatesZod.parse({ q: 8, r: 7 }); 

    // this.gridHelper.set(maybeCoord, townTest)


    super.start(round);
  }
}
    