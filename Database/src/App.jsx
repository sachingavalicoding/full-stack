import { Client } from 'appwrite';

const App = () => {
  const client = new Client();

  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c1b9f230d4bdc30832');

  return (
    <div className="text-red-900">
      Helllo
    </div>
  )
}

export default App