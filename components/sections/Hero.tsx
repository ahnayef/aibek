'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Hero = () => {

  const router = useRouter()
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl py-2 text-cyan-600">AIBAK Learning Institute</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Learn, Lead And{" "}
              <span className="text-primary">Empower</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
            Lead with confidence, and win through the power of knowledge!
            </p>
            <div className="mt-8 flex flex-wrap gap-4" onClick={() => router.push('/events')}>
              <Button size="lg">
                Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => router.push('/blogs')}>
                Blogs
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/461440736_122109474278529652_4564985921964684580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2vUV7zfPeS8Q7kNvgFZ8Trp&_nc_zt=23&_nc_ht=scontent.fdac157-1.fna&_nc_gid=AL3Whx0LBnnuyaq41WFTJbP&oh=00_AYCCHP0lAqPhGbCKyDQignMidvEttMb-JUkvLlR94oIFUw&oe=67566F37"
              alt="Aibek"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;