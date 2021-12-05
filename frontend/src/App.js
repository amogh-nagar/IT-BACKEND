import React, { useEffect, useRef } from "react";

const App = () => {
  const inputref = useRef();
  const emailref = useRef();

  useEffect(() => {
    const fetchdata = () => {
      fetch("http://localhost:3000/user")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchdata();
  }, []);

  const submithandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: inputref.current.value,
        email: emailref.current.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form action="" onSubmit={submithandler}>
        <input type="text" name="name" ref={inputref} />
        <input type="text" name="email" ref={emailref} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
