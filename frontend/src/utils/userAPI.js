// Mock user data for now (until backend is ready)
export const getCurrentUser = async () => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    id: 'user1',
    name: 'Test User',
    garden: [
      {
        songId: 'song1',
        name: 'Bohemian Rhapsody',
        artist: 'Queen',
        genre: 'rock',
        mood: 'energetic',
        x: 150,
        y: 400,
        size: 50
      },
      {
        songId: 'song2',
        name: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        genre: 'rock',
        mood: 'energetic',
        x: 450,
        y: 400,
        size: 40
      }
    ]
  };
};

export const updateUser = async (userData) => {
  console.log('Updating user:', userData);
  return userData;
};