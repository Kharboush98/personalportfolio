"use client";
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion'

interface SkillListProps {
  title?: string;
  skills: string[];
}

export default function SkillList({ title, skills }: SkillListProps) {

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-5 mb-10"
    >
      <div className="flex items-center justify-start gap-1 font-semibold text-primary dark:text-secondary-accent text-2xl w-fit
      bg-secondary p-2">
        <GoDotFill />
        {title && (
          <h3 className="text-5xl font-semibold">
            {title}
          </h3>
        )}
      </div>

      <div className="flex flex-wrap gap-4 font-jetbrains">
        {skills.map((skill, i) => (
          <motion.span
            key={skill}
            data-pill
            initial={{ opacity: 0, y: 0, x: -5}}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              ease: 'easeOut',
            }}
            className="rounded-full bg-primary px-4 py-2 border-2 border-secondary text-secondary cursor-pointer
              dark:hover:bg-secondary hover:bg-secondary hover:text-primary hover:font-semibold dark:hover:text-secondary-accent hover:border-primary hover:scale-115 transition-all duration-200 relative z-10"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
    </>
  )
}
