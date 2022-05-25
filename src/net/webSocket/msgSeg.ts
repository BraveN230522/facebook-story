/*
 * @Author: Ethan
 * @Date: 2021-08-02 11:35:04
 * @Last Modified by: Ethan
 * @Last Modified time: 2021-08-20 16:25:53
 * @信息标志位定义
 */

export class MsgSeg {
    static MSGSEG_HEART = 0; // heart
    static MSGSEG_INIT = 1; // connect init
    static MSGSEG_KLINE = 2; // kline data
    static MSGSEG_SNAPSHOT = 3; // snapshot data
    static MSGSEG_BASICQOT = 4; // basicqot data
    static MSGSEG_TIMESHARE = 5; // timeshare data
    static MSGSEG_HISTORYKL = 6; // historyKL data
    static MSGSEG_LIST_TIMESHARE = 7; // multiple stock timeshare data
    static MSGSEG_ORDERBOOK = 8; // order book data
    static MSGSEG_TICKER = 9; // ticker one by one data
    static MEGSEG_BROKER = 10; // Broker data
    static MEGSEG_SECURITY_SET = 11; // Page data
    static MEGSEG_PLATE_SET = 12; // Plate data, temporarily acting on IndustryCategoryScreen.tsx
    static MEGSEG_PLATE_SECURITY = 13; // get data by plate_code like "BK1007", "HK.Motherboard"
    static MEGSEG_SUB = 14; // subscribe data
    static MEGSEG_INDUSTRY = 15; // industry data
}
