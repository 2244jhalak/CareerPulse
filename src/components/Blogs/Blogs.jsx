

const Blogs = () => {
    return (
        <div className="my-10 px-10 space-y-5">
            <div>
            <h3 className="text-2xl font-semibold">1. What is an access token and refresh token? How do they work and where should
we store them on the client side?</h3>
<p className="text-xl"><span className="underline">Answer : </span><br></br>
Access Token:<br></br>
An access token is a piece of data that is typically issued by an authentication server upon successful authentication of a user. It serves as a credential that grants the client (such as a web or mobile application) permission to access protected resources on a server. Access tokens are commonly used in OAuth 2.0 and OpenID Connect authentication protocols.<br></br>
Refresh Token:<br></br>
A refresh token is a special token that is used to obtain a new access token once the current access token expires. Refresh tokens are commonly used in scenarios where long-lived access is required without frequent user interaction, such as mobile or single-page applications.<br></br>
Access tokens and refresh tokens are essential components of modern authentication systems, providing a secure and scalable way to authenticate users and authorize access to resources on a server. They play a crucial role in maintaining the security and integrity of web and mobile applications, enabling users to access their data securely while minimizing the risk of unauthorized access.
</p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">2. What is express js? What is Nest JS?</h3>
                <p className="text-xl"><span className="underline">Answer : </span><br></br>
                Express.js:<br></br>
Express.js is a minimalist web application framework for Node.js. It provides a robust set of features for building web applications and APIs, making it one of the most popular choices for server-side development with Node.js. Express.js simplifies the process of handling HTTP requests, defining routes, and integrating middleware, allowing developers to focus on building scalable and efficient web applications.<br></br>
Nest.js:<br></br>
Nest.js is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It leverages TypeScript, a statically typed superset of JavaScript, to enhance developer productivity and code maintainability. Nest.js combines elements of object-oriented programming, functional programming, and functional reactive programming to create a powerful and expressive framework for building modern web applications.
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">Explain your code.</h3>
                <p className="text-xl"><span className="underline">Answer : </span><br></br>
                My job searching website leverages the power of React for the frontend user interface, Firebase for user authentication, and MongoDB for data storage. By integrating these technologies, I can create a robust and scalable web application that provides a seamless experience for job seekers and employers alike.
                
                </p>
            </div>
            
        </div>
    );
};

export default Blogs;