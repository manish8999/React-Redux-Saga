export const fetchTotalScore = async () => {
    try {
      const response = await fetch('https://fgb-prod.signalz.ai/Admin/Samplecalculatetotalscore');
      if (!response.ok) {
        throw new Error('Failed to fetch total score');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching total score:', error);
      throw error;
    }
  };
  