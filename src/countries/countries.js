import { FormControl,
	 InputLabel,
	  NativeSelect, FormHelperText } from "@material-ui/core";

export default function Countries(props) {
  const { countries, handleOnChange, value } = props;
  return (
    <FormControl>
      <InputLabel shrink htmlFor="country-selector">
        Quốc Gia
      </InputLabel>
      <NativeSelect
	  	value={value}
	 	onChange={handleOnChange}
		inputProps={{
			name: 'country',
			id: 'country-selector'
		}}
	  >
        {countries.map(({Country, ISO2}) => {
          return <option key={ISO2} value={ISO2}>{Country}</option>;
        })}
      </NativeSelect>
	  <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  );
}
