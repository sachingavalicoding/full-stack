import { Client, Databases } from "appwrite";
import { useEffect, useState } from "react";
const App = () => {
  const [data, setData] = useState(null);
  const client = new Client();

  const databases = new Databases(client);
  client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65a05a15e5700eeb68d5')
    ;

  const promise = databases.listDocuments('65b0455a93ac7df7644a', '65b045687ffabc2ab44a');

  useEffect(() => {
    promise.then(function (response) {
      setData(response.documents) // Success
    }, function (error) {
      console.log(error); // Failure
    });

  }, [])

  return (
    <div className="text-xl text-green-600">
      {
        (data.map((item) => <h1 key={item.$id}> {item.name} {item.$id} {item.content} {item.email} </h1>))
      }
    </div>
  )
}

export default App