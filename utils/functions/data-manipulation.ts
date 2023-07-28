export const filteredData = (data: any[], status: string) =>
  data?.filter((doc: any) => doc.status === status);
