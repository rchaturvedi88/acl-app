import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-red-950 p-8 bg-emerald-50 text-rose-950  text-center rounded-lg xl:w-50 mx-auto">
                            <h4 className="font-bold text-2xl mb-4">Access Livelihoods Foundation</h4>
                            <div className='text-md font-medium text-gray-600  hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'>
                            <ul className="text-md">
                            <li className="mb-2">
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Livelihood Models</Link>
                            </li>
                            <li className="mb-2">
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Beehive Models</Link>
                            </li>
                            <li className="mb-2">
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Cross Polination</Link>
                            </li>
                            <li>
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Metamorphosis</Link>
                            </li>
                            <li>
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Symbiosis</Link>
                            </li>
                            <li>
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Web</Link>
                            </li>
                            </ul>
                            </div>
                        </div>
                    </div>

                    
                    {/* 2nd block */}
                <div className="box-border border-b-4 border-red-950 p-8 bg-gray-100 text-orange-950 text-center rounded-lg xl:w-50 col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className=" text-rose-950  rounded-lg xl:w-80 mx-auto text-2xl font-bold mb-4">Innovative Service Platforms</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"> Transforming India Initiative</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Reimagine Learning</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Reimagine Finance</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#801f1f] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Reimagine Opportunities</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-rose-950 ">
                        <div className="text-xl mb-6">
                            <hr className="border-red-950 border-double"/>
                             Connecting Hooks
                        </div>
                         {/* 3rd block */}

                    <div className="box-border border-b-4 border-red-950 p-8 bg-emerald-50 text-orange-950 text-center rounded-lg xl:w-50 col-span-6  lg:col-span-1 md:col-span-6  mx-auto ">                        
                        <ul className="text-md" >
                        <li className="mb-2" > 
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>
                         {/* 4th block */}


                            <div className="text-[#b93434] text-md font-medium mb-6">
                                < br />
                                <hr />
                                Social Media Reachability
                                <hr />
                            </div>
                            <div className="mx-auto text-center mt-2">
                            <ul className="flex justify-center mb-4 md:mb-0">
                                <li>
                                    <Link to="#" className="flex justify-center items-center text-rose-950  hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                    </svg>
                                    </Link>
                                </li>
                                <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-rose-950  hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                    </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="https://www.youtube.com/c/AccessLivelihoods" className="flex justify-center items-center text-rose-950 hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                                        aria-label="Youtube" >

                                    <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> 
                                    {/* Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */ }
                                         <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                                    </svg>
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Access Livelihoods Foundation <hr />
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
