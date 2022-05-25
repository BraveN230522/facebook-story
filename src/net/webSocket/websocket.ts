import { MsgSeg } from './msgSeg';
import { WS_STATUS } from './constant';
import { readyStateEmit } from '@utils/subscriptionCenter';
import { showToast } from '@utils/toast';
import { getUniqueId } from 'react-native-device-info';

const commonPb = require('../proto/Quote_pb');

interface HeartCheck {
    parent: any;
    timeout: number;
    timeoutObj: NodeJS.Timeout;
    serverTimeoutObj: NodeJS.Timeout;
    start: Function;
}

class CustomizeWebSocket {
    // url = 'ws://218.253.238.242:47352/ws';
    // url = 'ws://16.163.172.51:10000/ws'; // 正式版本
    url = 'ws://16.163.172.51:20000/ws'; // 测试版本
    status = WS_STATUS.WS_STATUS_IDLE; // connect status

    webSocket: WebSocket | undefined = undefined;

    onQueryKLine: Function = (_data: any) => {};
    onQuerySnapshot: Function = (_data: any) => {};
    onQueryBasicQot: Function = (_data: any) => {};
    onQueryTimeShare: Function = (_data: any) => {};
    onQueryHistoryKL: Function = (_data: any) => {};
    onQueryListTimeShare: Function = (_data: any) => {};
    onQueryOrderBook: Function = (_data: any) => {};
    onQueryTickers: Function = (_data: any) => {};
    onQueryBroker: Function = (_data: any) => {};
    onQuerySecuritySet: Function = (_data: any) => {};
    onQueryPlateSet: Function = (_data: any) => {};
    onQueryPlateSecurity: Function = (_data: any) => {};
    onQueryIndustry: Function = (_data: any) => {};

    lockReconnect = false; // Avoid repeated connections
    tt: NodeJS.Timeout | undefined = undefined;
    updateBasic = true;
    timerBasic: NodeJS.Timeout | undefined = undefined;
    updateRT = true;
    timerRT: NodeJS.Timeout | undefined = undefined;
    updateOrderbook = true;
    timerOrderbook: NodeJS.Timeout | undefined = undefined;
    updateBroker = true;
    timerBroker: NodeJS.Timeout | undefined = undefined;
    updateTicker = true;
    timerTicker: NodeJS.Timeout | undefined = undefined;
    interval = 250;

    constructor() {
        this.webSocket = new WebSocket(this.url);
        this.webSocket.onopen = () => {
            console.log('connection opened');
            this.init();
        };
    }

