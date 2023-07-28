export const format_date_time = (date: Date | string | number) => {
  return new Date(date)
    .toISOString()
    .replace(/-/g, "/")
    .replace("T", " ")
    .split(".")[0];
};

export const format_month_date = (date: Date | string | number) => {
  new Date(date).toDateString().replace(/-/g, "/").split("T")[0];
};
