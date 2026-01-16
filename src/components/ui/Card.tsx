import { ShareIcon } from "../../icons/ShareIcon"

interface CardProps{
    title : string;
    link : string;
    type : "twitter" | "youtube";
}

export const Card = ({title , link , type }: CardProps) =>{
    return <div>

        <div className="p-6 bg-white rounded-lg shadow-md border-slate-200 max-w-71">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-3">
                        <ShareIcon size={"md"}/>
                    </div>
                    <span className="leading-none">{title}</span>
                </div>

                <div className="flex text-gray-500">
                    <a href={link} target="_blank">
                        <ShareIcon size={"md"}/>
                    </a>
                </div>

                <div    className="text-gray-500 leading-none pl-5">
                    delete
                </div>

            </div>

            <div className="pt-5">
                { type==="youtube" && <iframe className="w-full" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            
                

                {type === "twitter" && (
                <iframe
                    className="w-full"
                    src={`https://twitframe.com/show?url=${encodeURIComponent(link.split("?")[0])}`}
                    frameBorder="0"
                    scrolling="no"
                />
                )}


            </div>
        </div>



    </div>
}