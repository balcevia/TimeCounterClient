import React from 'react';
import Button from "@material-ui/core/es/Button/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const handleChange = (onChange, onBlur, multiple) => (e) => {
  const files = Array.from(e.target.files);
  const allFiles = [];
  files.forEach(file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      allFiles.push({
        name: file.name,
        size: file.size,
        type: file.type,
        sizeKB: file.size / 1024,
        base64: reader.result.split(',')[1]
      });

      if (allFiles.length === files.length) {
        const value = multiple ? allFiles : allFiles[0];
        onChange(value);
        onBlur(value);
      }
    }
  })
};

const FilePicker = ({disabled, accept, multiple, input}) => {
  return (
    <Button variant="contained" color="primary" startIcon={<CloudUploadIcon />} style={{marginTop: '10px'}} component="label">
      Choose a file
      <input disabled={disabled}
             type='file'
             accept={accept}
             onChange={handleChange(input.onChange, input.onBlur, multiple)}
             multiple={multiple} style={{display: 'none'}}/>
    </Button>
  )
};

export default FilePicker;