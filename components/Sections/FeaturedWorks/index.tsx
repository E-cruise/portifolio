import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Some of my works.
      </Heading>
      <Text variant="description">
        Check out some of the works I made as computer Engineer, company
        projects and even case studies.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="CTN Pastor Training!"
            src="/works/ctn2.png"
            description="CTN Pastor Training is a website for coordinating Pastoral mission work of different Pastor training
            Missionary organisations in Uganda, Ethiopia, Kenya."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://ctnpastortraining.org/"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Nile Centre Business Support"
            description="I designed the NCBS website which ensures portraying of what NCBS
            does: Training Remote workers"
            src="/works/ncbs.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://ncbs.io"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="Nyumba App"
            description="A real Estate Mobile App - designed the front end of the mobile App using
            React Native with Typescript"
            src="/works/nyumba.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl=""
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={4}
            title="Bonaire Weather"
            description="A weather forecasting website with automatic post using OpenWeather API, Robomotion RPA, ReplicateAI."
            src="/works/weather.png"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://www.stijlvoldesign.nl/forecast/day-2/"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
