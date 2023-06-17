import React from 'react';
import { Navbar,Hero,Feature,Howitworks,Testimonial,Footer,SubscriptionForm} from './components';

const App = () => (
<div className='w-full bg-primary-mainbody-bluecolor'>
<div className=' px-4 py-4 md:px-16 md:py-8'>
<div className=''>
<Navbar />
<Hero />
</div>
<div className=''>
<Feature />
<Howitworks />
<Testimonial />
<SubscriptionForm />
<Footer />
</div>

</div>

</div>
  )


export default App