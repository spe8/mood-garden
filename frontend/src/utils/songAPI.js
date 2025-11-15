// Mock song search for now
export const searchSongs = async (query) => {
  // Simulating API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock results
  return [
    {
      id: 'song1',
      name: 'Example Song 1',
      artist: 'Artist Name',
      genre: 'pop',
      mood: 'happy'
    },
    {
      id: 'song2',
      name: 'Example Song 2',
      artist: 'Another Artist',
      genre: 'rock',
      mood: 'energetic'
    }
  ];
};

export const addSongToGarden = async (song) => {
  console.log('Adding song to garden:', song);
  // This would call your backend
  return { success: true };
};