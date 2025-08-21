import { GameKey } from "../../api/game_key";
import {
  EMIL,
  MapSettings,
  ReleaseStage,
} from "../../engine/game/map_settings";
import { map } from "./grid";
import { SwitzerlandRoundEngine } from "./round";
import { SwitzerlandSharesPhase } from "./shares";
import { SwitzerlandCostCalculator } from "./cost";
import { SwitzerlandPlayerHelper } from "./score";
import {SwitzerlandBuildAction} from "./build"

export class SwitzerlandMapSettings implements MapSettings {
  readonly key = GameKey.SWITZERLAND;
  readonly name = "Switzerland";
  readonly designer = "John Bohrer";
  readonly implementerId = EMIL;
  readonly minPlayers = 3;
  readonly maxPlayers = 4;
  readonly startingGrid = map;
  readonly stage = ReleaseStage.DEVELOPMENT;

  getOverrides() {
    return [
      SwitzerlandRoundEngine,
      SwitzerlandSharesPhase,
      SwitzerlandCostCalculator,
      SwitzerlandPlayerHelper,
      SwitzerlandBuildAction
    ];
  }
}
