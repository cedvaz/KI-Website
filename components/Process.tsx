import React from 'react';
import { PROCESS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-black mb-20 uppercase">So legen wir los</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-0.5 border-t-2 border-dashed border-white/20 -z-10"></div>
          
          {PROCESS.map((p, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-dark border border-white/10 flex items-center justify-center text-4xl mb-6 quirky-shadow">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-xl text-white/60 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;