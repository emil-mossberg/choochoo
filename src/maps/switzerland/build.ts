import z from "zod";
import { assert } from "../../utils/validate";

import { BuildAction, BuildData } from "../../engine/build/build";
import { Coordinates } from "../../utils/coordinates";
import { SpaceType } from "../../engine/state/location_type";

export const SwitzerlandMapData = z.object({
  enable5: z.boolean(),
  name: z.string(),
});
export type SwitzerlandMapData = z.infer<typeof SwitzerlandMapData>;

export class SwitzerlandBuildAction extends BuildAction {
  validate(data: BuildData): void {
    const coordinates: Coordinates = data.coordinates;

    const space = this.gridHelper.lookup(coordinates);
    assert(space?.data.type !== SpaceType.MOUNTAIN, {
      invalidInput: `You can not build in mountains`,
    });

    super.validate(data)
  }
}
