
import CardArray from './component/CardArray';
import { NavBar } from './component/NavBar';
import Link from "next/link"
import { Search } from './component/Search';

export default function Home() {
     return (
          <main className=''>
               <NavBar />
               <div className='mx-auto lg:max-w-7xl max-w-md flex lg:h-[600px] lg:max-h-[600px] relative overflow-hidden flex-col '>
                    <section className='lg:w-3/5 flex flex-col justify-center items-start space-y-4 ps-8 h-screen md:h-full'>
                         <div className='lg:w-7/12 w-10/12  tracking-wide'>
                              <h1 className='font-bold text-[50px] leading-tight mb-2 '>Find a place you will love to live!</h1>
                              <p className='text-xl text-slate-800 tracking-wide'>See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</p>
                         </div>
                         <form className='w-3/5 space-y-4'>
                             <Search />
                              <button className='block bg-blue-600 text-white px-6 py-2 rounded-md uppercase text-sm font-semibold'>
                                   <Link href='../details' >search</Link>
                              </button>
                         </form>
                    </section>

                    <CardArray />
               </div>
          </main>
     );
}
