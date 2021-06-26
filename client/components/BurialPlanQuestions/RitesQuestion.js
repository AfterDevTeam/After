import React, { useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio, TextField } from '@material-ui/core';

const RitesQuestion = () => {
  const [rite, setRite] = useState(null);

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select your rites.</FormLabel>
        <RadioGroup aria-label="select-your-rites">
          <FormControlLabel value="casket" control={<Radio />} label="Casket" onClick={() => setRite('Casket')} />
          <FormControlLabel value="cremation" control={<Radio />} label="Cremation" onClick={() => setRite('Cremation')} />
          <FormControlLabel 
            value="other" 
            control={<Radio />} 
            label={
              <TextField
                placeholder="Other: Write your wishes here."
                onChange={(e) => {
                    setRite('Other: ' + e.target.value)
                  }
                }
              />
            }
            />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default RitesQuestion;