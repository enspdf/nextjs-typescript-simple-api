import { useRef, useState } from "react";
import fetch from "isomorphic-unfetch";

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const [message, setMessage] = useState<any>(null);

    async function handleLogin() {
        const resp = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailRef.current?.value,
                password: passRef.current?.value
            })
        });

        const json = await resp.json();
        setMessage(json);
    };

    return (
        <div>
            {JSON.stringify(message)}
            <input type="text" placeholder="Email" ref={emailRef} />
            <input type="password" placeholder="Password" ref={passRef} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};