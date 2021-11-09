const getMonthYear = (startYear: number, startMonth: number) => {
  const startDate = new Date(startYear, startMonth);
  const todayDate = new Date();
  const years = Math.abs(todayDate.getFullYear() - startDate.getFullYear());
  const totalTodayMonths = 12 * todayDate.getFullYear() + todayDate.getMonth();
  const totalStartMonths = 12 * startDate.getFullYear() + startDate.getMonth();
  const months = Math.abs(totalTodayMonths - totalStartMonths);

  return {
    years,
    months,
  };
};

export { getMonthYear };
