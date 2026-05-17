export interface CarData {
  manufacturer: string;
  model: string;
  type: string;
  price: number;
  engineSize: number;
  horsepower: number;
  wheelbase: number;
  width: number;
  length: number;
  curbWeight: number;
  fuelCapacity: number;
  fuelEfficiency: number;
}

export const CAR_DATASET: CarData[] = [
  { manufacturer: "Acura", model: "Integra", type: "Passenger", price: 21.5, engineSize: 1.8, horsepower: 140, wheelbase: 101.2, width: 67.3, length: 172.4, curbWeight: 2.639, fuelCapacity: 13.2, fuelEfficiency: 28 },
  { manufacturer: "Acura", model: "TL", type: "Passenger", price: 28.4, engineSize: 3.2, horsepower: 225, wheelbase: 108.1, width: 70.3, length: 192.9, curbWeight: 3.517, fuelCapacity: 17.2, fuelEfficiency: 25 },
  { manufacturer: "Acura", model: "RL", type: "Passenger", price: 42, engineSize: 3.5, horsepower: 210, wheelbase: 114.6, width: 71.4, length: 196.6, curbWeight: 3.85, fuelCapacity: 18, fuelEfficiency: 22 },
  { manufacturer: "Audi", model: "A4", type: "Passenger", price: 23.99, engineSize: 1.8, horsepower: 150, wheelbase: 102.6, width: 68.2, length: 178, curbWeight: 2.998, fuelCapacity: 16.4, fuelEfficiency: 27 },
  { manufacturer: "Audi", model: "A6", type: "Passenger", price: 33.95, engineSize: 2.8, horsepower: 200, wheelbase: 108.7, width: 76.1, length: 192, curbWeight: 3.561, fuelCapacity: 18.5, fuelEfficiency: 22 },
  { manufacturer: "Audi", model: "A8", type: "Passenger", price: 62, engineSize: 4.2, horsepower: 310, wheelbase: 113, width: 74, length: 198.2, curbWeight: 3.902, fuelCapacity: 23.7, fuelEfficiency: 21 },
  { manufacturer: "BMW", model: "323i", type: "Passenger", price: 26.99, engineSize: 2.5, horsepower: 170, wheelbase: 107.3, width: 68.4, length: 176, curbWeight: 3.179, fuelCapacity: 16.6, fuelEfficiency: 26 },
  { manufacturer: "BMW", model: "328i", type: "Passenger", price: 33.4, engineSize: 2.8, horsepower: 193, wheelbase: 107.3, width: 68.5, length: 176, curbWeight: 3.197, fuelCapacity: 16.6, fuelEfficiency: 24 },
  { manufacturer: "BMW", model: "528i", type: "Passenger", price: 38.9, engineSize: 2.8, horsepower: 193, wheelbase: 111.4, width: 70.9, length: 188, curbWeight: 3.472, fuelCapacity: 18.5, fuelEfficiency: 25 },
  { manufacturer: "Buick", model: "Century", type: "Passenger", price: 21.975, engineSize: 3.1, horsepower: 175, wheelbase: 109, width: 72.7, length: 194.6, curbWeight: 3.368, fuelCapacity: 17.5, fuelEfficiency: 25 },
  { manufacturer: "Buick", model: "Regal", type: "Passenger", price: 25.3, engineSize: 3.8, horsepower: 240, wheelbase: 109, width: 72.7, length: 196.2, curbWeight: 3.543, fuelCapacity: 17.5, fuelEfficiency: 23 },
  { manufacturer: "Buick", model: "Park Avenue", type: "Passenger", price: 31.965, engineSize: 3.8, horsepower: 205, wheelbase: 113.8, width: 74.7, length: 206.8, curbWeight: 3.778, fuelCapacity: 18.5, fuelEfficiency: 24 },
  { manufacturer: "Buick", model: "LeSabre", type: "Passenger", price: 27.885, engineSize: 3.8, horsepower: 205, wheelbase: 112.2, width: 73.5, length: 200, curbWeight: 3.591, fuelCapacity: 17.5, fuelEfficiency: 25 },
  { manufacturer: "Cadillac", model: "DeVille", type: "Passenger", price: 39.895, engineSize: 4.6, horsepower: 275, wheelbase: 115.3, width: 74.5, length: 207.2, curbWeight: 3.978, fuelCapacity: 18.5, fuelEfficiency: 22 },
  { manufacturer: "Cadillac", model: "Seville", type: "Passenger", price: 44.475, engineSize: 4.6, horsepower: 275, wheelbase: 112.2, width: 75, length: 201, curbWeight: 4.0, fuelCapacity: 18.5, fuelEfficiency: 22 },
  { manufacturer: "Cadillac", model: "Eldorado", type: "Passenger", price: 39.665, engineSize: 4.6, horsepower: 275, wheelbase: 108, width: 75.5, length: 200.6, curbWeight: 3.843, fuelCapacity: 19, fuelEfficiency: 22 },
  { manufacturer: "Cadillac", model: "Catera", type: "Passenger", price: 31.01, engineSize: 3, horsepower: 200, wheelbase: 107.4, width: 70.3, length: 194.8, curbWeight: 3.77, fuelCapacity: 18, fuelEfficiency: 22 },
  { manufacturer: "Cadillac", model: "Escalade", type: "Car", price: 46.225, engineSize: 5.7, horsepower: 255, wheelbase: 117.5, width: 77, length: 201.2, curbWeight: 5.572, fuelCapacity: 30, fuelEfficiency: 15 },
  { manufacturer: "Chevrolet", model: "Cavalier", type: "Passenger", price: 13.26, engineSize: 2.2, horsepower: 115, wheelbase: 104.1, width: 67.9, length: 180.9, curbWeight: 2.676, fuelCapacity: 14.3, fuelEfficiency: 27 },
  { manufacturer: "Chevrolet", model: "Malibu", type: "Passenger", price: 16.535, engineSize: 3.1, horsepower: 170, wheelbase: 107, width: 69.4, length: 190.4, curbWeight: 3.051, fuelCapacity: 15, fuelEfficiency: 25 },
  { manufacturer: "Chevrolet", model: "Lumina", type: "Passenger", price: 18.89, engineSize: 3.1, horsepower: 175, wheelbase: 107.5, width: 72.5, length: 200.9, curbWeight: 3.33, fuelCapacity: 16.6, fuelEfficiency: 25 },
  { manufacturer: "Chevrolet", model: "Monte Carlo", type: "Passenger", price: 19.39, engineSize: 3.4, horsepower: 180, wheelbase: 110.5, width: 72.7, length: 197.9, curbWeight: 3.34, fuelCapacity: 17, fuelEfficiency: 27 },
  { manufacturer: "Chevrolet", model: "Camaro", type: "Passenger", price: 24.34, engineSize: 3.8, horsepower: 200, wheelbase: 101.1, width: 74.1, length: 193.2, curbWeight: 3.5, fuelCapacity: 16.8, fuelEfficiency: 25 },
  { manufacturer: "Chevrolet", model: "Corvette", type: "Passenger", price: 45.705, engineSize: 5.7, horsepower: 345, wheelbase: 104.5, width: 73.6, length: 179.7, curbWeight: 3.21, fuelCapacity: 19.1, fuelEfficiency: 22 },
  { manufacturer: "Chevrolet", model: "Prizm", type: "Passenger", price: 13.96, engineSize: 1.8, horsepower: 120, wheelbase: 97.1, width: 66.7, length: 174.3, curbWeight: 2.398, fuelCapacity: 13.2, fuelEfficiency: 33 },
  { manufacturer: "Chevrolet", model: "Metro", type: "Passenger", price: 9.235, engineSize: 1, horsepower: 55, wheelbase: 93.1, width: 62.6, length: 149.4, curbWeight: 1.895, fuelCapacity: 10.3, fuelEfficiency: 45 },
  { manufacturer: "Chevrolet", model: "Impala", type: "Passenger", price: 18.89, engineSize: 3.4, horsepower: 180, wheelbase: 110.5, width: 73, length: 200, curbWeight: 3.389, fuelCapacity: 17, fuelEfficiency: 27 },
  { manufacturer: "Chrysler", model: "Sebring Coupe", type: "Passenger", price: 19.84, engineSize: 2.5, horsepower: 163, wheelbase: 103.7, width: 69.7, length: 190.9, curbWeight: 2.967, fuelCapacity: 15.9, fuelEfficiency: 24 },
  { manufacturer: "Chrysler", model: "Sebring Conv.", type: "Passenger", price: 24.495, engineSize: 2.5, horsepower: 168, wheelbase: 106, width: 69.2, length: 193, curbWeight: 3.332, fuelCapacity: 16, fuelEfficiency: 24 },
  { manufacturer: "Chrysler", model: "Concorde", type: "Passenger", price: 22.245, engineSize: 2.7, horsepower: 200, wheelbase: 113, width: 74.4, length: 209.1, curbWeight: 3.452, fuelCapacity: 17, fuelEfficiency: 26 },
  { manufacturer: "Chrysler", model: "Cirrus", type: "Passenger", price: 16.48, engineSize: 2, horsepower: 132, wheelbase: 108, width: 71, length: 186, curbWeight: 2.911, fuelCapacity: 16, fuelEfficiency: 27 },
  { manufacturer: "Chrysler", model: "LHS", type: "Passenger", price: 28.34, engineSize: 3.5, horsepower: 253, wheelbase: 113, width: 74.4, length: 207.7, curbWeight: 3.564, fuelCapacity: 17, fuelEfficiency: 23 },
  { manufacturer: "Chrysler", model: "300M", type: "Passenger", price: 29.185, engineSize: 3.5, horsepower: 253, wheelbase: 113, width: 74.4, length: 197.8, curbWeight: 3.567, fuelCapacity: 17, fuelEfficiency: 23 },
  { manufacturer: "Dodge", model: "Neon", type: "Passenger", price: 12.64, engineSize: 2, horsepower: 132, wheelbase: 105, width: 74.4, length: 174.4, curbWeight: 2.567, fuelCapacity: 12.5, fuelEfficiency: 29 },
  { manufacturer: "Dodge", model: "Avenger", type: "Passenger", price: 19.045, engineSize: 2.5, horsepower: 163, wheelbase: 103.7, width: 69.1, length: 190.2, curbWeight: 2.879, fuelCapacity: 15.9, fuelEfficiency: 24 },
  { manufacturer: "Dodge", model: "Stratus", type: "Passenger", price: 20.23, engineSize: 2.5, horsepower: 168, wheelbase: 108, width: 71, length: 186, curbWeight: 3.058, fuelCapacity: 16, fuelEfficiency: 24 },
  { manufacturer: "Dodge", model: "Intrepid", type: "Passenger", price: 22.505, engineSize: 2.7, horsepower: 202, wheelbase: 113, width: 74.7, length: 203.7, curbWeight: 3.489, fuelCapacity: 17, fuelEfficiency: 25 },
  { manufacturer: "Dodge", model: "Viper", type: "Passenger", price: 69.725, engineSize: 8, horsepower: 450, wheelbase: 96.2, width: 75.7, length: 176.7, curbWeight: 3.375, fuelCapacity: 19, fuelEfficiency: 16 },
  { manufacturer: "Dodge", model: "Ram Pickup", type: "Car", price: 19.46, engineSize: 5.2, horsepower: 230, wheelbase: 138.7, width: 79.3, length: 224.2, curbWeight: 4.47, fuelCapacity: 26, fuelEfficiency: 17 },
  { manufacturer: "Dodge", model: "Dakota", type: "Car", price: 16.98, engineSize: 2.5, horsepower: 120, wheelbase: 131, width: 71.5, length: 215, curbWeight: 3.557, fuelCapacity: 22, fuelEfficiency: 19 },
  { manufacturer: "Ford", model: "Mustang", type: "Passenger", price: 21.56, engineSize: 3.8, horsepower: 190, wheelbase: 101.3, width: 73.1, length: 183.2, curbWeight: 3.203, fuelCapacity: 15.7, fuelEfficiency: 24 },
  { manufacturer: "Ford", model: "Explorer", type: "Car", price: 31.93, engineSize: 4, horsepower: 210, wheelbase: 111.6, width: 70.2, length: 190.7, curbWeight: 3.876, fuelCapacity: 21, fuelEfficiency: 19 },
  { manufacturer: "Honda", model: "Civic", type: "Passenger", price: 12.885, engineSize: 1.6, horsepower: 106, wheelbase: 103.2, width: 67.1, length: 175.1, curbWeight: 2.339, fuelCapacity: 11.9, fuelEfficiency: 32 },
  { manufacturer: "Honda", model: "Accord", type: "Passenger", price: 15.35, engineSize: 2.3, horsepower: 135, wheelbase: 106.9, width: 70.3, length: 188.8, curbWeight: 2.932, fuelCapacity: 17.1, fuelEfficiency: 27 },
  { manufacturer: "Toyota", model: "Corolla", type: "Passenger", price: 13.108, engineSize: 1.8, horsepower: 120, wheelbase: 97, width: 66.7, length: 174, curbWeight: 2.42, fuelCapacity: 13.2, fuelEfficiency: 33 },
  { manufacturer: "Toyota", model: "Camry", type: "Passenger", price: 17.518, engineSize: 2.2, horsepower: 133, wheelbase: 105.2, width: 70.1, length: 188.5, curbWeight: 2.998, fuelCapacity: 18.5, fuelEfficiency: 27 },
  { manufacturer: "Ford", model: "F-Series", type: "Car", price: 26.935, engineSize: 4.6, horsepower: 220, wheelbase: 138.5, width: 79.1, length: 224.5, curbWeight: 4.241, fuelCapacity: 25.1, fuelEfficiency: 18 },
  { manufacturer: "Honda", model: "CR-V", type: "Car", price: 20.55, engineSize: 2, horsepower: 146, wheelbase: 103.2, width: 68.9, length: 177.6, curbWeight: 3.219, fuelCapacity: 15.3, fuelEfficiency: 24 },
  { manufacturer: "Hyundai", model: "Accent", type: "Passenger", price: 9.699, engineSize: 1.5, horsepower: 92, wheelbase: 96.1, width: 65.7, length: 166.7, curbWeight: 2.24, fuelCapacity: 11.9, fuelEfficiency: 31 },
  { manufacturer: "Lexus", model: "ES300", type: "Passenger", price: 31.505, engineSize: 3, horsepower: 210, wheelbase: 105.1, width: 70.5, length: 190.2, curbWeight: 3.373, fuelCapacity: 18.5, fuelEfficiency: 23 },
  { manufacturer: "Mercedes-B", model: "E-Class", type: "Passenger", price: 49.9, engineSize: 3.2, horsepower: 221, wheelbase: 111.5, width: 70.8, length: 189.4, curbWeight: 3.823, fuelCapacity: 21.1, fuelEfficiency: 25 },
  { manufacturer: "Mitsubishi", model: "Eclipse", type: "Passenger", price: 19.047, engineSize: 2.4, horsepower: 154, wheelbase: 100.8, width: 68.9, length: 175.4, curbWeight: 2.91, fuelCapacity: 15.9, fuelEfficiency: 24 },
  { manufacturer: "Nissan", model: "Sentra", type: "Passenger", price: 13.499, engineSize: 1.8, horsepower: 126, wheelbase: 99.8, width: 67.3, length: 177.5, curbWeight: 2.593, fuelCapacity: 13.2, fuelEfficiency: 30 },
  { manufacturer: "Porsche", model: "Boxter", type: "Passenger", price: 41.43, engineSize: 2.7, horsepower: 217, wheelbase: 95.2, width: 70.1, length: 171, curbWeight: 2.778, fuelCapacity: 17, fuelEfficiency: 22 },
  { manufacturer: "Subaru", model: "Outback", type: "Passenger", price: 22.695, engineSize: 2.5, horsepower: 165, wheelbase: 103.5, width: 67.5, length: 185.8, curbWeight: 3.415, fuelCapacity: 16.9, fuelEfficiency: 25 },
  { manufacturer: "Volkswagen", model: "Jetta", type: "Passenger", price: 16.7, engineSize: 2, horsepower: 115, wheelbase: 98.9, width: 68.3, length: 172.3, curbWeight: 2.853, fuelCapacity: 14.5, fuelEfficiency: 26 },
  { manufacturer: "Volvo", model: "S80", type: "Passenger", price: 36, engineSize: 2.9, horsepower: 201, wheelbase: 109.9, width: 72.1, length: 189.8, curbWeight: 3.6, fuelCapacity: 21.1, fuelEfficiency: 24 },
  { manufacturer: "Infiniti", model: "I30", type: "Passenger", price: 29.465, engineSize: 3, horsepower: 227, wheelbase: 108.3, width: 70.2, length: 193.7, curbWeight: 3.342, fuelCapacity: 18.5, fuelEfficiency: 25 },
  { manufacturer: "Jaguar", model: "S-Type", type: "Passenger", price: 42.8, engineSize: 3, horsepower: 240, wheelbase: 114.5, width: 71.6, length: 191.3, curbWeight: 3.65, fuelCapacity: 18.4, fuelEfficiency: 21 },
  { manufacturer: "Jeep", model: "Wrangler", type: "Car", price: 14.46, engineSize: 2.5, horsepower: 120, wheelbase: 93.4, width: 66.7, length: 152, curbWeight: 3.045, fuelCapacity: 19, fuelEfficiency: 17 },
  { manufacturer: "Lexus", model: "LS400", type: "Passenger", price: 54.005, engineSize: 4, horsepower: 290, wheelbase: 112.2, width: 72, length: 196.7, curbWeight: 3.89, fuelCapacity: 22.5, fuelEfficiency: 22 },
  { manufacturer: "Lincoln", model: "Continental", type: "Passenger", price: 39.08, engineSize: 4.6, horsepower: 275, wheelbase: 109, width: 73.6, length: 208.5, curbWeight: 3.868, fuelCapacity: 20, fuelEfficiency: 22 },
  { manufacturer: "Mercury", model: "Grand Marquis", type: "Passenger", price: 22.605, engineSize: 4.6, horsepower: 200, wheelbase: 114.7, width: 78.2, length: 212, curbWeight: 3.958, fuelCapacity: 19, fuelEfficiency: 21 },
  { manufacturer: "Nissan", model: "Maxima", type: "Passenger", price: 26.249, engineSize: 3, horsepower: 222, wheelbase: 108.3, width: 70.3, length: 190.5, curbWeight: 3.294, fuelCapacity: 18.5, fuelEfficiency: 25 },
  { manufacturer: "Oldsmobile", model: "Aurora", type: "Passenger", price: 36.229, engineSize: 4, horsepower: 250, wheelbase: 113.8, width: 74.4, length: 205.4, curbWeight: 3.967, fuelCapacity: 18.5, fuelEfficiency: 22 },
  { manufacturer: "Plymouth", model: "Voyager", type: "Car", price: 18.85, engineSize: 2.4, horsepower: 150, wheelbase: 113.3, width: 76.8, length: 186.3, curbWeight: 3.528, fuelCapacity: 20, fuelEfficiency: 24 },
  { manufacturer: "Pontiac", model: "Grand Prix", type: "Passenger", price: 21.665, engineSize: 3.8, horsepower: 195, wheelbase: 110.5, width: 72.7, length: 196.5, curbWeight: 3.396, fuelCapacity: 18, fuelEfficiency: 25 },
  { manufacturer: "Porsche", model: "Carrera Coupe", type: "Passenger", price: 71.02, engineSize: 3.4, horsepower: 300, wheelbase: 92.6, width: 69.5, length: 174.5, curbWeight: 3.032, fuelCapacity: 17, fuelEfficiency: 21 },
  { manufacturer: "Saab", model: "5-Sep", type: "Passenger", price: 33.12, engineSize: 2.3, horsepower: 170, wheelbase: 106.4, width: 70.6, length: 189.2, curbWeight: 3.28, fuelCapacity: 18.5, fuelEfficiency: 23 },
  { manufacturer: "Saturn", model: "LS", type: "Passenger", price: 15.01, engineSize: 2.2, horsepower: 137, wheelbase: 106.5, width: 69, length: 190.4, curbWeight: 2.91, fuelCapacity: 13.1, fuelEfficiency: 28 },
  { manufacturer: "Volkswagen", model: "Passat", type: "Passenger", price: 21.2, engineSize: 1.8, horsepower: 150, wheelbase: 106.4, width: 68.5, length: 184.1, curbWeight: 3.043, fuelCapacity: 16.4, fuelEfficiency: 27 },
  { manufacturer: "Volvo", model: "C70", type: "Passenger", price: 45.5, engineSize: 2.3, horsepower: 236, wheelbase: 104.9, width: 71.5, length: 185.7, curbWeight: 3.601, fuelCapacity: 18.5, fuelEfficiency: 23 }
];

