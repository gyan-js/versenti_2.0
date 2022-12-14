import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spline from '@splinetool/react-spline';
import { Route } from 'react-router-dom';
import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';


const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
 const {isPlaying, activeSong} = useSelector((state) => state.player)
  const { data } = useGetSongsByGenreQuery(genreListId || 'POP');
  const {isFetching} = useGetSongsByGenreQuery(genreListId || 'POP')

  if (isFetching) {
    return <Loader title="Fetching songs..." />
  }

 

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>

        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-transparent bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        
        >
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
          
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
      
    
    </div>
  );
};

export default Discover;