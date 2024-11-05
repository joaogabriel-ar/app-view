import ReactEcharts from 'echarts-for-react';
import { Card } from '../../styles/styles';

export default function ChartCard() {

    const getOption = () => {
        // Calculate the total sum of values in the data array
        const data = [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
        ];
        const total = data.reduce((sum, item) => sum + item.value, 0);
    
        return {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                right: '5%',
                top: 'center',
                width: '20%',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'center',
                        fontSize: 18,
                        fontWeight: 'bold',
                        formatter: `${total}`
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 10,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: data
                }
            ]
        };
    };
    
    

    return (
        <Card>
            <ReactEcharts option={getOption()} style={{ height: 250, width: '100%' }} />
        </Card>
    )

}