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

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque, cum sit odit debitis tenetur! Soluta et tenetur omnis nihil dicta deleniti distinctio. Doloremque id sequi quidem facere a aperiam quos distinctio cum, deleniti doloribus ratione laborum veritatis neque sit ipsum labore beatae corrupti magni necessitatibus consectetur ab? Eaque dicta quia velit id amet nostrum delectus deleniti accusamus dolore. Voluptatibus odit mollitia, fugit repellendus nisi similique vero cum magni dolorum quaerat accusamus, amet sed debitis itaque eveniet nostrum est eius inventore corporis maiores impedit laudantium eum quidem! Incidunt iure totam rerum, mollitia placeat labore itaque doloremque exercitationem, distinctio sit voluptas.
      </p>
    </div>
  )
}

export default App