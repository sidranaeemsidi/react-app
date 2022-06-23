import React, { useEffect, useState } from "react";


function UseEffectAPI() {

    const [users, setUsers] = useState([]);



    const getUsers = async () =>{ 
        const response = await fetch('http://api.github.com/users');
        setUsers(await response.json());

    }
    useEffect(() => {
        getUsers();
    }, []);
  return (
    <>
      <h2>List of GitHub Users</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          
            {
                users.map((currElem) => {
                    return(
                        <div className="col-10 col-md-4 mt-5">
                            <div className="card p-2">
                                <div className="d-flex align-items-center">
                                <div className="image"><img src={currElem.avatar_url} className="rounded" alt={currElem.id} /></div>
            <div className="ml-3 w-100">
           <h4 className="mb-0 mt-0 textLeft"> {currElem.login} </h4> <span className="textLeft">{currElem.type}</span>
           <div className="p-2 mt-2 bg-primary d-flex justifty-content-between rounded tecxt-white stats">
            <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">38</span></div>
            <div className="d-flex flex-column"> <span className="fllowers">Followers</span> <span className="number1">980</span></div>
            <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number1">8.9</span></div>
           </div>
            </div>
            </div>
            
            </div>
            </div>
                    )
                })


            }

           
            
          </div>
        </div>
    </>
  );
}

export default UseEffectAPI;
