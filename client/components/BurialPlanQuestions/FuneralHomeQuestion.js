import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

const FuneralHomeQuestion = () => {
  const [funeralHome, setFuneralHome] = useState(null);

  return (
    <div>
    <FormControl>
      <InputLabel htmlFor="funeral-home">Funeral Home</InputLabel>
      <Input 
        id="funeral-home" 
        aria-describedby="funeral-home-helper-text" 
        onChange={(e) => setFuneralHome(e.target.value)}
        />
      <FormHelperText id="funeral-home-helper-text">Select the funeral home you'd like to use.</FormHelperText>
    </FormControl>
    </div>
  )
}

export default FuneralHomeQuestion;