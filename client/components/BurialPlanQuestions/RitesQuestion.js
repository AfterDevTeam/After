import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from '@material-ui/core';

const RitesQuestion = () => {
  const [rite, setRite] = useState(null);
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select Your Rites</FormLabel>
        <RadioGroup aria-label="select-your-rites">
          <FormControlLabel value="casket" control={<Radio />} label="Casket" onClick={() => setRite('casket')} />
          <FormControlLabel value="cremation" control={<Radio />} label="Cremation" onClick={() => setRite('cremation')} />
          <FormControlLabel value="other" control={<Radio />} label="Other" onClick={() => setRite('other')} />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default RitesQuestion;