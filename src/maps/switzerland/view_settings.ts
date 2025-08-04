import { MapViewSettings } from "../view_settings";
import { SwitzerlandRules } from "./rules";
import { SwitzerlandMapSettings } from "./settings";
import { SwitzerlandShares } from "./shares_action_summary";
import { Phase } from "../../engine/state/phase";

export class SwitzerlandViewSettings
  extends SwitzerlandMapSettings
  implements MapViewSettings
{
  getMapRules = SwitzerlandRules;
  getActionSummary(phase: Phase) {
    if (phase === Phase.SHARES) {
      return SwitzerlandShares;
    }
  }
}
