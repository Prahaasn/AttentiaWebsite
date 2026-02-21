"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const faqData = [
  {
    category: "Product",
    questions: [
      {
        q: "What is Attentia DM-1?",
        a: "Attentia DM-1 is an AI-powered driver monitoring device that detects distracted driving in real-time. It uses advanced computer vision to monitor driver attention and provides instant alerts when it detects drowsiness, phone use, or eyes off the road."
      },
      {
        q: "How does the AI detection work?",
        a: "Our AI uses a Sony IMX219 infrared camera combined with on-device machine learning to analyze driver behavior in real-time. The system processes everything locally on the device, ensuring fast response times and complete privacy."
      },
      {
        q: "What types of distraction does it detect?",
        a: "Attentia detects drowsiness (yawning, eye closure), phone use (holding or looking at phone), eating/drinking, looking away from the road, and other forms of visual distraction. The AI continuously improves through software updates."
      },
      {
        q: "Does it work at night?",
        a: "Yes! The device includes 4 infrared LEDs that provide invisible illumination for the camera, allowing it to monitor your face in complete darkness without affecting your night vision."
      },
      {
        q: "How accurate is the detection?",
        a: "Attentia achieves 97% detection accuracy in real-world testing. The system is calibrated to minimize false alerts while ensuring genuine distractions are caught immediately."
      },
    ]
  },
  {
    category: "Installation",
    questions: [
      {
        q: "How do I install the device?",
        a: "Installation takes about 5 minutes. Simply attach the mount to your dashboard or windshield using the included 3M adhesive, connect the USB-C power cable to your car's USB port or the included 12V adapter, and pair with the app via Bluetooth."
      },
      {
        q: "Does it require professional installation?",
        a: "No professional installation needed. The device is designed for easy DIY setup with no tools or wiring required. The quick start guide walks you through every step."
      },
      {
        q: "What vehicles is it compatible with?",
        a: "Attentia works with any vehicle that has a 12V power outlet or USB port. This includes cars, trucks, SUVs, and commercial vehicles. The adjustable mount fits most dashboard and windshield configurations."
      },
      {
        q: "How long does setup take?",
        a: "Most users complete setup in under 10 minutes. This includes mounting the device, downloading the app, and running the initial calibration to learn your driving position."
      },
    ]
  },
  {
    category: "Subscription",
    questions: [
      {
        q: "What's included in the $165 device purchase?",
        a: "Your purchase includes the Attentia DM-1 device, dashboard mount with 3M adhesive, 3-meter USB-C power cable, 12V car adapter, quick start guide, and mounting template. Free shipping is included for all US orders."
      },
      {
        q: "What does the $3.99/month subscription include?",
        a: "The Pro subscription unlocks real-time AI monitoring, the iOS & Android app with trip history and analytics, family sharing for up to 5 drivers, cloud backup, priority support, and lifetime software updates."
      },
      {
        q: "Can I use it without a subscription?",
        a: "The device requires an active subscription for full functionality. The subscription covers the LTE data connection, cloud services, and ongoing AI improvements that make the device effective."
      },
      {
        q: "Is there a free trial?",
        a: "Yes! Every device purchase includes a 30-day free trial of the Pro subscription. If you're not satisfied, return the device within 30 days for a full refund."
      },
    ]
  },
  {
    category: "Privacy",
    questions: [
      {
        q: "Is my data secure?",
        a: "Absolutely. All AI processing happens on the device itself—no video is ever sent to the cloud. Your driving data is encrypted end-to-end, and we never sell or share your information with third parties."
      },
      {
        q: "Does it record video?",
        a: "No. Attentia does not record or store video footage. The camera feed is processed in real-time by the on-device AI and immediately discarded. Only anonymized driving statistics are stored."
      },
      {
        q: "Who can see my driving data?",
        a: "Only you and anyone you explicitly share access with through the Family Sharing feature. Parents can monitor teen drivers, but the teen is always notified that monitoring is active."
      },
      {
        q: "Can I delete my data?",
        a: "Yes. You can delete all your data at any time through the app settings. We also automatically delete data after 90 days of account inactivity."
      },
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "How is the device powered?",
        a: "The device uses a standard USB-C connection and requires 5V/3A (15W max). You can power it from your car's USB port or use the included 12V adapter that plugs into your cigarette lighter."
      },
      {
        q: "Does it need WiFi?",
        a: "No WiFi required. The device has built-in LTE Cat-M1 cellular connectivity that works nationwide. This is included in your subscription at no extra cost."
      },
      {
        q: "What's the warranty?",
        a: "Attentia comes with a 2-year manufacturer warranty covering defects in materials and workmanship. This is in addition to our 30-day money-back guarantee."
      },
      {
        q: "How do I get support?",
        a: "Pro subscribers get priority email and chat support with typical response times under 2 hours. You can also visit our help center for guides, troubleshooting, and FAQs."
      },
    ]
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors"
      >
        <span className="font-medium text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#186ff1] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-white/60 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Product");

  const activeQuestions = faqData.find(cat => cat.category === activeCategory)?.questions || [];

  return (
    <section id="faq" className="bg-[#0a0a0a] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-wider text-[#186ff1] uppercase mb-4"
          >
            FAQ
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white"
          >
            Frequently Asked <span className="text-[#186ff1]">Questions</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Everything you need to know about Attentia and how it keeps you safe.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {faqData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.category
                  ? "bg-[#186ff1] text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Questions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
          className="max-w-3xl mx-auto bg-[#111] rounded-2xl border border-white/10 p-6 md:p-8"
        >
          {activeQuestions.map((item, index) => (
            <FAQItem key={index} question={item.q} answer={item.a} />
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <p className="text-white/50 mb-4">Still have questions?</p>
          <a
            href="mailto:prahaasn2145@gmail.com"
            className="inline-flex items-center gap-2 text-[#186ff1] font-medium hover:underline"
          >
            Contact our team
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
