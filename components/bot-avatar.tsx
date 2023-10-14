import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image";

export const BotAvatar = () => {
    return (
        <Avatar className="h-8 w-8">
            <Image 
                alt="logo"
                fill
                src="/logo.png"
                />
        </Avatar>
    )
};

