import React from "react";

const styles = {
  container: "flex w-full h-screen justify-center",
  formStyle: "flex flex-col w-[300px] h-[300px]",
  labelStyle: "font-extrabold",
  inputStyle: "border border-gray-400 rounded-md",
  buttonStyle: "",
};

export const FormikTut = () => {
  return (
    <div className={styles.container}>
      <div className=' '>
        <form className={styles.formStyle}>
          <label htmlFor='name' className={styles.labelStyle}>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className={styles.inputStyle}
          />

          <label htmlFor='email' className={styles.labelStyle}>
            E-mail
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className={styles.inputStyle}
          />

          <label htmlFor='name' className={styles.labelStyle}>
            Channel
          </label>
          <input
            type='text'
            id='channel'
            name='channel'
            className={styles.inputStyle}
          />
          <button className='text-gray-400 w-full border-2 border-gray-900 rounded-md my-2 flex items-center justify-center '>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
