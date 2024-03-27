import { useEffect, useState } from "react";

import { getUser } from "../Utility/Localstoage";
import ReadBooks from "../Read Books/ReadBooks";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const ListedBook = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const storedBooks = getUser();
        setBlogs(storedBooks);
    },[])
    return (
        <div className="w-[90%] m-auto">
           <div className="text-center rounded-3xl bg-[#1313130D] mb-9 text-[40px] font-bold">
                <h1 className="p-9">Books: {blogs.length}</h1>
            </div>
            <div>
            <div>
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      {
        blogs.map(blog=><ReadBooks key={blog.id} blog={blog}></ReadBooks>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
            </div>
             {/* <AllSelectBook></AllSelectBook> */}
            
        </div>
    );
};

export default ListedBook;