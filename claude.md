 Noma Protocol
The team is proud to announce the release of Noma protocol on Monad mainnet. Noma combines DeFi primitives such as the concentrated liquidity AMM pioneered by Uniswap V3, with innovative concepts like the "unruggable" liquidity/automated tokenomics of Baseline/YES, as well as a creator-centric economy with rewards based on success metrics.
The result is not just yet another launchpad, but a turn-key solution that allows anyone, project founders and users interested in experimenting with automated tokenomics, to bootstrap an entirely trust-less and decentralized token with the following features:
Permission-less algorithmic market making
- Anybody can trigger a liquidity re-balance operation and earn token rewards for participating in protocol activity
- Creators are allowed to customize liquidity shape and elastic supply parameters in response to market conditions, among other things
Unruggable liquidity with a perpetually increasing floor price 
Liquidity can buy-back the whole circulating supply at any time
Earn a share of protocol profits as creator
Use tokens as collateral to borrow from liquidity
- No liquidation risk
- Self-repaying (Loan-To-Value > threshold)
Native leverage (Looping) and staking
Bonding curve equivalent Pump.fun style mechanism
Trust-less pre-sale mechanism and liquidity seeding

In essence, Noma tokens are an entirely new class of asset with advanced DeFi functionalities and innovative characteristics, aiming to improve the status-quo of token launches for both creators and consumers.
Overview
Noma protocol is composed of a set of smart contracts orchestrating the creation and management of specialized DeFi vaults. The Noma Factory is responsible for the permission-less vault creation. Each vault created consists of a dedicated token/AMM pool deployed and a corresponding liquidity provisioning. For every vault created, there's an associated elastic-supply ERC20 token and a AMM pool with a paired asset (initially only MON allowed). From the creator perspective, each vault is essentially a facility to manage liquidity operations and fine-tune market parameters. Liquidity operations are entirely permission-less, while fine-tuning of the parameters is a creator facing functionality.
Key Concepts
Noma protocol leverages several key mechanisms which combined result in a powerful mechanism:
Protocol defined circulating supply
Solvency invariant & Capacity
Elastic supply
Only up floor price
Permission-less marketing making

Circulating Supply
The most important characteristic of the current design is that each token in circulation must be backed 1:1 with real liquidity at the floor price. This means that from the protocol perspective, every token in circulation must be kept track of. This is done at smart contract level as shown below.
uint256 circulatingSupply = (
    totalSupply - 
    (
        amount0CurrentFloor + 
        amount0CurrentAnchor + 
        amount0CurrentDiscovery + 
        protocolUnusedBalanceToken0 + 
        staked + 
        IVault(vault).getCollateralAmount() +
        feesPosition0Token0
    )
);
Solvency Invariant & Capacity
Closely related to the previous concept, the solvency invariant defines the equivalently important mechanism through which the protocol maintains the specific liquidity structure necessary to buy back the entire circulating supply at any time. Capacity refers to the amount of tokens each position can absorb, with the amount of reserve asset it contains at any particular moment in time. The solvency invariant is defined as:
// To guarantee solvency, Noma ensures that capacity > circulating supply 
// each time liquidity is deployed.
if (anchorCapacity + floorCapacity <= circulatingSupply) {
    revert InsolvencyInvariant();
}
Elastic Supply
Although similar, the concept of elastic-supply for tokens on the Noma protocol differs from the more widely known definition, which refers to the mechanism used by algorithmic stablecoins to maintain 1:1 peg with their underlying reference asset [1][2].
Instead, Noma tokens start from a defined initial supply which then constantly changes in response to market conditions:
When the market is going up and people are buying, new tokens are minted to facilitate trading (shift operation)
When prices are going down, the protocol will reduce supply accordingly by burning excess un-backed tokens. (slide operation)

