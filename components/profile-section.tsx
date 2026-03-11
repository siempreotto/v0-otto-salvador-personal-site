import Image from "next/image"

export function ProfileSection() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <Image
          src="/profile-photo.jpg"
          alt="Professional headshot"
          width={450}
          height={550}
          className="rounded-lg object-cover"
          priority
        />
      </div>
    </div>
  )
}
