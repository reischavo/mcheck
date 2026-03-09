"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Ne tür sorgular yapılabiliyor?",
    answer: "TC, GSM, Mernis, adres, aile ve çok daha fazlası için güvenilir sorgu çözümleri sunuyoruz. Sol menüden tüm sorgu seçeneklerine ulaşabilirsiniz.",
  },
  {
    question: "Ödeme yöntemleri nelerdir?",
    answer: "Kripto para ile ödeme kabul ediyoruz. Bitcoin, Ethereum, USDT ve daha fazlası desteklenmektedir. Tüm ödemeler manuel olarak onaylanmaktadır.",
  },
  {
    question: "Üyelik planlarım arasında geçiş yapabilir miyim?",
    answer: "Evet, istediğiniz zaman planınızı yükseltebilir ya da değiştirebilirsiniz. Yükseltme işleminden sonra yeni planın özellikleri hemen aktif olur.",
  },
  {
    question: "Sorgu sonuçları ne kadar sürede geliyor?",
    answer: "Sorgular genellikle birkaç saniye içinde sonuçlanır. Yoğun dönemlerde bu süre biraz uzayabilir ancak maksimum 60 saniyeyi geçmez.",
  },
  {
    question: "Verilerim güvende mi?",
    answer: "Evet. Tüm veriler şifreli bağlantılarla iletilir. Sorgu geçmişiniz yalnızca sizin erişiminize açıktır ve üçüncü taraflarla paylaşılmaz.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 xl:gap-20">
          <div className="flex flex-col space-y-2 lg:sticky lg:top-24 lg:self-start">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight"
            >
              SSS
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-[25ch]"
            >
              Platformumuz hakkında merak edilenlerin cevapları.
            </motion.p>
          </div>

          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                className={`border-b border-border ${index === 0 ? "border-t" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 sm:py-8 flex items-start justify-between gap-4 text-left group"
                >
                  <span className="text-base sm:text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 mt-1"
                  >
                    <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pr-8">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
