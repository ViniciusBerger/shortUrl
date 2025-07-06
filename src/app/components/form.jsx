"use client";
import { useState } from 'react';
import Handler from '../backend/shorten.js';


const form = () => {

  const [longUrl, setLongUrl] = useState('')
  const [alias, setAlias] = useState('')
  const [apiResponse, setApiResponse] = useState('')

    const handleSubmit = async (e)=> {
      e.preventDefault()
      console.log("Submitting form with URL:", longUrl, "and alias:", alias);
      let response = await Handler(longUrl, alias)
      setApiResponse(response)
    }

    return (
        <form className='mt-32 text-[#bb4fff] w-full max-w-md mx-auto p-16 bg-[#1A1A1A] shadow-md rounded-lg'>
          <div className="mb-4">
            
            <label htmlFor="url" className="text-center block text-md font-medium mb-4">
              Enter URL to shorten:
            </label>
            
            <input
              type="url"
              id="url"
              name="url"
              placeholder="https://example.com"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
               className="container bg-[#121212]  border border-[#2a2a40] rounded-sm px-3 py-2 focus:outline-none focus:ring-2"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="url"
              id="url"
              name="url"
              placeholder="My linkedin"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
               className="container bg-[#121212] border border-[#2a2a40] rounded-sm px-3 py-2 focus:outline-none focus:ring-2"
              required
            />
          </div>

          <button
            onClick={(e)=>{handleSubmit(e)}}
            type="submit"
            className="mt-8 container bg-[#bb4fff] hover:bg-[#9c3dff] text-black font-bold py-2 px-4 rounded-sm shadow-md transition">
              Shorten URL
          </button>

          {apiResponse && (
            <div className="mt-4 text-center">
              <p className="text-md font-medium">Shortened URL:</p>
              <p href={apiResponse} target="_blank" rel="noopener noreferrer" className="mt-6 text-white hover:underline hover:text-blue-500">
                {apiResponse}
              </p>
            </div>
          )}
       </form>

    )
  }

export default form;
// This component can be used in your main page or wherever you need the form to shorten URLs