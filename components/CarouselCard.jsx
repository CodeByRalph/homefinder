import Image from "next/image"

export default function CarouselCard() {
  return (
    <div className="text-center">
        <Image src="/SmallHero.png" height={100} width={100} className="m-auto"/>
        <h1>Address of house</h1>
        <h3>Description of house</h3>
    </div>
  )
}
