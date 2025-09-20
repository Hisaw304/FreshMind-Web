import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-300 mb-10">
          Here are some common questions we get. Can’t find what you’re looking
          for?{" "}
          <span className="text-orange-400 font-medium cursor-pointer hover:underline">
            Reach out to us directly.
          </span>
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full max-w-5xl mx-auto space-y-4"
      >
        {[
          {
            q: "Do you work with clients outside the Lakes Region?",
            a: "Absolutely! We work with businesses across the U.S. and internationally.",
          },
          {
            q: "How fast can I expect a response?",
            a: "We usually respond within 24 hours, Monday through Friday.",
          },
          {
            q: "Do you only build websites?",
            a: "No — we also provide SEO, digital ads, hosting, and ongoing support.",
          },
          {
            q: "Can you handle e-commerce projects?",
            a: "Yes! We build secure, scalable online stores with modern payment integrations.",
          },
          {
            q: "What makes your team different?",
            a: "We combine creative design with technical expertise, ensuring your brand stands out and performs.",
          },
        ].map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="
              w-full border border-slate-700 rounded-xl bg-slate-800 
              shadow-sm transition
              data-[state=open]:border-orange-500/60 
              data-[state=open]:shadow-lg data-[state=open]:shadow-orange-500/20
            "
          >
            <AccordionTrigger
              className="
                px-4 py-3 text-lg font-medium text-slate-200
                flex items-center gap-2 hover:bg-slate-700/40 rounded-t-xl
              "
            >
              <HelpCircle className="w-5 h-5 text-orange-500" />
              {item.q}
            </AccordionTrigger>
            <AccordionContent asChild>
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="px-4 pb-4 text-slate-400"
              >
                {item.a}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