This supply contraption is somewhat similar to the stablecoin mechanism mentioned above but different in essence. Among the differences is that supply contraptions on Noma protocol only affect un-backed supply as opposed to elastic stablecoins, where burn operations also affect tokens held in wallets.
Backed vs Un-backed supply
From the perspective of the protocol, each token in circulation must be backed 1:1 with real liquidity (denominated in the reserve asset) at the floor price. This is defined as "backed" supply. On the other hand, any token balance held by the vault, either inside or outside liquidity positions, is considered "unbacked" supply. As mentioned above, elastic supply operations only affect the un-backed portion of the supply.
Permission-less market making
The system revolves around three contiguous concentrated liquidity positions, the "floor", "anchor" and "discovery". The floor position starts with 10% of the initial supply and can be either empty (for tokens bootstrapped without a pre-sale) or already filled with reserve assets at launch.
As the floor position is filled (either partially or entirely via pre-sale participation or trading activity), the anchor position becomes the active liquidity. Once all anchor tokens are bought, the liquidity enters discovery zone. If trade activity continues depleting discovery funds, a liquidity re-balance upwards must be triggered. This operation is called "shift". The opposite operation (liquidity is re-balanced downwards) is called a "slide". The former happens as a result of purchase activity, while the latter happens when the liquidity absorbs tokens being sold on the open market. These operations are entirely permission-less which means they can be called by anyone and they reward the caller with a small percentage of the shift inflation.
Liquidity structure during shift operationUnruggable liquidity & Only up floor price
The protocol design described results in a system that is inherently unruggable from the creator and token holder perspective. This is because the liquidity is entirely managed by the protocol and the rules encoded do not allow minting of tokens out of thin air. Every supply change is carried out in the context of the market making strategy, releasing freshly minted tokens onto a defined liquidity structure, or bonding curve.
Additionally, the protocol constantly earns revenues thanks to the liquidity structure and resulting market making strategy, which effectively sells tokens onto a higher price band than it buys from. On top of this, the protocol earns revenues from the trading fees of the underlying AMM position and the interest fees paid by users borrowing from liquidity.
These revenues are funneled into the liquidity and during every shift operation, the protocol re-balances the underlying positions, transferring a portion of the funds to the floor and recomputing the floor price upwards. This causes the floor price to increase perpetually as a result of trading activity.
Credit facility & Looping
The protocol allows token holders to borrow reserve assets from the floor liquidity up to a configurable optimal utilization threshold. When a user opens a loan position, the protocol calculates the collateral value at the floor price of the moment and disburses the loan denominated in reserve asset (MON). Since the floor price (in terms of reserve asset) can only increase over time, the loan is "liquidation-free", in the sense that the collateral value does not fluctuate with market conditions against the loan value. 
Loans have a baseline parameter "Loan-To-Value" (LTV) of 1, which increases over time as result of shift or bump floor operations. In addition, users can manually add collateral to an active loan in order to increase the LTV. When a loan LTV is consistently over a defined threshold (e.g. **2.5), the loan "self-repaying" function activates. This means that the protocol diverts a small portion of its profit to pay back these loans. Contrarily, once a loan expires and payment was not done in time, the protocol seizes the associated collateral and destroy it. 
Loan interest fees are **0.027% per diem, charged upfront and calculated over the total duration of the loan. Loan interest fees are a component of the protocol revenue stream which helps strengthen the floor liquidity.
Borrowed funds can be used either in external strategies or within the protocol, i.e. users can buy more tokens with borrowed funds, increasing their holdings and their exposure to the token. This is called "looping".
** subject to changes
Staking
In addition to the ability of being used as collateral to borrow directly from the floor liquidity, tokens can be staked in the system in order to obtain a share of the backed inflation destined to staking rewards. Users stake their tokens and obtain a staked counterpart (e.g. stake MONK, get sMONK). The staked counterpart is a rebase token that increases its supply as token rewards are sent to the staking pool. When users unstake, they burn the staked token and get back their original token + rewards. This eliminates the need for separate claim operations. Users typically combine staking with borrowing and looping in order to create an optimal strategy in line with their goals.
Bonding Curve
The equivalent of the bonding curve "graduation" concept (as seen in pump.fun and clones) in the Noma protocol is the occurrence of the first shift operation. In essence, this event signals that the entirety of the floor available tokens were bought (either via pre-sale or not), the anchor was depleted entirely (once) and the token liquidity is healthy.
Presale
When launching a token, creators can enable the pre-sale mechanism, which essentially allows them to source the liquidity destined to the floor before the actual launch of the token and raise funds for the operation. The pre-sale price is calculated with a 25% markup on top of the floor price and soft cap can be defined between 20 and 60% of the hard cap. 
(hard cap = 100% of floor liquidity)
Example pre-sale settings
Token: MONK
Floor price: 0.000025 MON
Total supply: 10B MONK
(This is calculated by the protocol)
Floor liquidity: 
10B * 10% = 1B
Presale price (Floor price + 25%)
0.000025 + (0.000025 * 0.25) = 0.00003125 MON
Hard cap 
0.00003125 * 1B = 31,250 MON
Founder share
25% of either soft cap or hard cap
31,250 * 0.25 = 7,812.5 MON
(This is a creator defined parameter)
Soft cap 
Between 20% and 60% of Hard cap
The pre-sale contract accepts deposit in the reserve asset (e.g. MON) and mints a corresponding amount of p-asset. The pre-sale can be finalized [by the creator if the soft cap is reached or] by anyone once the hard cap is reached. Upon finalization, buyers can redeem their p-asset 1:1 with the actual token and use it right away. If the pre-sale cannot be finalized, depositors can withdraw their funds.
Protocol Parameters
The protocol allows creators to configure a series of key parameter to fine-tune the behavior of the liquidity in response to market conditions. Among the configurable parameters are:
Supply response curve (Steepness of the mint/supply curve)
Elastic supply parameters (Thresholds for mint/burn operations)
Liquidity structure (Depth of discovery position in bips)

