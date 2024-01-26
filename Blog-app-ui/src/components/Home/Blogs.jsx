import Tag from "../ui/Tag";

// Sample data array for blogs
const data = [
  {
    id: 1,
    title: 'Introduction to React Hooks',
    subtitle: 'Learn the basics of React Hooks and how to use them in your projects.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'John Doe',
    image: 'https://source.unsplash.com/800x400/?react,programming',
  },
  {
    id: 2,
    title: 'CSS-in-JS: Styling React Components',
    subtitle: 'Explore different CSS-in-JS libraries and techniques for styling React components.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Jane Smith',
    image: 'https://source.unsplash.com/800x400/?css,design',
  },
  {
    id: 3,
    title: 'JavaScript ES6: Arrow Functions and Destructuring',
    subtitle: 'Deep dive into Arrow Functions and Destructuring in JavaScript ES6.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Alex Johnson',
    image: 'https://source.unsplash.com/800x400/?javascript,code',
  },
  {
    id: 4,
    title: 'Responsive Web Design with Flexbox',
    subtitle: 'Master the art of building responsive layouts using CSS Flexbox.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Emily Brown',
    image: 'https://source.unsplash.com/800x400/?flexbox,design',
  },
  {
    id: 5,
    title: 'Node.js Basics: Getting Started with Server-Side JavaScript',
    subtitle: 'Explore the fundamentals of Node.js and its role in server-side development.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Chris Wilson',
    image: 'https://source.unsplash.com/800x400/?nodejs,code',
  },
  {
    id: 6,
    title: 'GraphQL: A Query Language for APIs',
    subtitle: 'Introduction to GraphQL and how it revolutionizes API development.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Sophia Carter',
    image: 'https://source.unsplash.com/800x400/?graphql,programming',
  },
  {
    id: 7,
    title: 'State Management in React: Redux and Context API',
    subtitle: 'Comparing state management options in React, including Redux and Context API.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'David Miller',
    image: 'https://source.unsplash.com/800x400/?react,redux',
  },
  {
    id: 8,
    title: 'Web Accessibility: A Comprehensive Guide',
    subtitle: 'Ensuring your web applications are accessible to all users.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Grace White',
    image: 'https://source.unsplash.com/800x400/?accessibility,design',
  },
  {
    id: 9,
    title: 'Testing JavaScript Applications with Jest',
    subtitle: 'Introduction to Jest for testing JavaScript applications.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Michael Green',
    image: 'https://source.unsplash.com/800x400/?jest,programming',
  },
  {
    id: 10,
    title: 'Deploying React Apps: From Development to Production',
    subtitle: 'Guide to deploying React applications on various platforms.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Jessica Adams',
    image: 'https://source.unsplash.com/800x400/?react,deployment',
  },
];



const Blogs = () => {
  return (
    <div className="mt-[4rem] container   mx-auto">


      <ul className=" w-full grid grid-cols-1 px-2 py-1  text-slate-300 font-medium gap-x-8 gap-y-16  sm:grid-cols-2 lg:grid-cols-3">
        {
          data.map((item) => {
            return <li className="" key={item.id}>
              <img className="px-2  py-2 rounded-3xl" src={item.image} alt="" />
              <div className="w-full px-4 py-2 flex flex-col gap-3">
                <p className=" text-slate-300">
                  {item.author}
                  <span> 23 Jan 2024  </span>
                </p>
                <h3 className="text-2xl font-bold text-slate-50 "> {item.title} </h3>
                <p className="text-slate-500 font-medium " > {item.subtitle} </p>
                <div className="w-full flex gap-1  mt-4">
                  <Tag text={"#React"} color={"text-green-900"} bgColor={"bg-green-400"} />
                  <Tag text={"#Web Developement "} color={"text-blue-900"} bgColor={"bg-blue-900"} />
                  <Tag text={"#Css"} color={"text-indigo-800"} bgColor={"bg-indigo-900"} />
                </div>
              </div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Blogs