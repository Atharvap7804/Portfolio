import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"
const Hero = () => {
  return (
    <div className="
      px-6
      pt-24
      lg:pt-[15vh]
      flex flex-col-reverse
      gap-12

      lg:flex-row
      lg:justify-between
      lg:items-center
      lg:h-[80vh]
      lg:px-15
      lg:gap-15
    ">
      <HeroLeft />
      <HeroRight />
    </div>
  )
}
export default Hero