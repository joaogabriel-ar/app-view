import ReactEcharts from 'echarts-for-react';
import { Card } from '../../styles/styles';

export default function ChartCard() {

    const getOption = () => ({
        title: {
            text: 'Sales Data',
        },
        tooltip: {},
        xAxis: {
            data: ['Shirts', 'Sweaters', 'Jeans', 'Shoes', 'Socks'],
        },
        yAxis: {},
        series: [
            {
                name: 'Sales',
                type: 'bar',
                data: [5, 20, 36, 10, 10],
            },
        ],
    });

    return (
        <Card>
            <ReactEcharts option={getOption()} style={{ height: 200, width: '100%' }} />
        </Card>
    )

}