export default function sortCountries(data: any) {
  return data.sort((a: any, b: any) => {
    if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
      return 1;
    } else if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  });
}
