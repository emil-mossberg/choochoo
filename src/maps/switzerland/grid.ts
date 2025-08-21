import { BLACK, BLUE, PURPLE, RED, YELLOW } from "../../engine/state/good";
import { Direction } from "../../engine/state/tile";
import { duplicate } from "../../utils/functions";
import {
  city,
  grid,
  plain,
  PLAIN,
  town,
  UNPASSABLE,
  white,
  black,
  MOUNTAIN,
} from "../factory";
import { MutableLandData } from "../../engine/state/space";
import { type SwitzerlandMapData } from './build'


function mapSpecific(
  input: MutableLandData,
  mapSpecific: Partial<SwitzerlandMapData>,
): MutableLandData {
  return {
    ...input,
    mapSpecific: {
      ...input.mapSpecific,
      ...mapSpecific,
    },
  };
}

function swissMeta(
  tile: MutableLandData,
  data: Partial<SwitzerlandMapData>
): MutableLandData {
  return mapSpecific(tile, data);
}





// TO DO test this, bot for 
// { ...city("Perth", BLUE, white(1), 3), mapSpecific: { bonus: 3 } },
// {...PLAIN, mapSpecific: {unpassable: true, name: 'apa'}},
export const map = grid([
  [,
    ...duplicate(8, UNPASSABLE),
    PLAIN,
    city("Geneva", [BLACK, BLUE, PURPLE, RED, YELLOW], [white(1)]),
  ],
  [
    ...duplicate(6, UNPASSABLE),
    plain({ unpassableEdges: [Direction.TOP_RIGHT, Direction.BOTTOM] }),
    PLAIN,
  ],
  [
    ...duplicate(5, UNPASSABLE),
    PLAIN,
    PLAIN,
    city("Lausanne", BLUE, [white(2)]),
  ],
  [
    UNPASSABLE,
    UNPASSABLE,
    UNPASSABLE,
    city("La Chaux de Fonds", [BLACK, BLUE, PURPLE, RED, YELLOW], [white(3)]),
    town("Neuchatel"),
    ...duplicate(4, PLAIN),
  ],
  [
    UNPASSABLE,
    UNPASSABLE,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    town("Fribourg"),
    PLAIN,
    MOUNTAIN,
    PLAIN,
    PLAIN,
  ],
  [
    UNPASSABLE,
    PLAIN,
    PLAIN,
    town("Biel"),
    PLAIN,
    PLAIN,
    MOUNTAIN,
    PLAIN,
    MOUNTAIN,
    city("Sion", PURPLE, [white(6)]),
    MOUNTAIN,
  ],
  [
    UNPASSABLE,
    city("Basel", RED, [white(4)], 3),
    PLAIN,
    PLAIN,
    PLAIN,
    city("Bern", BLUE, [white(5)]),
    ...duplicate(5, PLAIN),
  ],
  [
    UNPASSABLE,
    PLAIN,
    PLAIN,
    town("Solothurn"),
    PLAIN,
    PLAIN,
    town("Thun"),
    PLAIN,
    MOUNTAIN,
    PLAIN,
    MOUNTAIN,
  ],
  [
    UNPASSABLE,
    PLAIN,
    town("Aarau"),
    PLAIN,
    PLAIN,
    PLAIN,
    MOUNTAIN,
    PLAIN,
    swissMeta(MOUNTAIN, { enable5: true, name: "tunnel1" }),
    swissMeta(MOUNTAIN, { enable5: true, name: "town1" }),
    PLAIN
  ],
  [
    UNPASSABLE,
    ...duplicate(3, PLAIN),
    town("Luzern"),
    PLAIN,
    PLAIN,
    MOUNTAIN,
    PLAIN,
    PLAIN,
  ],
  [
    UNPASSABLE,
    PLAIN,
    PLAIN,
    city("Zurich", BLUE, [black(1)], 4),
    PLAIN,
    ...duplicate(3, MOUNTAIN),
    PLAIN,
  ],
  [
    city("Schaffhausen", RED, [black(2)]),
    PLAIN,
    PLAIN,
    PLAIN,
    town("Zug"),
    PLAIN,
    PLAIN,
    swissMeta(MOUNTAIN, { enable5: true, name: "town2" }),
    PLAIN,
  ],
  [
    UNPASSABLE,
    PLAIN,
    city("Winterthur", BLUE, [black(3)]),
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
  ],
  [
    UNPASSABLE,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    PLAIN,
    MOUNTAIN,
    PLAIN,
    PLAIN,
    city("Lugano", [BLACK, BLUE, PURPLE, RED, YELLOW], [black(6)]),
  ],
  [
    UNPASSABLE,
    UNPASSABLE,
    PLAIN,
    city("St. Gallen", BLUE, [black(4)]),
    PLAIN,
    PLAIN,
    PLAIN,
    MOUNTAIN,
    MOUNTAIN,
    town("Bellinzona"),
  ],
  [
    ...duplicate(4, UNPASSABLE),
    PLAIN,
    city("Chur", BLUE, [black(5)]),
    PLAIN,
    PLAIN,
  ],
]);
