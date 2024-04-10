// export const fetchTotalScore = async () => {
//     try {
//       const response = await fetch('backendapi's');
//       if (!response.ok) {
//         throw new Error('Failed to fetch total score');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching total score:', error);
//       throw error;
//     }
//   };

export const fetchTotalScore = async () => {
  try {
    const data = {
      "success": true,
      "data": [
        {
          "userId": "7ea12a64-f649-49b2-9eed-e018b3dc569b",
          "score": 10131.75,
          "username": "pringh23@gmail.com",
          "tier": "Platinum",
          "fullName": "Prodyot Ghosh",
          "CompletedVideo": 222
        },
        {
          "userId": "9083474f-1507-47d4-8f1a-7852b62b8a4e",
          "score": 17229,
          "username": "agarwalpriyanka2697@gmail.com",
          "tier": "Platinum",
          "fullName": "Priyanka Goel",
          "CompletedVideo": 256
        }
      ],
      "message": "Dashboard data fetched successfully"
    }
    return data;
  } catch (error) {
    console.error('Error fetching total score:', error);
    throw error;
  }
};
