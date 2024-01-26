export default function truncate(str: string, start = 3, end = 3): string {
  return str.substring(0, start) + "..." + str.substring(str.length - end);
}
