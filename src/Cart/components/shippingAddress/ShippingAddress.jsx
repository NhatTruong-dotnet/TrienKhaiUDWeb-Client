import React from 'react'

export default function ShippingAddress(props) {
    return (
        <>
            <div class="form-check" style={{ padding: "4px", marginLeft:"40px" }}>
                <input class="form-check-input" type="radio" name="shippingAddress" id="" value={props.addressName} />
                <label class="form-check-label" for="flexRadioDefault1">
                   {props.addressName}
                </label>
            </div>
        
        </>
    )
}