    // init connection
    init = () => {
        if (!this.webSocket) {
            console.log('websocket reconnect init');
            this.reconnect(this.url);
            return;
        }

        if (this.status === WS_STATUS.WS_STATUS_IDLE) {
            this.AuthenConnect();
        }
        let MsgType = commonPb.MsgType;
        readyStateEmit(1);

        this.webSocket.onmessage = e => {
            // reset heartbeat detection
            // this.heartCheck.start();

            const responseData = commonPb.Response.deserializeBinary(e.data);
            const data = responseData.toObject();

            // console.log('----', data);
            if (data.restype !== 0) {
                console.log('error data', data);
                showToast(data.resmsg, 5000);
                // this.webSocket?.close();
                // this.reconnect(this.url);
            }

            switch (data.msgtype) {
                case MsgType.MSGTYPE_KEEPALIVE:
                    let keepAliveS2C = commonPb.KeepAliveS2C.deserializeBinary(
                        data.s2c,
                    );
                    keepAliveS2C = keepAliveS2C.toObject();
                    // console.log('heart beat', keepAliveS2C);
                    // this.heartCheck.start();
                    break;
                case MsgType.MSGTYPE_INITCONNECT:
                    let initConnects2c =
                        commonPb.InitConnectS2C.deserializeBinary(data.s2c);
                    initConnects2c = initConnects2c.toObject();
                    console.log('Authentication succeeded', initConnects2c);
                    break;
                case MsgType.MSGTYPE_GETKL:
                    let klines2c = commonPb.KLineS2C.deserializeBinary(
                        data.s2c,
                    );
                    klines2c = klines2c.toObject();
                    this.onQueryKLine(klines2c);
                    break;
                case MsgType.MSGTYPE_GETSECURITYSNAPSHOT:
                    let snapshotListS2C =
                        commonPb.SnapshotListS2C.deserializeBinary(data.s2c);
                    snapshotListS2C = snapshotListS2C.toObject();
                    this.onQuerySnapshot(snapshotListS2C);
                    break;
                case MsgType.MSGTYPE_GETBASICQOT:
                    let basicQotS2C = commonPb.BasicQotS2C.deserializeBinary(
                        data.s2c,
                    );
                    basicQotS2C = basicQotS2C.toObject();
                    this.onQueryBasicQot(basicQotS2C, false);
                    break;
                case MsgType.MSGTYPE_GETRT:
                    let timeShareS2C = commonPb.TimeShareS2C.deserializeBinary(
                        data.s2c,
                    );
                    timeShareS2C = timeShareS2C.toObject();
                    this.onQueryTimeShare(timeShareS2C, false);
                    break;
                case MsgType.MSGTYPE_GETHISTORYKL:
                    let historyKLS2C = commonPb.HistoryKLS2C.deserializeBinary(
                        data.s2c,
                    );
                    historyKLS2C = historyKLS2C.toObject();
                    this.onQueryHistoryKL(historyKLS2C);
                    break;
                case MsgType.MSGTYPE_GETRTLIST:
                    let listTimeShareS2C =
                        commonPb.TimeShareListS2C.deserializeBinary(data.s2c);
                    listTimeShareS2C = listTimeShareS2C.toObject();
                    this.onQueryListTimeShare(listTimeShareS2C);
                    break;
                case MsgType.MSGTYPE_GETORDERBOOK:
                    let orderBookS2C = commonPb.OrderBookS2C.deserializeBinary(
                        data.s2c,
                    );
                    orderBookS2C = orderBookS2C.toObject();
                    this.onQueryOrderBook(orderBookS2C, false);
                    break;
                case MsgType.MSGTYPE_GETTICKER:
                    let tickerS2C = commonPb.TickerS2C.deserializeBinary(
                        data.s2c,
                    );
                    tickerS2C = tickerS2C.toObject();
                    this.onQueryTickers(tickerS2C, false);
                    break;
                case MsgType.MSGTYPE_GETBROKER:
                    let brokerS2C = commonPb.BrokerS2C.deserializeBinary(
                        data.s2c,
                    );
                    brokerS2C = brokerS2C.toObject();
                    this.onQueryBroker(brokerS2C, false);
                    break;
                case MsgType.MSGTYPE_GETSECURITYSET:
                    let securitySetS2C =
                        commonPb.SecuritySetS2C.deserializeBinary(data.s2c);
                    securitySetS2C = securitySetS2C.toObject();
                    this.onQuerySecuritySet(securitySetS2C);
                    break;
                case MsgType.MSGTYPE_GETPLATESET:
                    let plateSetS2C = commonPb.PlateSetS2C.deserializeBinary(
                        data.s2c,
                    );
                    plateSetS2C = plateSetS2C.toObject();
                    this.onQueryPlateSet(plateSetS2C);
                    break;
                case MsgType.MSGTYPE_GETPLATESECURITY:
                    let plateSecurityS2C =
                        commonPb.PlateSecurityS2C.deserializeBinary(data.s2c);
                    plateSecurityS2C = plateSecurityS2C.toObject();
                    this.onQueryPlateSecurity(plateSecurityS2C);
                    break;
                case MsgType.MSGTYPE_GETINDUSTRYSET:
                    let industryS2C = commonPb.IndustrySetS2C.deserializeBinary(
                        data.s2c,
                    );
                    industryS2C = industryS2C.toObject();
                    this.onQueryIndustry(industryS2C);
                    break;
                case MsgType.MSGTYPE_UPDATEBASICQOT:
                    let basicQotUpdate =
                        commonPb.BasicQotUpdate.deserializeBinary(data.s2c);
                    basicQotUpdate = basicQotUpdate.toObject();
                    // this.onQueryBasicQot(basicQotUpdate, true);
                    if (this.updateBasic) {
                        this.updateBasic = false;
                        this.timerBasic = setTimeout(() => {
                            this.onQueryBasicQot(basicQotUpdate, true);
                            this.updateBasic = true;
                            this.timerBasic && clearTimeout(this.timerBasic);
                        }, this.interval);
                    }
                    break;
                case MsgType.MSGTYPE_UPDATERT:
                    let timeShareUpdate =
                        commonPb.TimeShareUpdate.deserializeBinary(data.s2c);
                    timeShareUpdate = timeShareUpdate.toObject();
                    // this.onQueryTimeShare(timeShareUpdate, true);
                    if (this.updateRT) {
                        this.updateRT = false;
                        this.timerRT = setTimeout(() => {
                            this.onQueryTimeShare(timeShareUpdate, true);
                            this.updateRT = true;
                            this.timerRT && clearTimeout(this.timerRT);
                        }, this.interval);
                    }
                    break;
                case MsgType.MSGTYPE_UPDATEORDERBOOK:
                    let orderBookUpdate =
                        commonPb.OrderBookUpdate.deserializeBinary(data.s2c);
                    orderBookUpdate = orderBookUpdate.toObject();
                    // this.onQueryOrderBook(orderBookUpdate, true);
                    if (this.updateOrderbook) {
                        this.updateOrderbook = false;
                        this.timerOrderbook = setTimeout(() => {
                            this.onQueryOrderBook(orderBookUpdate, true);
                            this.updateOrderbook = true;
                            this.timerOrderbook &&
                                clearTimeout(this.timerOrderbook);
                        }, this.interval);
                    }
                    break;
                case MsgType.MSGTYPE_UPDATEBROKER:
                    let brokerUpdate = commonPb.BrokerUpdate.deserializeBinary(
                        data.s2c,
                    );
                    brokerUpdate = brokerUpdate.toObject();
                    // this.onQueryBroker(brokerUpdate, true);
                    if (this.updateBroker) {
                        this.updateBroker = false;
                        this.timerBroker = setTimeout(() => {
                            this.onQueryBroker(brokerUpdate, true);
                            this.updateBroker = true;
                            this.timerBroker && clearTimeout(this.timerBroker);
                        }, this.interval);
                    }
                    break;
                case MsgType.MSGTYPE_UPDATETICKER:
                    let tickerUpdate = commonPb.TickerUpdate.deserializeBinary(
                        data.s2c,
                    );
                    tickerUpdate = tickerUpdate.toObject();
                    // this.onQueryTickers(tickerUpdate, true);
                    if (this.updateTicker) {
                        this.updateTicker = false;
                        this.timerTicker = setTimeout(() => {
                            this.onQueryTickers(tickerUpdate, true);
                            this.updateTicker = true;
                            this.timerTicker && clearTimeout(this.timerTicker);
                        }, this.interval);
                    }
                    break;
            }
        };

        this.webSocket.onerror = (e: any) => {
            // an error occurred
            console.log('ws.onerror', e);
            this.reconnect(this.url);
            // this.tt && clearTimeout(this.tt);
        };

        this.webSocket.onclose = (e: any) => {
            // connection closed
            console.log('ws.onclose', e);
            this.reconnect(this.url);
            // this.tt && clearTimeout(this.tt);
        };
    };

