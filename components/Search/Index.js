import React from 'react'

export default function Index() {
    return (
        <div className="search-section">
            <select className='category' name="" id="">
                <option value="">Select</option>
                <option value="">Select</option>
                <option value="">Select</option>
            </select>
            <input type="text" className='search-input' name="" id="" />
            <div className='action'>
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
