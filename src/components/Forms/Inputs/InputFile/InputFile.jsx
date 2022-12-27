import React from 'react';

export const InputFile = ({ label, accept = "image/*", multiple, dataTest }) => {
  return(
    <>
      <label for="myfile">{label}</label>
      <input
        type="file"
        id="myfile"
        name="myfile"
        accept={accept}
        multiple={multiple}
        data-test={dataTest}
      />
    </>
  )
};
