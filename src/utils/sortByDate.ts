export function sortByDate<DTO>(param: DateKey<DTO>, d1: DTO, d2: DTO): number {
  const p1 = d1[param];
  const p2 = d2[param];

  const p1Time: number = p1 instanceof Date ? p1.getTime() : Date.now();
  const p2Time: number = p2 instanceof Date ? p2.getTime() : Date.now();

  return p2Time - p1Time;
}
