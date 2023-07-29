export const filteredData = (data: any[], status: string, param: string) =>
  data?.filter((item: any) => item[param] === status);
