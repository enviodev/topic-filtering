import { indexer } from "envio";


const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

indexer.onEvent(
  { contract: "ERC20", event: "Transfer", wildcard: true,
    eventFilters: [
      {
        from: ZERO_ADDRESS,
      },
      {
        to: ZERO_ADDRESS,
      },
    ], },
  async ({ event, context }) => {
    context.Transfer.set({
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      amount: event.params.value,
      from: event.params.from,
      to: event.params.to,
      contract: event.srcAddress,
    });
  }
);
