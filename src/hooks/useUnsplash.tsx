import { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY!,
});

export function useUnsplash(){
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  // Call the fetch random photo function to set the photo url.
  // Make sure you are calling it only once. Hint: useEffect may help.

  return photoUrl;
}

const backupOptions = [
  'https://images.unsplash.com/photo-1711476926632-53026474fe1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM4OTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4NzAxNTV8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1712781797301-ec9ee12b52b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM4OTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4NzAxNTV8&ixlib=rb-4.0.3&q=80&w=1080',
  'https://images.unsplash.com/photo-1712797229262-f20f799b0639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM4OTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4NzAxNTV8&ixlib=rb-4.0.3&q=80&w=1080',
  "https://images.unsplash.com/photo-1713046184524-e8338098102e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM4OTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4NzAxNTV8&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1711419396797-2fb133e5938e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM4OTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4NzAxNTV8&ixlib=rb-4.0.3&q=80&w=1080",
  'https://images.unsplash.com/photo-1707419705861-db1b08dc36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1OTM4OTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTM4NzAxNTZ8&ixlib=rb-4.0.3&q=80&w=1080'
]

async function fetchRandomPhoto(){
  try {
    const photos = await unsplash.photos.getRandom({count: 1});
    return Array.isArray(photos.response) ? photos.response?.[0].urls.regular : photos.response?.urls.regular;
  }catch(e) { 
    // Respond with a random photo from the backup options in case there's a rate limit
  }
} 