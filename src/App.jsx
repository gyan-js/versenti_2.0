
import { createContext, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Switch from 'rc-switch'
import ReactSwitch from 'react-switch'
import { Searchbar, Sidebar, MusicPlayer, TopPlay, ThemeSwitch } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';
import Spline from '@splinetool/react-spline';

export const ThemeContext = createContext(null)



const App = () => {
  const { activeSong } = useSelector((state) => state.player);


 
  
  return (
   
    <div className="relative flex">
      <Sidebar />
       
      <div className="flex-1  bg-[#5464f7] flex flex-col bg-gradient-to-br dark:bg-[#3347ff] " >
        
      
        <div className="px-6 h-[calc(100vh-60px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
            
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
        
            </Routes>
          </div>
          
          <div className="xl:sticky relative top-0 h-fit">
            
            <TopPlay />
          

   

 
          </div>
          
        </div>
        
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
   
  );
};

export default App;
