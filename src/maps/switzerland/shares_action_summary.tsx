
import { Button } from "semantic-ui-react";

import { useEmptyAction } from "../../client/services/action";
import { SwitzerlandSharesAction } from "./shares";
import { TakeShares } from "../../client/game/action_summary";

export function SwitzerlandShares() {
  const { emit, isPending, canEmitUserId } = useEmptyAction(
    SwitzerlandSharesAction,
  );

  if (canEmitUserId == null) {
    return <></>;
  }

  return (
    <div>
      <TakeShares />
      <Button primary disabled={isPending} onClick={emit}>
        Pay back share for 8$
      </Button>
    </div>
  );
}
