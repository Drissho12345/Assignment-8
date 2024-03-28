import { useEffect, useState } from "react";

import { getUser ,getWishlistUser } from "../Utility/Localstoage";
import ReadBooks from "../Read Books/ReadBooks";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WishlistBooks from "../Wishlist Books/WishlistBooks";



const ListedBook = () => {
    const [blogs, setBlogs] = useState([]);
    const [wishlist, setWishlist] =useState([]);
    // console.log(wishlist)
    useEffect(()=>{
        const storedBooks = getUser();
        setBlogs(storedBooks);
    },[]);

    useEffect(()=>{
        const storedBooks = getWishlistUser();
        setWishlist(storedBooks);
    },[]);


    return (
        <div className="w-[90%] m-auto">
           <div className="text-center rounded-3xl bg-[#1313130D] mb-9 text-[40px] font-bold">
                <h1 className="p-9">Books</h1>
            </div>
            <div>
              <Tabs>
                <TabList>
                  <Tab>Read Books</Tab>
                  <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                  <div>
                  {
                    blogs.map(blog=><ReadBooks key={blog.id} blog={blog}></ReadBooks>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div>
                  {
                    wishlist.map(book=><WishlistBooks key={book.id} book={book}></WishlistBooks>)
                  }
                  </div>
                </TabPanel>
              </Tabs>
            </div>
            
            
        </div>
    );
};

export default ListedBook;