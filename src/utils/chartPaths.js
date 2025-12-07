// Helper function to construct chart paths with proper PUBLIC_URL
export const getChartPath = (fileName) => {
  const publicUrl = process.env.PUBLIC_URL || '';
  return `${publicUrl}/charts/${fileName}`;
};
