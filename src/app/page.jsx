import { Card } from './component/Card';
import { CardArray } from './component/CardArray';
import { NavBar } from './component/NavBar';

export default function Home() {

     return (
          <main className=''>
               <NavBar />
              <div className='mx-auto max-w-7xl flex max-h-[600px]'>
              <section className='w-3/5 flex flex-col justify-center items-start space-y-4 ps-8'>
                    <div className='w-3/5 tracking-wide'>
                         <h1 className='font-black text-5xl leading-snug'>Find a place you will love to live!</h1>
                         <p>See through the lenses of people who have lived or visited the neighbourhood you might have in mind.</p>
                    </div>
                    <div className='w-3/5 space-y-4'>
                         <input type='search' className='border block w-full p-2 rounded-md bg-slate-50 text-sm' placeholder='Enter Address'/>
                         <button className='block bg-blue-600 text-white px-6 py-2 rounded-md uppercase text-sm font-semibold'>search</button>
                    </div>
               </section>
               <section className='grid grid-cols-2 gap-5 w-2/5 overflow-hidden' >
              <CardArray/>
               </section>
              </div>
          </main>
     );
}
