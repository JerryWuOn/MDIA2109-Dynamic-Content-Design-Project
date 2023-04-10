import Image from "next/image"
export default function topbar(){
    return(
        <>
        <main>
            <div>
                <Image
                src={"/icons/down.jpeg"}
                alt=""
                width={30}
                height={30}
                onClick=""
                />
            </div>
        </main>
        </>
    )
}