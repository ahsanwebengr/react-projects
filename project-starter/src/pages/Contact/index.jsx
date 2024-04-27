import React from 'react';
import { useFormik } from 'formik';
import { inputs } from '../../data';
import { formSchema } from '../../utils/helper/Schema';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <section>
      <form className='max-w-screen-sm shadow-lg p-5' onSubmit={formik.handleSubmit}>
        <h2 className='text-3xl font-semibold text-center'>Login Form</h2>
        {inputs.map(input => (
          <div key={input.id} className='mb-2.5 flex flex-col gap-2'>
            <label htmlFor={input.id}>{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              className='border h-10 px-2 rounded-md'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[input.name]}
            />
            {formik.touched[input.name] && formik.errors[input.name] && (
              <div className='text-red-500'>{formik.errors[input.name]}</div>
            )}
          </div>
        ))}
        <button type='submit' className='bg-primary h-10 px-6 text-white rounded-md'>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
