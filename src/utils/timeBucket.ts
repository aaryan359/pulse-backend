// utils/timeBucket.ts
export function get2MinuteBucket(date: Date) {
    const ms = date.getTime();
    const bucketMs = 2 * 60 * 1000;
    return new Date(Math.floor(ms / bucketMs) * bucketMs);
}