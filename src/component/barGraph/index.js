import React from 'react';
import PropTypes from 'prop-types';
import {
    Axis, Chart, Geom, Tooltip, Coord,
} from 'bizcharts';

export default class BarGraph extends React.Component {
    static propTypes = {
        className: PropTypes.string, // 图表父容器的 css 类名
        xKey: PropTypes.string, // x 轴的数据键值
        yKey: PropTypes.string, // y 轴的数据键值
        data: PropTypes.arrayOf(PropTypes.object), // 图表数据,例 [{}]
        chartConfig: PropTypes.object, // Chart 组件的其它属性配置
        axisConfig: PropTypes.object, // Axis 组件的其它属性配置
        geomConfig: PropTypes.object, // Geom 组件的其它属性配置
        tooltipConfig: PropTypes.object, // Tooltip 组件的其它属性配置
        coordConfig: PropTypes.object, // Coord 组件的属性配置
    };

    static defaultProps = {
        xKey: 'x',
        yKey: 'y',
        chartConfig: {
            forceFit: true,
            padding: 'auto',
        },
    };

    render() {
        const {
            height,
            data,
            xKey,
            yKey,
            chartConfig,
            axisConfig,
            tooltipConfig,
            geomConfig,
            coordConfig,
        } = this.props;
        const xAxisConfig = axisConfig ? axisConfig[xKey] : null;
        const yAxisConfig = axisConfig ? axisConfig[yKey] : null;
        return (
            <Chart
                height={height}
                data={data}
                {...chartConfig}
            >
                {coordConfig ? <Coord {...coordConfig} /> : null}
                <Axis name={xKey} {...xAxisConfig} />
                <Axis name={yKey} {...yAxisConfig} />
                <Tooltip {...tooltipConfig} />
                <Geom type="interval" position={`${xKey}*${yKey}`} {...geomConfig} />
            </Chart>
        );
    }
}
