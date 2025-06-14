"use client";
import  debounce  from 'lodash/debounce';
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import { plusJakarta } from '../utils/font'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


type SearchBarProps = {
  placeholder?: string;
  onSearch: (query: string) => void;
  buttonLabel?: string;
  debounceMs?: number;
  getSuggestions?: (query: string) => void;
};

const SearchCapsule = ({ 
  placeholder = "Search...",
  onSearch, 
  buttonLabel = "Connect",
  debounceMs = 500
  }: SearchBarProps) => {

    const [input, setInput] = useState("");

    const debouncedSearch = useCallback(
      debounce((value: string) => {
        onSearch(value.trim());
      }, debounceMs),
      [onSearch, debounceMs]
    );

    // Trigger debounced search when input changes
    useEffect(() => {
      debouncedSearch(input);
      return () => {
        debouncedSearch.cancel(); // Cancel any pending debounced calls on unmount or query change
      };
    }, [input, debouncedSearch]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      debouncedSearch.cancel(); // Cancel pending debounce
      onSearch(input.trim());   // Trigger immediate search
    };
    
  return (
    
    <div className='flex items-center gap-3 '>
      <form onSubmit={handleSubmit} className={`px-[8px] bg-[#11171D] ${plusJakarta} text-[14px]/[20px] font-medium hidden sm:flex gap-2 rounded-md  items-center`}>
        <button type='submit' className='cursor-pointer bg-transparent'>           
          <Image src="/search-icon.svg" width={12} height={12} alt="search icon" /> 
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className='px-2 py-0 w-25 h-9 text-[#70808F] text-[14px] border-0 focus:outline-none'
        />
      </form>
      <Button asChild className="bg-[#1E80FF] py-[9px] px-[12px]">
        <Link href="" className={`${plusJakarta}`}>
          {buttonLabel}
        </Link>
      </Button>
    </div>
  )
}

export default SearchCapsule;