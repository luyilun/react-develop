import React from 'react';
import PropTypes from 'prop-types';
import { Axis, Chart, Geom, Tooltip, Coord, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

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
      legendConfig: PropTypes.object, // Legend 组件的属性配置
      type: PropTypes.string, // 区分单条柱（single)\ 多条柱（more）\直方图（histogram）
      transformConfig: PropTypes.object, // 只有不是单条柱（single）使用
  };
  static defaultProps = {
      xKey: 'x',
      yKey: 'y',
      chartConfig: {
          forceFit: true,
          padding: 'auto'
      },
      type: 'single'
  };
  render() {
      const {
          height,
          type,
          xKey,
          yKey,
          chartConfig,
          axisConfig,
          tooltipConfig,
          geomConfig,
          coordConfig,
          legendConfig,
          transformConfig
      } = this.props;
      let { data } = this.props;
      const xAxisConfig = axisConfig ? axisConfig[xKey] : null;
      const yAxisConfig = axisConfig ? axisConfig[yKey] : null;
      if (type !== 'single') {
          if (transformConfig) {
              const ds =  new DataSet();
              const dv = ds.createView().source(data);
              dv.transform(transformConfig);
              data = dv;
          } else {
              return '数据配置有问题,请检查配置';
          }
      }
      let geom = {
          type: 'interval',
          position: `${xKey}*${yKey}`
      };
      if (geomConfig && geomConfig.type) {
          geom = Object.assign(geom, geomConfig);
      }
      return (
          <Chart height={height} data={data} {...chartConfig}>
              {coordConfig ? <Coord {...coordConfig} /> : null}
              {legendConfig ? <Legend {...legendConfig} /> : null}
              <Axis name={xKey} {...xAxisConfig} />
              <Axis name={yKey} {...yAxisConfig} />
              <Tooltip {...tooltipConfig} />
              <Geom {...geom} />
          </Chart>
      );
  }
}