    commonTimer = (
        updateBool: boolean,
        timer: NodeJS.Timeout | undefined,
        func: any,
    ) => {
        if (updateBool) {
            updateBool = false;
            timer = setTimeout(() => {
                func();
                updateBool = true;
                timer && clearTimeout(timer);
            }, this.interval);
        }
    };

    // send data
    send = (data: string | ArrayBuffer | ArrayBufferView | Blob) => {
        this.webSocket && this.webSocket.send(data);
    };

    reconnect = (url: string) => {
        if (this.lockReconnect) {
            return;
        }
        this.lockReconnect = true;
        this.tt && clearTimeout(this.tt);
        this.tt = setTimeout(() => {
            this.createWebSocket(url);
            this.lockReconnect = false;
        }, 4000);
    };

    createWebSocket = (url: string) => {
        try {
            this.webSocket = new WebSocket(url);
            this.webSocket.onopen = () => {
                // can init only when websocket onopen
                console.log('websocket reconnected');
                this.init();
                // sceneChangeEmit(true);
            };
        } catch (e) {
            this.reconnect(url);
        }
    };

    // Heartbeat detection
    heartCheck: HeartCheck = {
        parent: this,
        timeout: 4000,
        timeoutObj: setTimeout(() => {}, 0),
        serverTimeoutObj: setTimeout(() => {}, 0),
        start: function () {
            this.timeoutObj && clearTimeout(this.timeoutObj);
            this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj);
            this.timeoutObj = setTimeout(() => {
                // Send a heartbeat here, and return a heartbeat message after the backend receives it，
                // Onmessage gets the returned heartbeat, indicating that the connection is normal
                this.parent.sendHeartPackage();
                this.serverTimeoutObj = setTimeout(() => {
                    console.log('can not connect');
                    // this.parent.webSocket!!.close();
                }, this.timeout);
            }, this.timeout);
        },
    };

    // extract public part about request
    commonRequest = (seq: number, type: number, serialize: object) => {
        const requestObj = new commonPb.Request();
        requestObj.setMsgseq(seq);
        requestObj.setMsgtype(type);
        requestObj.setC2s(serialize);

        const serializedData = requestObj.serializeBinary();
        this.webSocket && this.webSocket.send(serializedData);
    };

    // send connect initiation request
    AuthenConnect = () => {
        const initConnectC2S = new commonPb.InitConnectC2S();
        initConnectC2S.setClientid(getUniqueId());
        initConnectC2S.setUserid(2);
        // initConnectC2S.setRsa(getUniqueId());
        initConnectC2S.setRsa(new Date().getTime().toString());
        console.log('RSA====', new Date().getTime().toString());

        this.commonRequest(
            MsgSeg.MSGSEG_INIT,
            commonPb.MsgType.MSGTYPE_INITCONNECT,
            initConnectC2S.serializeBinary(),
        );
    };

    // send heartcheck package
    sendHeartPackage = () => {
        const keepAliveC2S = new commonPb.KeepAliveC2S();
        keepAliveC2S.setTime(new Date().getTime());

        this.commonRequest(
            MsgSeg.MSGSEG_HEART,
            commonPb.MsgType.MSGTYPE_KEEPALIVE,
            keepAliveC2S.serializeBinary(),
        );
    };

    // query snapshot data
    querySnapshot = (codes: string[], onQuerySnapshot: Function) => {
        this.onQuerySnapshot = onQuerySnapshot;
        const snapShotListC2S = new commonPb.SnapshotListC2S();
        const securityList = new commonPb.SecurityList();
        securityList.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        securityList.setCodelistList(codes);
        snapShotListC2S.setSecuritylist(securityList);

        this.commonRequest(
            MsgSeg.MSGSEG_SNAPSHOT,
            commonPb.MsgType.MSGTYPE_GETSECURITYSNAPSHOT,
            snapShotListC2S.serializeBinary(),
        );
    };

    // query basicqot data
    queryBasicQot = (codes: string[], onQueryBasicQot: Function) => {
        this.onQueryBasicQot = onQueryBasicQot;
        const basicQotC2S = new commonPb.BasicQotC2S();
        const securityList = new commonPb.SecurityList();
        securityList.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        securityList.setCodelistList(codes);
        basicQotC2S.setSecuritylist(securityList);

        this.commonRequest(
            MsgSeg.MSGSEG_BASICQOT,
            commonPb.MsgType.MSGTYPE_GETBASICQOT,
            basicQotC2S.serializeBinary(),
        );
    };

    // query kline data
    queryKLine = (
        code: string,
        klType: number,
        reqNum: number,
        onQueryKLine: Function,
    ) => {
        this.onQueryKLine = onQueryKLine;
        const security = new commonPb.Security();
        security.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        security.setCode(code);

        const kLineC2S = new commonPb.KLineC2S();
        kLineC2S.setRehabtype(commonPb.RehabType.REHABTYPE_NONE);
        kLineC2S.setKltype(klType);
        kLineC2S.setSecurity(security);
        kLineC2S.setReqnum(reqNum);

        this.commonRequest(
            MsgSeg.MSGSEG_KLINE,
            commonPb.MsgType.MSGTYPE_GETKL,
            kLineC2S.serializeBinary(),
        );
    };

    // query timeShare data
    queryTimeShare = (code: string, onQueryTimeShare: Function) => {
        this.onQueryTimeShare = onQueryTimeShare;
        const security = new commonPb.Security();
        security.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        security.setCode(code);

        const timeShareC2S = new commonPb.TimeShareC2S();
        timeShareC2S.setSecurity(security);

        this.commonRequest(
            MsgSeg.MSGSEG_TIMESHARE,
            commonPb.MsgType.MSGTYPE_GETRT,
            timeShareC2S.serializeBinary(),
        );
    };

    // query historyKL data
    queryHistoryKL = (
        code: string,
        KLType: number,
        endTime: string,
        onQueryHistoryKL: Function,
        count?: number,
        beginTime?: string,
    ) => {
        this.onQueryHistoryKL = onQueryHistoryKL;
        const security = new commonPb.Security();
        security.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        security.setCode(code);

        const historyKLC2S = new commonPb.HistoryKLC2S();
        historyKLC2S.setRehabtype(commonPb.RehabType.REHABTYPE_NONE);
        historyKLC2S.setKltype(KLType);
        historyKLC2S.setSecurity(security);
        beginTime && historyKLC2S.setBegintime(beginTime);
        historyKLC2S.setEndtime(endTime);
        count && historyKLC2S.setMaxackklnum(count);

        this.commonRequest(
            MsgSeg.MSGSEG_HISTORYKL,
            commonPb.MsgType.MSGTYPE_GETHISTORYKL,
            historyKLC2S.serializeBinary(),
        );
    };

    // query multiple timeShare data
    queryListTimeShare = (codes: string[], onQueryListTimeShare: Function) => {
        this.onQueryListTimeShare = onQueryListTimeShare;
        const timeShareListC2S = new commonPb.TimeShareListC2S();
        const securityList = new commonPb.SecurityList();
        securityList.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        securityList.setCodelistList(codes);
        timeShareListC2S.setSecuritylist(securityList);

        this.commonRequest(
            MsgSeg.MSGSEG_LIST_TIMESHARE,
            commonPb.MsgType.MSGTYPE_GETRTLIST,
            timeShareListC2S.serializeBinary(),
        );
    };

    // query timeShare data
    queryOrderBook = (
        code: string,
        count: number,
        onQueryOrderBook: Function,
    ) => {
        this.onQueryOrderBook = onQueryOrderBook;
        const security = new commonPb.Security();
        security.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        security.setCode(code);

        const orderBookC2S = new commonPb.OrderBookC2S();
        orderBookC2S.setSecurity(security);
        orderBookC2S.setNum(count);

        this.commonRequest(
            MsgSeg.MSGSEG_ORDERBOOK,
            commonPb.MsgType.MSGTYPE_GETORDERBOOK,
            orderBookC2S.serializeBinary(),
        );
    };

    // query ticker data
    queryTickers = (
        code: string,
        count: number,
        onQueryTickers: Function,
        lastSeqNo?: number,
    ) => {
        this.onQueryTickers = onQueryTickers;
        const security = new commonPb.Security();
        security.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        security.setCode(code);

        const tickerC2S = new commonPb.TickerC2S();
        tickerC2S.setSecurity(security);
        tickerC2S.setNum(count);
        tickerC2S.setLastseqno(lastSeqNo);

        this.commonRequest(
            MsgSeg.MSGSEG_TICKER,
            commonPb.MsgType.MSGTYPE_GETTICKER,
            tickerC2S.serializeBinary(),
        );
    };

    // query broker data
    queryBroker = (code: string, onQueryBroker: Function) => {
        this.onQueryBroker = onQueryBroker;
        const security = new commonPb.Security();
        security.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        security.setCode(code);

        const brokerC2S = new commonPb.BrokerC2S();
        brokerC2S.setSecurity(security);

        this.commonRequest(
            MsgSeg.MEGSEG_BROKER,
            commonPb.MsgType.MSGTYPE_GETBROKER,
            brokerC2S.serializeBinary(),
        );
    };

    // query page data
    // desc value false: asc; true: desc
    // querySecuritySet = (
    //     limit: number,
    //     page: number,
    //     sortField: number,
    //     desc: boolean,
    //     onQuerySecuritySet: Function,
    // ) => {
    //     this.onQuerySecuritySet = onQuerySecuritySet;
    //     const pageRequest = new commonPb.PageRequest();
    //     pageRequest.setLimit(limit);
    //     pageRequest.setPage(page);
    //     pageRequest.setSortfiled(sortField);
    //     pageRequest.setDesc(desc);

    //     const securitySetC2S = new commonPb.SecuritySetC2S();
    //     securitySetC2S.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
    //     securitySetC2S.setPage(pageRequest);

    //     this.commonRequest(
    //         MsgSeg.MEGSEG_SECURITY_SET,
    //         commonPb.MsgType.MSGTYPE_GETSECURITYSET,
    //         securitySetC2S.serializeBinary(),
    //     );
    // };

    // queryPlateSecuritySet = (
    //     limit: number,
    //     page: number,
    //     sortField: number,
    //     desc: boolean,
    //     onQuerySecuritySet: Function,
    // ) => {
    //     this.onQuerySecuritySet = onQuerySecuritySet;
    //     const pageRequest = new commonPb.PageRequest();
    //     pageRequest.setLimit(limit);
    //     pageRequest.setPage(page);
    //     pageRequest.setSortfiled(sortField);
    //     pageRequest.setDesc(desc);

    //     const plateSecuritySetC2S = new commonPb.PlateSecurityC2S();
    //     plateSecuritySetC2S.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
    //     plateSecuritySetC2S.setPage(pageRequest);

    //     this.commonRequest(
    //         MsgSeg.MEGSEG_SECURITY_SET,
    //         commonPb.MsgType.MSGTYPE_GETPLATESECURITY,
    //         plateSecuritySetC2S.serializeBinary(),
    //     );
    // };

    // query plate data
    queryPlateSet = (
        sortField: number,
        desc: boolean,
        plateSetType: number,
        onQueryPlateSet: Function,
        limit?: number,
        page?: number,
    ) => {
        this.onQueryPlateSet = onQueryPlateSet;
        const pageRequest = new commonPb.PageRequest();
        pageRequest.setLimit(limit);
        pageRequest.setPage(page);
        pageRequest.setSortfiled(sortField);
        pageRequest.setDesc(desc);

        const plateSetC2S = new commonPb.PlateSetC2S();
        plateSetC2S.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        plateSetC2S.setPlatesettype(plateSetType);
        plateSetC2S.setPage(pageRequest);

        this.commonRequest(
            MsgSeg.MEGSEG_PLATE_SET,
            commonPb.MsgType.MSGTYPE_GETPLATESET,
            plateSetC2S.serializeBinary(),
        );
    };

    // query plate security data
    // BK1910 means HK security, HK hotlist also use this api
    queryPlateSecurity = (
        limit: number,
        page: number,
        sortField: number,
        desc: boolean,
        plateSecurityType: string,
        onQueryPlateSecurity: Function,
    ) => {
        this.onQueryPlateSecurity = onQueryPlateSecurity;
        const pageRequest = new commonPb.PageRequest();
        pageRequest.setLimit(limit);
        pageRequest.setPage(page);
        pageRequest.setSortfiled(sortField);
        pageRequest.setDesc(desc);

        const security = new commonPb.Security();
        security.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        security.setCode(plateSecurityType);

        const plateSecurityC2S = new commonPb.PlateSecurityC2S();
        plateSecurityC2S.setPlate(security);
        plateSecurityC2S.setPage(pageRequest);

        this.commonRequest(
            MsgSeg.MEGSEG_PLATE_SECURITY,
            commonPb.MsgType.MSGTYPE_GETPLATESECURITY,
            plateSecurityC2S.serializeBinary(),
        );
    };

    queryIndustry = (
        // limit: number,
        // page: number,
        sortField: number,
        desc: boolean,
        onQueryIndustry: Function,
    ) => {
        this.onQueryIndustry = onQueryIndustry;
        const pageRequest = new commonPb.PageRequest();
        // pageRequest.setLimit(limit);
        // pageRequest.setPage(page);
        pageRequest.setSortfiled(sortField);
        pageRequest.setDesc(desc);

        const industryC2S = new commonPb.IndustrySetC2S();
        industryC2S.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        industryC2S.setPage(pageRequest);

        this.commonRequest(
            MsgSeg.MEGSEG_INDUSTRY,
            commonPb.MsgType.MSGTYPE_GETINDUSTRYSET,
            industryC2S.serializeBinary(),
        );
    };

    // subscribe data
    subMessage = (codes: string[], typeList: number[], subBool = true) => {
        const subC2S = new commonPb.SubC2S();
        const securityList = new commonPb.SecurityList();
        securityList.setMarket(commonPb.QotMarket.QOTMARKET_HK_SECURITY);
        securityList.setCodelistList(codes);

        subC2S.setSecuritylist(securityList);
        subC2S.setSubtypelistList(typeList);
        subC2S.setIssuborunsub(subBool);
        subC2S.setRegpushrehabtypelist(0); // regPushRehabTypeList  can omit
        subC2S.setIsunsuball(false);

        this.commonRequest(
            MsgSeg.MEGSEG_SUB,
            commonPb.MsgType.MSGTYPE_SUB,
            subC2S.serializeBinary(),
        );
    };
}

const ws = new CustomizeWebSocket();

export { commonPb };
export default ws;
