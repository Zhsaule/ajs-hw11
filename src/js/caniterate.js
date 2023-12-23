export default function canIterate(obj) {
  return obj !== undefined && obj !== null && typeof obj[Symbol.iterator] === 'function';
}