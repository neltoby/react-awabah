import { Button } from '@/components/Button'
import NavItem from '@/components/NavItem'
import FirstImage from '@/assets/first.png'
import SecondImage from '@/assets/second.png'
import ThirdImage from '@/assets/third.png'
import BodyFirst from '@/assets/body-first.png'
import BodySecond from '@/assets/body-second.png'
import BodyThird from '@/assets/body-third.png'
import Description from '@/components/Description'
import FooterText from '@/components/Footer/FooterText'
import FooterHeadertext from './components/Footer/FooterHeaderText'
import Facebook from '@/assets/Facebook.png'
import Twitter from '@/assets/twitter.png'
import Instagram from '@/assets/instagram.png'
import LinkedIn from '@/assets/linkedin.png'
import Img from './components/Socials'

function App() {

  return (
    <div className="w-screen">
      <div className='px-16 bg-green-950 pb-16'>
        <div className='w-full py-6 sticky top-0'>
          <div className='flex content-center'>
            <div className='basis-3/5 items-stretch mx-auto text-white text-xl font-bold'>
              Valubah
            </div>
            <div className='basis-2/5 items-center grid grid-cols-4 gap-2'>
              <NavItem label='About' />
              <NavItem label='FAQs' />
              <NavItem label='Contact Us' />
              <div className=''> <Button label='Get Started'/> </div>
            </div>
          </div>
        </div>
        <div className='flex mt-16'>
          <div className='w-1/2'>
            <div className='h-full flex items-center content-center'>
              <div>
                <div className='text-6xl text-white w-8/12'>
                  <span className='text-red-200'>Valubah:</span> Your Secure Path to a Confident Future 
                </div>
                <div className='text-white my-8 text-md w-8/12 leading-10'>
                  Explore Our Comprehensive Financial Support and Protection Solutions Tailored for Gig Workers, Informal Income Earners and Businesses.
                </div>
                <div>
                  <Button label='Get Started'/> 
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
              <div className='grid grid-cols-9 grid-rows-5 gap-4'>
                <div className='col-start-2 col-end-6 row-start-1 row-span-3 rounded-lg border border-solid border-white'>
                  <img src={FirstImage} className='object-cover h-full max-h-full w-full' alt='holding-jaw' />
                </div>
                <div className='col-start-6 col-span-4 row-start-1 row-span-5 rounded-lg border border-solid border-white'>
                  <img src={ThirdImage} className='object-cover h-full max-h-full w-full' alt='holding-laptop' />
                </div>
                <div className='col-start-1 col-end-6 row-start-4 row-span-2 rounded-lg border border-solid border-white'>
                  <img src={SecondImage} className='object-cover h-full max-h-full w-full' alt='in-a-car' />
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='mt-28 px-16 bg-white'>
        <div className='flex justify-center'>
          <div className='w-1/3 flex flex-col items-center'>
            <div className='w-4/6 break-normal text-center text-2xl font-bold'>
              Tailored Financial Security for Every Stage
            </div>
            <div className='mt-8 w-3/4 text-center justify-center text-sm leading-loose'>
               Explore our range of comprehensive financial support and protection solution designed for Gig Workers, Informal Income Earners, and Business
            </div>
            <div className=''>
             
            </div>
          </div>
        </div>
        <div>
          <Description desc='Tailored for You. Plan for a worry-free retirement with our customizable pension options, designed to pprovide you with long term financial security and peace of mind.' img={BodyFirst} heading='Pension Plans' />
          <Description desc="Life Insurance That Matters. Protect your loved one's future with our reliable life insurance coverage, ensuring financial stability even in unforeseen circumstances." img={BodySecond} heading='Life Insurance' ltr={false} />
          <Description desc="You Can Count On. Stayed prepared for life's changes with our comprehensive health and accident coverge, offering you the support you need when you need it most" img={BodyThird} heading='Health and Accident Protection' />
        </div>
      </div>
      <div className='mt-24'>
        <div className='mx-32 pb-12 rounded-lg bg-red-200 flex justify-center'>
          <div className='w-4/6 mt-12 flex flex-col items-center'>
            <div className='w-2/3 font-bold text-5xl break-normal text-center mt-8'>
              Join Now to Acces Financial Confidence
            </div>
            <div className='w-1/3 mt-8 break-normal text-center'>
              <p>Join Valubah and take the first step</p> <p>towards securing your future.</p>
            </div>
            <div className='mt-8'>
              <Button label='Get Started' className='bg-green-950 rounded text-white font-semibold py-2 px-4' />
            </div>
          </div>
        </div>
      </div>
      <div className='p-24 bg-green-950'>
        <div className='grid grid-cols-5'>
          <div className='col-start-1 col-span-1'>
            <FooterHeadertext label='Company' />
            <FooterText label='About Us' />
            <FooterText label='Why Choose us' />
            <FooterText label='Pricing' />
            <FooterText label='Testimonial' />
          </div>
          <div className='col-start-2 col-span-1'>
            <FooterHeadertext label='Resources' />
            <FooterText label='Privacy Policy' />
            <FooterText label='Terms and Condition' />
            <FooterText label='Blog' />
            <FooterText label='Contact Us' />
          </div>
          <div className='col-start-3 col-span-1'>
            <FooterHeadertext label='Products' />
            <FooterText label='Micro Pension Scheme' />
            <FooterText label='Frequently Asked Questions' />
          </div>
          <div className='col-start-4 col-span-2'>
            <p className='text-white text-3xl font-bold leading-8'> Valubah</p>
            <p className='mt-5 text-white text-xl font-bold'>Subscribe to our Newsletter</p>
            <div className='mt-5 flex'>
              <input placeholder='Enter your Email' className='w-4/5 p-2 mr-0 bg-gray-800 rounded-r-lg' />
              <Button label='Get Started' className='ml-0 bg-red-200 rounded rounded-l-[0] text-gray-800 w-1/5 font-semibold py-2 px-4' />
            </div>
          </div>
        </div>
        <div className='mt-24 grid grid-cols-8 gap-4'>
          <div className='col-start-1 col-span-3'>
            <hr className='opacity-60 text-white text-base font-normal'/>
          </div>
          <div className='col-start-4 col-span-2 flex justify-between items-start mt-[-0.8rem]'>
            <span className='opacity-60 text-white text-base font-normal'>&copy; Copyright Valubah 2023</span>
            <Img src={Facebook} className='text-white text-base font-normal'/>
            <Img src={Twitter} />
            <Img src={Instagram} />
            <Img src={LinkedIn} />
          </div>
          <div className='col-start-6 col-span-3'>
            <hr className='opacity-60 text-white text-base font-normal'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
