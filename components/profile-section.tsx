import Image from "next/image"

export function ProfileSection() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Otto_profile_picture-gERuBDWK0w0G0Yzo8bLqAQ6mgZz9cG.jpeg"
          alt="Otto - Professional portrait in white button-up shirt"
          width={450}
          height={550}
          className="rounded-lg object-cover"
          priority
          unoptimized
        />
      </div>
    </div>
  )
}
