import { motion } from 'framer-motion'
import { Eye, Leaf, ShieldCheck, Sparkles, Bird } from 'lucide-react'

export default function TransformationFramework() {
  const steps = [
    { 
      title: 'Awareness', 
      desc: "Understand what's keeping you stuck", 
      icon: <Eye size={32} strokeWidth={1.5} />, 
      num: '1' 
    },
    { 
      title: 'Healing', 
      desc: 'Release emotional wounds & patterns', 
      icon: <Leaf size={32} strokeWidth={1.5} />, 
      num: '2' 
    },
    { 
      title: 'Boundaries', 
      desc: 'Protect your energy without guilt', 
      icon: <ShieldCheck size={32} strokeWidth={1.5} />, 
      num: '3' 
    },
    { 
      title: 'Confidence', 
      desc: 'Rebuild self-worth & inner strength', 
      icon: <Sparkles size={32} strokeWidth={1.5} />, 
      num: '4' 
    },
    { 
      title: 'Peace', 
      desc: 'Create fulfilling relationships & life', 
      icon: <Bird size={32} strokeWidth={1.5} />, 
      num: '5' 
    }
  ]

  return (
    <section className="py-12 relative overflow-hidden bg-transparent z-10">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <span className="label-caps mb-4 block text-muted-rose font-bold">THE TRANSFORMATION JOURNEY</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-main mb-4">
            The Emotional Reclamation Method™
          </h2>
          <p className="text-secondary max-w-xl mx-auto opacity-70">
            A proven 5-step process to help you break free and create lasting change.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[56px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-pink-100/50 via-pink-300/50 to-pink-100/50" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Circle & Number */}
                <div className="relative mb-8">
                  <div className="w-28 h-28 glass-card rounded-[40px] flex items-center justify-center relative z-10 border-white/60 group-hover:scale-105 transition-transform duration-500 text-main">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-sm border border-pink-100 flex items-center justify-center text-xs font-bold text-pink-accent z-20">
                    {step.num}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-pink-accent mb-2">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed max-w-[180px] opacity-80">
                  {step.desc}
                </p>

                {/* Mobile Connector */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-[1px] h-12 bg-pink-200/30 my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
