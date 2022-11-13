import { useState } from "react";

function Create() {
    const [username, setUsername] = useState("");
    const [blog, setBlog] = useState("");

    async function fetchUserDetails() {
        const resp = await fetch("http://localhost:3000/user")
    }
    function handleSubmit() {
        
    }
    return (
    <>
        <div>Enter your details</div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Username:
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.currentTarget.value)}/>
                </label>
            </div>
            <div>
                <label>
                    Blog post:
                    <input 
                        value={blog}
                        onChange={(e) => setBlog(e.currentTarget.value)}
                    />
                </label>
            </div>
            <button>Submit</button>
        </form>
    </>
    );
}

export default Create;