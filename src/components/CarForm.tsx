import React, { useState } from 'react';
import { PredictionFeatures } from '../services/predictionService';

interface CarFormProps {
  onPredict: (features: PredictionFeatures) => void;
  isLoading: boolean;
}

export const CarForm: React.FC<CarFormProps> = ({ onPredict, isLoading }) => {
  const [formData, setFormData] = useState<PredictionFeatures>({
    manufacturer: 'Toyota',
    vehicleType: 'Passenger',
    engineSize: 2.0,
    horsepower: 150,
    wheelbase: 105,
    width: 70,
    length: 185,
    curbWeight: 3.0,
    fuelCapacity: 15,
    fuelEfficiency: 25,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'manufacturer' || name === 'vehicleType' ? value : parseFloat(value) || 0,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Produsen (Manufacturer)</label>
          <input
            type="text"
            name="manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Jenis Kendaraan</label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          >
            <option value="Passenger">Penumpang (Passenger)</option>
            <option value="Car">Mobil/SUV</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Tenaga Kuda (Horsepower)</label>
          <input
            type="number"
            name="horsepower"
            value={formData.horsepower}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Ukuran Mesin (L)</label>
          <input
            type="number"
            step="0.1"
            name="engineSize"
            value={formData.engineSize}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Wheelbase (in)</label>
          <input
            type="number"
            name="wheelbase"
            value={formData.wheelbase}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Berat Kosong (lbs/1000)</label>
          <input
            type="number"
            step="0.001"
            name="curbWeight"
            value={formData.curbWeight}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Efisiensi Bahan Bakar (mpg)</label>
          <input
            type="number"
            name="fuelEfficiency"
            value={formData.fuelEfficiency}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Kapasitas Tangki (gal)</label>
          <input
            type="number"
            name="fuelCapacity"
            value={formData.fuelCapacity}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${
          isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.98]'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Memprediksi...
          </span>
        ) : 'Prediksi Harga'}
      </button>
    </form>
  );
};
