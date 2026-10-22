import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

// Chart.js가 그려지기 위해 필요한 컴포넌트들을 등록
ChartJS.register(
  Title, // 제목 (차트 제목)
  Tooltip, // 툴팁 (차트 툴팁)
  Legend, // 범례 (차트 범례)
  CategoryScale, // 카테고리 축
  LinearScale, // 선형 축
  BarElement, // 바 요소 (Bar 차트)
);

export default function BarChart({
  salesData,
}: {
  salesData: {
    month: string;
    sales: number;
    profit: number;
    expenses: number;
  }[];
}) {
  // Bar 차트 데이터
  const barChartData = {
    labels: salesData.map((d) => d.month),
    datasets: [
      {
        label: '지출',
        data: salesData.map((d) => d.expenses),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  // 차트 옵션
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `${dayjs().format('YYYY년')} 매출 및 순이익 현황`,
      },
    },
  };

  return <Bar data={barChartData} options={chartOptions} />;
}
