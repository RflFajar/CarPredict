import { CAR_DATASET, CarData } from "../constants/cars";

export interface PredictionFeatures {
  manufacturer: string;
  vehicleType: string;
  engineSize: number;
  horsepower: number;
  wheelbase: number;
  width: number;
  length: number;
  curbWeight: number;
  fuelCapacity: number;
  fuelEfficiency: number;
}

/**
 * CRISP-DM Implementation:
 * 
 * 1. Business Understanding: Goal is to provide price estimations for an automotive manufacturer 
 *    using historical data to inform pricing strategies.
 * 
 * 2. Data Understanding: The dataset contains physical specs (HP, Engine Size, etc.) and Market Price.
 * 
 * 3. Data Preparation: Numeric features are normalized to prevent scale bias.
 * 
 * 4. Modeling: K-Nearest Neighbors (KNN) Regression.
 * 
 * 5. Evaluation: Weighted average of the 'K' most similar vehicles.
 * 
 * 6. Deployment: Client-side calculation for instant feedback.
 */

const K = 3; // Number of neighbors to consider

const normalize = (val: number, min: number, max: number) => {
  if (max === min) return 0;
  return (val - min) / (max - min);
};

export const predictCarPrice = async (features: PredictionFeatures): Promise<number> => {
  // Simulate processing time for "Data Preparation" & "Modeling" phases
  await new Promise(resolve => setTimeout(resolve, 800));

  // --- Phase 3: Data Preparation (Calculate Min/Max for Normalization) ---
  const stats = {
    hp: { min: Math.min(...CAR_DATASET.map(c => c.horsepower)), max: Math.max(...CAR_DATASET.map(c => c.horsepower)) },
    engine: { min: Math.min(...CAR_DATASET.map(c => c.engineSize)), max: Math.max(...CAR_DATASET.map(c => c.engineSize)) },
    weight: { min: Math.min(...CAR_DATASET.map(c => c.curbWeight)), max: Math.max(...CAR_DATASET.map(c => c.curbWeight)) },
    eff: { min: Math.min(...CAR_DATASET.map(c => c.fuelEfficiency)), max: Math.max(...CAR_DATASET.map(c => c.fuelEfficiency)) },
  };

  // --- Phase 4: Modeling (Distance Calculation) ---
  const neighbors = CAR_DATASET.map(car => {
    // Calculate Euclidean Distance on normalized features
    const dist = Math.sqrt(
      Math.pow(normalize(features.horsepower, stats.hp.min, stats.hp.max) - normalize(car.horsepower, stats.hp.min, stats.hp.max), 2) +
      Math.pow(normalize(features.engineSize, stats.engine.min, stats.engine.max) - normalize(car.engineSize, stats.engine.min, stats.engine.max), 2) +
      Math.pow(normalize(features.curbWeight, stats.weight.min, stats.weight.max) - normalize(car.curbWeight, stats.weight.min, stats.weight.max), 2) +
      Math.pow(normalize(features.fuelEfficiency, stats.eff.min, stats.eff.max) - normalize(car.fuelEfficiency, stats.eff.min, stats.eff.max), 2)
    );
    return { ...car, distance: dist };
  });

  // Sort by similarity (lowest distance first)
  neighbors.sort((a, b) => a.distance - b.distance);

  // --- Phase 5: Evaluation (Distance Weighted Average) ---
  const topK = neighbors.slice(0, K);
  
  // Handing perfect matches
  if (topK[0].distance === 0) return topK[0].price;

  let weightedSum = 0;
  let totalWeight = 0;

  topK.forEach(n => {
    const weight = 1 / (n.distance + 0.001); // Avoid division by zero
    weightedSum += n.price * weight;
    totalWeight += weight;
  });

  const prediction = weightedSum / totalWeight;

  return Math.round(prediction * 100) / 100;
};
