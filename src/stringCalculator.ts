export function add(numbers: string): number {
  if (!numbers) return 0; // Handle empty string case

  let delimiter = /[,:;\n]/; // Default delimiters: comma, semicolon, colon, and newline

  // Check for custom delimiter syntax: "//[delimiter]\n[numbers]"
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].substring(2)); // Extract custom delimiter
    numbers = parts.slice(1).join("\n"); // Remove delimiter declaration
  }

  const numArray = numbers.split(delimiter).map(Number);

  // Check for negative numbers
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
