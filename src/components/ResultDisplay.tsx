import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info } from 'lucide-react';
import { PredictionFeatures } from '../services/predictionService';

interface ResultDisplayProps {
  price: number | null;
  error: string | null;
  features: PredictionFeatures | null;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ price, error, features }) => {
  return (
    <div className="mt-8 space-y-6">
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-start gap-3"
          >
            <Info className="w-5 h-5 mt-0.5" />
            <p>{error}</p>
          </motion.div>
        )}

        {price !== null && !error && features && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Price Prediction Card */}
            <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-bold text-center mb-6 uppercase tracking-wider">
                PERKIRAAN HARGA MOBIL
              </h2>
              
              <div className="bg-[#FFE599] border-2 border-black rounded-3xl py-10 px-4 mb-8">
                <div className="text-4xl md:text-5xl font-black text-center">
                  ${(price * 1000).toLocaleString('id-ID')}
                </div>
              </div>

              <div className="space-y-2 text-sm font-bold uppercase">
                <div className="flex justify-between border-b border-black/10 pb-1">
                  <span>Produsen</span>
                  <span>: {features.manufacturer}</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-1">
                  <span>Tenaga Kuda</span>
                  <span>: {features.horsepower} HP</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-1">
                  <span>Ukuran Mesin</span>
                  <span>: {features.engineSize} L</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-1">
                  <span>Jenis Kendaraan</span>
                  <span>: {features.vehicleType}</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-1">
                  <span>Efisiensi BBM</span>
                  <span>: {features.fuelEfficiency} MPG</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
