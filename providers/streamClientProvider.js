import {
    StreamCall,
    StreamVideo,
    StreamVideoClient
  } from "@stream-io/video-react-sdk"
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
  const userId = "user-id"
  const token = "authentication-token"
  const user = { id: userId }
  
  const client = new StreamVideoClient({ apiKey, user, token })
  const call = client.call("default", "my-first-call")
  call.join({ create: true })
  
  export const MyApp = () => {
    return (
      <StreamVideo client={client}>
        <StreamCall call={call}>
        </StreamCall>
      </StreamVideo>
    )
  }
  