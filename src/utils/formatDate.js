const MONTH_ABBR = {
  january: "Jan",
  jan: "Jan",
  february: "Feb",
  feb: "Feb",
  march: "Mar",
  mar: "Mar",
  april: "Apr",
  apr: "Apr",
  may: "May",
  june: "Jun",
  jun: "Jun",
  july: "Jul",
  jul: "Jul",
  august: "Aug",
  aug: "Aug",
  september: "Sep",
  sep: "Sep",
  october: "Oct",
  oct: "Oct",
  november: "Nov",
  nov: "Nov",
  december: "Dec",
  dec: "Dec",
};

export function formatDate(date) {
  if (!date) return "";
  const value = String(date).trim();
  if (value.toLowerCase() === "present") return "Present";

  const match = value.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (match) {
    const month = MONTH_ABBR[match[1].toLowerCase()];
    if (month) return `${month} ${match[2]}`;
  }

  return value;
}

export function formatDateRange(startDate, endDate) {
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
}
