'use client'

import {BsSearch} from "react-icons/bs"
import { useState} from "react"
import Router from "next/router"


const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = event => {
    setSearchValue(event.target.value)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    // Kirim permintaan ke REST API
    const res = await fetch(`http://localhost:8000/films/search/${searchValue}`)
    const data = await res.json()
    const filmValue = searchValue
    // Simpan data hasil pencarian di cache
    // Anda dapat menggunakan apapun yang sesuai untuk menyimpan data hasil pencarian,
    // seperti Local Storage atau Redux store
    window.CacheStorage = {
      filmResults: data,
      filmsValue : filmValue
    }
    // Arahkan pengguna ke halaman dinamis yang menampilkan hasil pencarian
    Router.push('/films/search')
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar border-2 border-red-500 border-solid rounded-full w-[400px] flex items-center px-4 py-2">
    <input className="bg-transparent text-white focus:outline-none text-base w-full" 
    placeholder="Cari Film Disini" 
    type="text"
    value={searchValue}
    onChange={handleSearch}
     />
    <button type="submit"><BsSearch/></button>
    </form>
  )
}

export default SearchForm
