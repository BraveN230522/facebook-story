enum MarketTypeEnum {
    'Unknown' = 0, // 未知市场
    'HK_SECURITY' = 1, // 港股
    'US_SECURITY' = 11, // 美股
    'CNSH_SECURITY' = 21, // 沪股
    'CNSZ_SECURITY' = 22, // 深股
}

export const getMarketCode = (market: number): string => {
    switch (market) {
        case MarketTypeEnum.Unknown:
            return '';
        case MarketTypeEnum.HK_SECURITY:
            return 'HK';
        case MarketTypeEnum.US_SECURITY:
            return 'US';
        case MarketTypeEnum.CNSH_SECURITY:
            return 'SH';
        case MarketTypeEnum.CNSZ_SECURITY:
            return 'SZ';
        default:
            return '';
    }
};
