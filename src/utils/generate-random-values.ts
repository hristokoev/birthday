
interface GenerateRandomValues {
	(size: number, min: number, max: number): number[];
}

// Function to generate random values
const generateRandomValues: GenerateRandomValues = (size, min, max) => {
	return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

export default generateRandomValues;