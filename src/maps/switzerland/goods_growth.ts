import { inject } from "../../engine/framework/execution_context";
import { injectGrid } from "../../engine/game/state";
import { GoodsHelper } from "../../engine/goods_growth/helper";
import { GoodsGrowthPhase } from "../../engine/goods_growth/phase";
import { GridHelper } from "../../engine/map/grid_helper";
import { goodToString } from "../../engine/state/good";

export class SwitzerlandGoodsGrowthPhase extends GoodsGrowthPhase {
  protected readonly gridHelper = inject(GridHelper);
  protected readonly helper = inject(GoodsHelper);
  private readonly grid = injectGrid();

  onEnd(): void {
    const goods = this.helper.drawGoods(1);

    const zurich = this.grid().getCityByName("Zurich");

    this.log.log(`A ${goodToString(goods[0])} was added to Zurich`);

    this.helper.addGoodToCity(zurich.coordinates, goods[0]);

    super.onEnd();
  }
}
