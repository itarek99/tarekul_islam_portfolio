import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ENDPOINT);
  if (state.succeeded) {
    toast.success('Your Message Was Sent Successfully.', {
      style: {
        background: '#2A2C39',
        color: '#fff',
      },
    });
  }

  return (
    <div id='contact' className='container mx-auto px-2 py-20'>
      <div>
        <div className='relative text-center'>
          <div className='hidden md:block text-8xl lg:text-9xl font-bold opacity-5'>CONTACT</div>
          <div className='absolute text-4xl lg:text-5xl font-bold  top-1/2 -translate-y-1/2 w-full'>
            <p>Get In Touch</p>
            <div className='w-48 h-[2px] bg-white mx-auto mt-2'></div>
          </div>
        </div>
      </div>

      <div className='mt-14'>
        <form onSubmit={handleSubmit} className='w-full max-w-5xl mx-auto'>
          <div className='grid grid-cols-2 gap-6'>
            <input type='text' placeholder='Name' name='name' className='input input-bordered w-full' />
            <input type='email' placeholder='Email' name='email' className='input input-bordered w-full' />
            <ValidationError prefix='Email' field='email' errors={state.errors} />
            <textarea
              rows='5'
              name='message'
              placeholder='Message'
              className='textarea textarea-bordered col-span-2'
            ></textarea>
            <ValidationError prefix='Message' field='message' errors={state.errors} />
          </div>
          <div className='text-right mt-6'>
            <button className='btn btn-outline font-medium text-sm' type='submit' disabled={state.submitting}>
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
