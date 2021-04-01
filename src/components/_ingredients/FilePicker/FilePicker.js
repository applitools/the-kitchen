import { useState } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

import styles from './FilePicker.module.scss';

const FilePicker = ({ id, name, label, options, accept, ...rest }) => {

  const [imageSrc, setImageSrc] = useState();

  function handleOnChange({ currentTarget }) {
    const file = currentTarget.files[0];

    if ( !file ) return;

    const reader = new FileReader();

    reader.onload = ({ target } = {}) => setImageSrc(target.result);

    reader.readAsDataURL(file);
  }

  return (
    <div className={`ingredient ${styles.filePicker}`}>
      <ChakraInput type="file" name="photo-upload" accept={accept} {...rest} onChange={handleOnChange}  />
      <p className={styles.filePickerAccepted}>
        Accepted files: { accept }
      </p>
      {imageSrc && (
        <figure className={styles.filePickerPreview}>
          <img src={imageSrc} alt="Preview of uploaded file" />
          <figcaption>Upload Preview</figcaption>
        </figure>
      )}
    </div>
  )
}

export default FilePicker;