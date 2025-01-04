"use client"

import { api } from "@/convex/_generated/api"
import { Id } from "@/convex/_generated/dataModel";
import { Preloaded, usePreloadedQuery } from "convex/react"
import { useEffect, useRef } from "react"


interface Message {
  content: string;
  id: Id<"messages">;
  isSent: boolean;
  sender: string;
  sender_userId: string | undefined;
  time: string;
  type: "text" | "image" | "video" | "audio" | "file";
  mediaUrl?: string;
}

export default function ChatList({
  userId,
  preloadedMessages
}: {
  userId: string,
  preloadedMessages: Preloaded<typeof api.chats.getMessages>
}) {

  const messages = usePreloadedQuery(preloadedMessages)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])


  return (
    <div ref={containerRef}
      className="flex-1 overflow-y-auto bg-black max-h-[calc(100vh-135px)]"
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch'
      }
      }
    >
      <div className="p-4 min-h-full flex flex-col space-y-4">
        {messages.map((message: Message) => {
          const isMyMessage = message.sender_userId === userId

          return (
            <div key={message.id}
              className={`flex ${isMyMessage ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`rounded-lg p-3 max-w-xs lg:max-w-md ${isMyMessage ? "bg-gray-800 text-primary-foreground" :
                ' bg-blue-600'
                }
              `}>
                

                {message?.type === "image" ? (
                  <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                    <div className="w-full">
                      <img
                        src={message.mediaUrl}
                        alt="Message content"
                        className="w-full h-auto max-h-[300px] object-contain rounded-lg"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                        onLoad={() => {
                          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-white break-words whitespace-pre-wrap">{message.content}</p>
                )}

                <p className="text-end text-xs text-muted-foreground mt-1">
                  {message.time}
                </p>
              </div>
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>

    </div>
  )
}