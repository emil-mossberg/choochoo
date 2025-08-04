import z from "zod";
import { SharesPhase } from "../../engine/shares/phase";
import { PlayerHelper } from "../../engine/game/player";
import { Log } from "../../engine/game/log";
import { inject } from "../../engine/framework/execution_context";
import { injectCurrentPlayer } from "../../engine/game/state";
import { assert } from "../../utils/validate";
import { ActionProcessor, EmptyAction } from "../../engine/game/action";

export class SwitzerlandSharesPhase extends SharesPhase {
  configureActions(): void {
    super.configureActions();
    this.installAction(SwitzerlandSharesAction);
  }
}

export class SwitzerlandSharesAction implements ActionProcessor<EmptyAction> {
  static readonly action = "switzerland-shares";
  readonly assertInput = z.object({}).parse;

  protected readonly log = inject(Log);
  protected readonly playerHelper = inject(PlayerHelper);
  protected readonly currentPlayer = injectCurrentPlayer();
  protected readonly  payback_cost = 8; 

  validate() {
    assert(this.currentPlayer().shares > 2, {
      invalidInput: `cannot return a loan if only has 2 or less `,
    });
    assert(this.currentPlayer().money >= this.payback_cost, {
      invalidInput: `cannot return a loan if only has 2 or less `,
    });
  }

  process(): boolean {
    this.playerHelper.updateCurrentPlayer((player) => {
      player.shares -= 1;
      player.money -= this.payback_cost;
    });
    this.log.currentPlayer(`pays back a share for ${this.payback_cost}`);

    return true;
  }
}
