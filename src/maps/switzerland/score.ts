import { PlayerHelper } from "../../engine/game/player";
import { PlayerData } from "../../engine/state/player";

export class SwitzerlandPlayerHelper extends PlayerHelper {
  getScoreFromTrack(player: PlayerData): number {
    if (player.outOfGame) return 0;
    return super.getScoreFromTrack(player) * 2;
  }
}
