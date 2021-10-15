import { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CustomTextField from './CustomTextField';
import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken, next }) => {

    const [ shippingCountries, setShippingCountries ] = useState([]);
    const [ shippingCountry, setShippingCountry ] = useState('');
    const [ shippingSubdivisions, setShippingSubdivisions ] = useState([]);
    const [ shippingSubdivision, setShippingSubdivision ] = useState('');
    const [ shippingOptions, setShippingOptions ] = useState([]);
    const [ shippingOption, setShippingOption ] = useState('');

    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
      const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
      console.log(countries);
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubdivisions = async (countryCode) => {
        const  { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
        console.log('subdivisions', subdivisions)
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id) 
    }, [checkoutToken.id])

     useEffect(() => {
       if(shippingCountry) { return fetchSubdivisions(shippingCountry) }
     }, [shippingCountry])

     useEffect(() => {
        if(shippingSubdivision) { return fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision) }
      }, [shippingSubdivision, checkoutToken.id, shippingCountry])


    const myCountries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}));
    const mySubdivisions = Object.entries(shippingSubdivisions).map(([id, name]) => ({id: id, label: name}));
    const myOptions = shippingOptions.map(e => ({ id: e.id, label: `${e.description} - (${e.price.formatted_with_symbol})`  })

    )

    return (
        <>
          <Typography variant='h6' gutterBottom>Shipping Address</Typography>
          <FormProvider { ...methods }>
            <form onSubmit={methods.handleSubmit(data => next({ ...data, shippingCountry, shippingSubdivision }))}>
                <Grid container spacing={4}>

                    <CustomTextField name='firstName' label='First Name' />
                    <CustomTextField name='lastName' label='Last Name' />
                    <CustomTextField name='address' label='Address' />
                    <CustomTextField name='email' label='Email' />
                    <CustomTextField name='city' label='City' />
                    <CustomTextField name='zip' label='ZIP / Postal code' />

                    <Grid item xs={12} sm={6} gutterBottom>
                        <InputLabel>Shipping Countries</InputLabel>
                        <Select value={shippingCountry} fullWidth onChange={e => setShippingCountry(e.target.value)}>
                                {myCountries.map(country => 
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                             )}
                                
                        </Select>    
                    </Grid>

                    <Grid item xs={12} sm={6} gutterBottom>
                        <InputLabel>Shipping Subdivision</InputLabel>
                           <Select value={shippingSubdivision} fullWidth onChange={e => setShippingSubdivision(e.target.value)}>
                           {mySubdivisions.map(subdiv => 
                                <MenuItem key={subdiv.id} value={subdiv.id}>
                                    {subdiv.label}
                                </MenuItem>
                                )}  
                            </Select>    
                    </Grid>
                                      
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={shippingOption} fullWidth onChange={e => setShippingOption(e.target.value)}>
                            {myOptions.map(option => 
                                <MenuItem key={option.id} value={option.id}>
                                    {option.label}
                                </MenuItem>
                            )} 
                        </Select>    
                    </Grid>
                </Grid>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                    <Button type="submit" variant="contained" color="primary">Next</Button>
                </div>
            </form>
          </FormProvider>
        </>
    )
}

export default AddressForm
