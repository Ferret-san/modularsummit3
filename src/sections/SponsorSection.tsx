import React from 'react'
import { pageData } from '@/lib/home'

const SponsorSection = () => {
  return (
    <section className={'w-full sponsor-section'}>
      <div className={'w-full'}>
        <div className={'p-4 py-10 md:py-20'}>
          <h2
            className={
              'text-black mb-1 md:mb-5 text-center font-bold text-[32px] tracking-[-0.96px] lg:tracking-[-2.04px] lg:text-[68px] leading-none'
            }
          >
            {pageData.SponsorSection.title}
          </h2>
          <h4
            className={'text-black mb-5 md:mb-[50px] text-center font-medium text-lg leading-none'}
          >
            {pageData.SponsorSection.subtitle}
          </h4>
          <div className={'max-w-[1280px] mx-auto'}>
            {pageData.SponsorSection.sponsors.map(function (sponsor: any, key: number) {
              return (
                <div
                  key={key}
                  className={`flex flex-wrap mx-auto justify-items-center justify-center items-center mb-${sponsor.gap * 4}`}
                >
                  {sponsor.elements.map(function (element: any, index: number) {
                    return (
                      <div
                        key={index}
                        className={`basis-full sm:basis-${sponsor.span}/${sponsor.grid} p-${sponsor.gap}`}
                      >
                        <a href={element.url} target={'_blank'}>
                          <div
                            className={'border border-[#DFDFDF]'}
                            style={{ maxHeight: `${sponsor.size}px` }}
                          >
                            <img src={element.logo} alt={element.title} className={`mx-auto`} />
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorSection
