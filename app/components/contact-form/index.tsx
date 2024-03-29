"use client";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animation";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(300),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-34 flex items-center justify-center gap-12 flex-wrap lg:gap-32 bg-gray-900"
    >
      <div className="w-full max-w-[420px] ">
        <SectionTitle
          subtitle="contato"
          title="Entre em contato comigo"
          className="items-center text-center"
        />

        <motion.form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-950 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            {...register("name")}
          />
          <input
            placeholder="Email"
            className="w-full h-14 bg-gray-950 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-950 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-blue-600"
            maxLength={500}
            {...register("message")}
          />

          <Button
            className="h-max mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Enviar mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </motion.form>
      </div>

      <div className="w-full max-w-[420px] flex justify-center">
        <div className="flex flex-col gap-5 text-gray-400 text-sm text-center ">
          <div className="hover:text-white transition-all">
            <a href="#">thiago.marim2005@gmail</a>
          </div>
          <div className="flex items-center gap-1 hover:text-white transition-all">
            <a href="https://github.com/thiagomarim" target="_blank">
              Github
            </a>
            <TbBrandGithub />
          </div>
          <div className="flex items-center gap-1 hover:text-white transition-all">
            <a
              href="https://www.linkedin.com/in/thiago-marim-52b60a286/"
              target="_blank"
            >
              Linkedin
            </a>
            <TbBrandLinkedin />
          </div>
        </div>
      </div>
    </section>
  );
};
