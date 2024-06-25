import SovereignHeroSection from '@/sections/SovereignHeroSection'
import SovereignIntro from '@/sections/SovereignIntro'
// import VideoSection from '@/sections/VideoSection'
// import GallerySection from '@/sections/GallerySection'
// import FooterSection from '@/sections/FooterSection'
// import SponsorSection from '@/sections/SponsorSection'
import Header from '@/sections/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className={'mx-auto max-w-[1980px] overflow-x-hidden'}>
        <SovereignHeroSection />
        <SovereignIntro />
        {/* <SponsorSection /> */}
        {/* <VideoSection /> */}
        {/* <GallerySection /> */}
        {/* <FooterSection /> */}
      </main>
    </>
  )
}
