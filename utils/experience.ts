const getTotalExperience = (startDate: Date) => {
  const today = new Date();

  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const endMonth = today.getFullYear() * 12 + today.getMonth();
  const monthInterval = endMonth - startMonth;

  const yearsOfExperience = Math.floor(monthInterval / 12);
  const monthsOfExperience = monthInterval % 12;

  const monthsExperience =
    monthsOfExperience !== 0 ? ` ${monthsOfExperience} months` : "";

  return `${yearsOfExperience} years${monthsExperience}`;
};

export { getTotalExperience };
