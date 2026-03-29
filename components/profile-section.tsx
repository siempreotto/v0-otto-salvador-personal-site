import Image from "next/image"

export function ProfileSection() {
  return (
    <div className="flex justify-center lg:justify-start">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Otto_profile_picture-gERuBDWK0w0G0Yzo8bLqAQ6mgZz9cG.jpeg"
        alt="Otto Salvador - Professional portrait"
        width={380}
        height={450}
        className="rounded-[4px] object-cover object-top"
        style={{ aspectRatio: '380/450' }}
        priority
        unoptimized
      />
    </div>
  )
}
