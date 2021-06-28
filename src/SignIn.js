
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login"
import { Card } from "react-bootstrap";

export default function SignIn(props) {
    const [login, setLogin] = useState(false) //Set up Login
    const [data, setData] = useState({}) //Set up Login
    const [picture, setPicture] = useState('') //Set up Login
    const responseFacebook = (res) => {
        setData(res)
        setPicture(res.picture.data.url)
        if (res.accessToken) {
            setLogin(true)
        } else {
            setLogin(false)
        }
    }
    return (
        <div className="container">
            <Card>
                {!login && <>
                    <Card.Header className="h1">Sign In</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <h3>Please login using one of the following:</h3>
                            {/*Login Form*/}
                            <LoginForm />
                            {/*FB Login Button*/}
                            <FacebookLogin
                                appId={"134438518760973"}
                                autoLoad={false}
                                fields={"name, email, picture"}
                                scope={"public_profile, user_friends"}
                                callback={responseFacebook}
                                icon={"fa-facebook"}
                            />
                        </Card.Text>
                    </Card.Body>
                </>}
                {login && <Home fbpic={picture} fbdata={data} />}
            </Card>
        </div>
    );
}

function LoginForm() {
    return (
        <form className="border mt-3 mb-5 p-3 bg-white">
            <label className="m-2">Name: </label>
            <input type="text" name="name" placeholder="Your Name" />
            <label className="m-2">Email: </label>
            <input type="email" name="email" placeholder="Your Email" />
            <input type="submit" value="Login" className="btn bg-success text-white my-3" />
        </form>
    )
}

function Home({ fbpic, fbdata }) {
    return (
        <React.Fragment>
            <Card>
                <Card.Header className="h1">Check Out</Card.Header>
                <Card.Body>
                    <img src={fbpic} alt={fbdata.name} />
                    <h3 className="d-inline text-success mx-2">
                        Welcome back {fbdata.name}!
                    </h3>
                    <p className="my-5">Time to check out?</p>
                </Card.Body>
            </Card>
        </React.Fragment>
    )
}