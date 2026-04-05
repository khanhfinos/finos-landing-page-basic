"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import {
  MessageSquare,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { useCallback, useId, useState } from "react";

interface Agent {
  id: string;
  name: string;
  role: string;
  status: "online" | "busy" | "offline";
  icon: React.ElementType;
  gradient: string;
  solidGradient: string;
}

const AI_AGENTS: Agent[] = [
  {
    id: "finos",
    name: "FinOS AI",
    role: "Trợ lý tài chính thông minh",
    status: "online",
    icon: Sparkles,
    gradient: "from-cyan-500/20 to-teal-500/20",
    solidGradient: "from-[#00bcd4] to-[#0097a7]",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transformOrigin: "bottom right",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const messageVariants: Variants = {
  hidden: { opacity: 0, y: 10, x: -10 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<string>(AI_AGENTS[0].id);
  const [message, setMessage] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const widgetId = useId();

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  const currentAgent =
    AI_AGENTS.find((a) => a.id === selectedAgent) || AI_AGENTS[0];
  const AgentIcon = currentAgent.icon;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-[380px] overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="relative border-b border-gray-100 bg-white p-4 overflow-hidden">
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50",
                  currentAgent.gradient
                )}
              />
              <div className="relative flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10 shadow-sm">
                      <AvatarFallback className={cn("bg-gradient-to-br text-white", currentAgent.solidGradient)}>
                        <AgentIcon className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className={cn(
                        "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background",
                        currentAgent.status === "online"
                          ? "bg-emerald-500"
                          : currentAgent.status === "busy"
                            ? "bg-amber-500"
                            : "bg-slate-400"
                      )}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      FinOS AI
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-gray-500">
                        Trợ lý tài chính thông minh
                      </span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-background/50"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex h-[320px] flex-col gap-4 overflow-y-auto p-4 bg-gray-50">
              <motion.div variants={messageVariants} className="flex gap-3">
                <Avatar className="h-8 w-8 shadow-sm">
                  <AvatarFallback className={cn("bg-gradient-to-br text-white", currentAgent.solidGradient)}>
                    <AgentIcon className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex max-w-[85%] flex-col gap-1">
                  <span className="text-xs font-medium text-gray-500">
                    FinOS AI
                  </span>
                  <div className="rounded-2xl rounded-tl-none bg-white px-4 py-2.5 text-sm shadow-sm border border-gray-100 text-gray-700">
                    <p>
                      Xin chào! Tôi là FinOS AI — trợ lý tài chính thông minh. Tôi có thể giúp bạn tìm hiểu về Credit Scoring, eKYC, eSign và các giải pháp tài chính số của FinOS.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* User Message Mock */}
              <motion.div
                variants={messageVariants}
                className="flex flex-row-reverse gap-3 self-end"
              >
                <Avatar className="h-8 w-8 shadow-sm">
                  <AvatarFallback className="bg-gradient-to-br from-[#00bcd4] to-[#0097a7] text-white">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex max-w-[85%] flex-col items-end gap-1">
                  <div className="rounded-2xl rounded-tr-none bg-[#00bcd4] px-4 py-2.5 text-sm text-white shadow-md">
                    <p>FinOS hỗ trợ tích hợp eKYC như thế nào?</p>
                  </div>
                </div>
              </motion.div>

              {/* Typing Indicator Mock */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex gap-3"
              >
                <Avatar className="h-8 w-8 shadow-sm">
                  <AvatarFallback className={cn("bg-gradient-to-br text-white", currentAgent.solidGradient)}>
                    <AgentIcon className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <div className="rounded-2xl rounded-tl-none bg-white px-4 py-3 shadow-sm border border-gray-100 w-16 flex items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/40 animate-bounce" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-100 bg-white p-3">
              <form
                className="relative flex items-center gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setMessage("");
                }}
              >
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Nhắn tin với FinOS AI..."
                  className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 text-gray-800"
                />
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-[#00bcd4] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#0097a7]"
                  disabled={!message.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        className={cn(
          "cursor-pointer group relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300",
          isOpen
            ? "bg-red-500 text-white rotate-90"
            : "bg-[#00bcd4] text-white hover:bg-[#0097a7] hover:shadow-cyan-500/40"
        )}
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-inherit opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </motion.button>
    </div>
  );
}
