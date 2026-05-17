/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Car, Gauge, LayoutDashboard } from 'lucide-react';
import { CarForm } from './components/CarForm';
import { ResultDisplay } from './components/ResultDisplay';
import { predictCarPrice, PredictionFeatures } from './services/predictionService';

export default function App() {
  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFeatures, setLastFeatures] = useState<PredictionFeatures | null>(null);

  const handlePredict = async (features: PredictionFeatures) => {
    setLoading(true);
    setError(null);
    try {
      const result = await predictCarPrice(features);
      setPrediction(result);
      setLastFeatures(features);
    } catch (err) {
      setError('An error occurred while predicting the price.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-gray-900 font-sans selection:bg-blue-100">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-[60%] -right-[5%] w-[30%] h-[30%] bg-indigo-100 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4 border border-blue-100 uppercase tracking-widest"
          >
            <Gauge className="w-4 h-4" />
            Metodologi CRISP-DM
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 mb-4 uppercase"
          >
            Prediksi Harga Mobil
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto font-medium"
          >
            Masukkan spesifikasi kendaraan Anda untuk mendapatkan valuasi instan berdasarkan model analisis data historis kami.
          </motion.p>
        </header>

        <main className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <CarForm onPredict={handlePredict} isLoading={loading} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <ResultDisplay price={prediction} error={error} features={lastFeatures} />
              
              {!prediction && !loading && !error && (
                <div className="h-full flex flex-col items-center justify-center p-12 border-4 border-dashed border-gray-200 rounded-3xl text-gray-400">
                  <Car className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-center font-bold uppercase tracking-widest">Hasil prediksi akan muncul di sini</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Author Identification Box - Always Visible */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#A4D8FF] border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center max-w-xl mx-auto transform hover:-translate-y-1 transition-transform"
          >
            <p className="text-lg font-black uppercase mb-4 tracking-wider">SISTEM INI DIBUAT OLEH:</p>
            <div className="space-y-2 text-xl font-bold uppercase">
              <div className="inline-block border-b-2 border-black/20 pb-1">NAMA : MUHAMMAD RAFLI FAJAR BATUBARA</div>
              <br />
              <div className="inline-block">NPM : 237006094</div>
            </div>
          </motion.div>
        </main>

        <footer className="mt-20 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>© 2024 CarValu AI. Hanya untuk tujuan demonstrasi menggunakan data historis 2011-2012.</p>
        </footer>
      </div>
    </div>
  );
}

