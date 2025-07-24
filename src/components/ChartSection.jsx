import { Box, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

const ChartSection = () => {
  const xAxis = [
    {
      data: [1, 2, 3, 5, 8, 10],
    },
  ];

  const series = [
    {
      data: [2, 5.8, 2, 8.2, 1.8, 5],
      color: '#33c6dcff',
      curve: 'catmullRom',
      showMark: true,
    },
  ];

  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h6" gutterBottom sx={{fontWeight: 600}}>
        Graphique (avec @mui/x-charts)
      </Typography>
      <Box sx={{ width: 'fit-content' }}>
        <LineChart
          width={500}
          height={300}
          xAxis={xAxis}
          series={series}
        />
      </Box>
    </Box>
  );
};

export default ChartSection;
