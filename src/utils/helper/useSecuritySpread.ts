// ref: https://www.hkex.com.hk/-/media/HKEX-Market/Services/Rules-and-Forms-and-Fees/Rules/SEHK/Securities/Rules/Sch_02.pdf?la=zh-HK

import { SecurityType } from '@type/stock';

export const useSecuritySpread = (
    securityType: SecurityType,
    price: number,
) => {
    let spreadTable: any = null;

    switch (securityType) {
        case SecurityType.EQTY:
            spreadTable = {
                '0.25': '0.001',
                '0.5': '0.005',
                '10': '0.01',
                '20': '0.02',
                '100': '0.05',
                '200': '0.1',
                '500': '0.2',
                '1000': '0.5',
                '2000': '1',
                '5000': '2',
                '9995': '5',
            };
            break;
        case SecurityType.TRST:
            spreadTable = {
                '1': '0.001',
                '5': '0.002',
                '10': '0.005',
                '20': '0.01',
                '100': '0.02',
                '200': '0.05',
                '500': '0.1',
                '1000': '0.2',
                '2000': '0.5',
                '9999': '1',
            };
            break;
        case SecurityType.BOND:
            return '0.05';
        default:
            return '0';
    }

    if (spreadTable) {
        const spread: number =
            spreadTable[
                Object.keys(spreadTable).filter((priceEnd, index) => {
                    if (index > 0) {
                        return (
                            +price >
                                spreadTable[
                                    Object.keys(spreadTable)[index - 1]
                                ] && +price <= +priceEnd
                        );
                    } else {
                        return +price >= 0.01 && +price <= +priceEnd;
                    }
                })[0]
            ];
        return +spread;
    } else {
        return 0;
    }
};
