'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog"
import { Video, Mic, Radio, VideoIcon } from 'lucide-react'
import Image from 'next/image'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function LogoFeatureModal() {
  const [open, setOpen] = useState(false)


  const features = [
    { title: 'Video Call', icon: Video, image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=500&q=80' },
    { title: 'Live Streaming', icon: Radio, image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&q=80' },
    { title: 'Audio Call', icon: Mic, image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80' },
  ]
  const { fullName, setFullName } = useUser();
  const [roomID, setRoomID] = useState("");
  const router = useRouter();
  useEffect(() => {
      setFullName("");
    }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="w-10 h-10 p-0">
          <VideoIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black text-white">
        <VisuallyHidden>
          <DialogTitle>Room Features</DialogTitle>
        </VisuallyHidden>
        <div className="grid gap-4 py-4">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={200}
                  height={100}
                  className="w-full h-24 object-cover"
                />
                <CardHeader className="p-2">
                  <CardTitle className="text-sm flex items-center gap-2 text-white">
                    <feature.icon className="h-4 w-4" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <Input
              id="name"
              onChange={(e) => setFullName(e.target.value.toString())}
              placeholder="Enter Your Name"
              className="bg-gray-800 text-white border-gray-700"
            />

            <Button
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              Enter
            </Button>
          </div>
          {fullName && fullName.length >= 3 && (
              <>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <input
                    type="text"
                    id="roomid"
                    value={roomID}
                    onChange={(e) => setRoomID(e.target.value)}
                    className="border rounded-md focus:border-transparent focus:outline-none focus:ring-0 px-4 py-2 w-full bg-gray-800 text-white"
                    placeholder="Enter room ID to join a meeting"
                  />
                  <button
                    className="rounded-md bg-blue-500 px-10 py-[11px] text-sm font-medium text-white focus:outline-none sm:w-auto"
                    onClick={() => router.push(`/room/${roomID}`)}
                    disabled={!roomID}
                  >
                    Join
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <button
                    className="text-lg font-medium hover:text-blue-400 hover:underline"
                    onClick={() => router.push(`/room/${uuid()}`)}
                  >
                    Or create a new meeting
                  </button>
                </div>
              </>
            )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
