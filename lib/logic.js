/**
 * 
 * @param {com.rachid.network.Trade} trade - trade
 * @transaction
 */
async function tradeCommodity(trade) {
    trade.commodity.owner = trade.trader

    let assetRegistry = await getAssetRegistry('com.rachid.network.Commodity');
    await assetRegistry.update(trade.commodity);
}