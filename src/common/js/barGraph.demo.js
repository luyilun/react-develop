export default {
    basicSingle: { // 基础柱状图
        data: [
            { xx: '上', yy: 10 },
            { xx: '中', yy: 10 },
            { xx: '下', yy: 10 }
        ],
        config: {
            xKey: 'xx',
            yKey: 'yy',
            type: 'single'
        }
    },
    rangeSingle: { // 区间柱状图
        data: [
            { xx: '上', yy: [5, 10] },
            { xx: '中', yy: [2, 15] },
            { xx: '下', yy: [1, 32] }
        ],
        config: {
            xKey: 'xx',
            yKey: 'yy',
            type: 'single'
        }
    },
    acrossSingle: { // 基础条形图
        data: [
            { xx: '上', yy: 20 },
            { xx: '中', yy: 10 },
            { xx: '下', yy: 15 }
        ],
        config: {
            xKey: 'xx',
            yKey: 'yy',
            type: 'single',
            coordConfig: {
                transpose: true
            },
        }
    },
    acrossMore: { // 分组条形图
        data: [
            { xx: '上', yy: 20, jj: 15 },
            { xx: '中', yy: 10, jj: 5 },
            { xx: '下', yy: 15, jj: 10 }
        ],
        config: {
            xKey: 'xx',
            yKey: 'yy',
            type: 'more',
            transformConfig: {
                type: 'fold',
                fields: ['yy', 'jj'],
                key: 'type',
                value: 'yy'
            },
            coordConfig: {
                transpose: true
            },
            geomConfig: {
                color: 'type',
                adjust: [{ type: 'dodge', marginRatio: 1 / 32 }]
            },
            legendConfig: {}
        }
    },
    verticalMore: { // 分组柱状图
        data: [
            { xx: '上', yy: 20, jj: 15, hh: 10 },
            { xx: '中', yy: 10, jj: 5, hh: 1 },
            { xx: '下', yy: 15, jj: 10, hh: 5 }
        ],
        config: {
            xKey: '月',
            yKey: '降雨量',
            type: 'more',
            transformConfig: {
                type: 'fold',
                fields: ['yy', 'jj', 'hh'],
                key: '月',
                value: '降雨量'
            },
            geomConfig: {
                color: 'xx',
                adjust: [{ type: 'dodge', marginRatio: 1 / 32 }]
            },
            legendConfig: {}
        }
    },
    histogram: { // 直方图
        data: [{ xx: 1.2 }, { xx: 2.5 }, { xx: 3.6 }],
        config: {
            xKey: 'xx',
            yKey: 'count',
            type: 'histogram',
            transformConfig: {
                type: 'bin.histogram',
                fields: 'xx',
                binWidth: 2,
                as: ['xx', 'count']
            }
        }
    },
    rangeMore: { // 区间条形图
        data: [
            { xx: '上', yy: 20, jj: 15, hh: 10 },
            { xx: '中', yy: 10, jj: 5, hh: 1 },
            { xx: '下', yy: 15, jj: 10, hh: 5 }
        ],
        config: {
            xKey: 'xx',
            yKey: 'range',
            type: 'more',
            transformConfig: {
                type: 'map',
                callback(row) {
                    row.range = [row.yy, row.jj];
                    return row;
                }
            }
        }
    },
    stackedMore: { // 堆叠条形图
        data: [
            {
                State: 'WY',
                '小于5岁': 25635,
                '5至13岁': 1890,
                '14至17岁': 9314
            },
            {
                State: 'DC',
                '小于5岁': 30352,
                '5至13岁': 20439,
                '14至17岁': 10225
            },
            {
                State: 'VT',
                '小于5岁': 38253,
                '5至13岁': 42538,
                '14至17岁': 15757
            },
        ],
        config: {
            xKey: 'State',
            yKey: '人数',
            type: 'more',
            transformConfig: {
                type: 'fold',
                fields: ['小于五岁', '5至13岁', '14至17岁'],
                key: '年龄',
                value: '人数',
                retains: ['State']
            },
            coordConfig: {
                transpose: true
            },
            geomConfig: {
                color: '年龄'
            }
        }
    },
    stackedPercentMore: { // 百分比堆叠柱状图
        data: [
            {
                country: 'Europe',
                year: '1750',
                value: 163
            },
            {
                country: 'Europe',
                year: '1800',
                value: 203
            },
            {
                country: 'Europe',
                year: '1850',
                value: 276
            },
            {
                country: 'Asia',
                year: '1750',
                value: 502
            },
            {
                country: 'Asia',
                year: '1800',
                value: 635
            },
            {
                country: 'Asia',
                year: '1850',
                value: 809
            }
        ],
        config: {
            xKey: 'year',
            yKey: 'percent',
            type: 'more',
            transformConfig: {
                type: 'percent',
                field: 'value',
                dimension: 'country',
                groupBy: ['year'],
                as: 'percent'
            },
            chartConfig: {
                forceFit: true,
                padding: 'auto',
                scale: {
                    percent: {
                        min: 0,
                        formatter(val) {
                            return (val * 100).toFixed(2) + '%';
                        }
                    }
                }
            },
            geomConfig: {
                type: 'intervalStack',
                position: 'year*percent',
                color: 'country'
            },
            legendConfig: {}
        }
    }
};