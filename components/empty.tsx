import Image from "next/image";

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label 
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-62 w-80">
                
               
                
            </div>  
            <p>
                {label}
            </p>          
        </div>
    )
}