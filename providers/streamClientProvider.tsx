import { useUser } from '@clerk/nextjs';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { error } from 'console';
import { ReactNode, useState, useEffect } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

interface StreamVideoProviderProps {
  children: ReactNode;
}

const StreamVideoProvider: React.FC<StreamVideoProviderProps> = ({ children }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient | undefined>(undefined);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    // if (apiKey) {
    //   const client = new StreamVideoClient(apiKey);
    //   setVideoClient(client);
    // }

    if(!isLoaded || !user) {
      return;
    } if (!apiKey) {
      throw new Error('API key is not set');
    }

    const client = new StreamVideoClient({
      apiKey,
        user: {
          id: user?.id,
          name: user?.username || user?.id,
          image: user?.imageUrl,
        },
    })
  }, [user, isLoaded]);

  if (!videoClient) {
    return <div>Loading...</div>;
  }

  return (
    <StreamVideo client={videoClient}>
      {children}
    </StreamVideo>
  );
};

export default StreamVideoProvider;
