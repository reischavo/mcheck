"use client";

import { motion } from "motion/react";
import {
  ShieldIcon,
  LockIcon,
  EyeIcon,
  DatabaseIcon,
  AlertTriangleIcon,
  FileCheckIcon,
  FingerprintIcon,
  ShieldCheckIcon,
} from "@/components/icons";

export function Features1() {
  const features = [
    { icon: ShieldIcon, title: "Tehdit Tespiti", description: "Şüpheli aktiviteler için anlık izleme." },
    { icon: LockIcon, title: "Veri Şifreleme", description: "Hassas veriler için uçtan uca şifreleme." },
    { icon: EyeIcon, title: "Güvenlik İzleme", description: "Altyapınızın 7/24 gözetimi." },
    { icon: DatabaseIcon, title: "Güvenli Yedekleme", description: "Anında kurtarma ile otomatik yedekler." },
    { icon: AlertTriangleIcon, title: "İhlal Önleme", description: "Siber saldırılara karşı proaktif savunma." },
    { icon: FileCheckIcon, title: "Uyumluluk Yönetimi", description: "GDPR, SOC 2 ve ISO uyumluluk araçları." },
    { icon: FingerprintIcon, title: "Kimlik Koruması", description: "Çok faktörlü doğrulama ve erişim kontrolü." },
    { icon: ShieldCheckIcon, title: "Zafiyet Taraması", description: "Güvenlik açıklarını tespit için sürekli tarama." },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-32 lg:px-8 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm sm:text-base text-muted-foreground mb-4"
          >
            Kurumsal Güvenlik Platformu
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-6"
          >
            En önemlilerini koruyun
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl"
          >
            İşletmenizi gelişen tehditlerden korurken tam uyumluluğu sağlayan
            kapsamlı siber güvenlik çözümleri.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-border bg-card shadow-lg">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h3 className="text-base tracking-tight font-light text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xs tracking-tight font-light max-w-[20ch] sm:text-base text-muted-foreground leading-relaxed line-clamp-2">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
