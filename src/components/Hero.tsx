import { ethers } from 'ethers';
import { motion } from 'framer-motion'
import { useContractStore } from '../store/contract'

const Hero = () => {
  const { collectionSize, totalSupply, price } = useContractStore()
  const displayPrice = price ? ethers.utils.formatEther(price) : '--';
  return (
    // <div className="absolute min-h-screen relative w-screen p-2 overflow-hidden">
    <div className="p-2 md:p-0 md:absolutez md:top-4 md:left-24 lg:left-36 md:w-[calc(100vw-9rem)]">
      <div className="mt-16 font-title text-[10vw] tracking-tight leading-none flex justify-between items-end md:text-[10vw] -ml-[.35vw] ">
        <div className="relative">
          <h1 className="sr-only"></h1>
          <span>
            DERIV
            <motion.div
              className="inline"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                },
              }}
              transition={{ repeat: Infinity, duration: 1.5 }}>
              {' '}
              _
            </motion.div>
            <br />
            DATA
          </span>
        </div>
      </div>

      <div className="pl-1 md:ml-0.5 py-2 flex mt-1 font-mono zjustify-center">
        <div className="text-sm ztext-center">wagmi baby</div>
      </div>
    </div>


    // </div>
  )
}

export default Hero
