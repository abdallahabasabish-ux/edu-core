import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import mockup from "@/assets/mockup.png"; // ضع صورة وهمية

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-white to-secondary/50 py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* النص */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-right"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              أنشئ منصتك التعليمية{" "}
              <span className="text-primary">في دقائق</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              EduCore منصة SaaS متطورة تتيح لك إدارة الكورسات والطلاب والامتحانات
              بكل سهولة.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/register">
                <Button size="lg" className="rounded-full text-base">
                  ابدأ الآن مجاناً
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full text-base gap-2">
                <Play className="h-4 w-4" />
                مشاهدة العرض
              </Button>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-full">
              <img
                src={mockup}
                alt="EduCore Platform Mockup"
                className="rounded-2xl shadow-2xl border border-border/40"
              />
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