Other operations that can be manually triggered are:
Bump floor price (Shift reserve assets from anchor position toward floor liquidity, raise floor price)

Liquidity controlsCreator earnings
As mentioned earlier, the protocol earns revenues though a variety of sources such as market making, interest fees and trading fees. These resources are used to back the token inflation which is minted during shift operations and used by the protocol (e.g. by self-repaying loans) or distributed to relevant parties. Creator fees amount to about 1% of the inflation at every shift. The protocol receives a payout identical to the creator fee.
Creator earnings dashboardNoma Token
While the protocol doesn't strictly need a token to function and there's yet no $NOMA token, the team did implement the upcoming $NOMA as a way to distribute the protocol profits as token dividends for balance holders at smart contract level. This means that once enabled, holding $NOMA will give holders access to a stream of tokens held in escrow over a period of 180 days, with linear release schedule. Vesting will start as soon as a tranche of dividends is received/created.
Details T.B.A.
Dividends dashboardLaunchpad
The launchpad is a simple and friendly wizard which guides the user through the token creation process. The user defines parameters such as token name, description, floor price and initial supply. Users also defines whether they want to run a pre-sale or not. The wizard calculates the liquidity structure and shows a summary of the relevant data. The user can also choose between AMM protocols such as Uniswap or Pancake Swap. There's an AI assistant that can be used to suggest ideas for a token or to generate a colorful logo. Once created, a token is immediately available for trading on the markets page or the presale page.
Markets pageConclusion
The team is focused on the launch and finding the perfect product market fit. While we build a community and grow the product, expect a lot of improvements in between each phase. If not, feel free to get in touch and suggest us where we can do better. 
Future directions include, beside implementing many more features, improve AI integration, perhaps tightly coupling it with more low-level protocol parameters and inter-operation with Uniswap V4 hooks. Formalization of the protocol DAO and making the protocol more and more autonomous and resilient. The future is exciting!