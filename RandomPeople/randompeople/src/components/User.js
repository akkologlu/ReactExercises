function User({ user }) {
    return (
        <div className="userDiv">
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4">
                    <div className=" image d-flex flex-column justify-content-center align-items-center ">
                        <br />
                        <button className="btn">
                            <img src={user.picture.large} height="120" width="120" className="image" />
                        </button> 
                        <br />
                        <span className="name mt-3">{user.name.title} {user.name.first} {user.name.last}</span>
                        <br />
                        <span className="idd">@{user.login.username}</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span className="location">{user.location.city}, {user.location.country}</span>
                            
                        </div>
                        <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                            <span className="follow">{user.email}</span>
                           
                            
                        </div>
                        <br />
                        
                        
                        <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                            <span><i className="fa fa-twitter"></i></span>
                            <span><i className="fa fa-facebook-f"></i></span> 
                            <span><i className="fa fa-instagram"></i></span> 
                            <span><i className="fa fa-linkedin"></i></span> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default User;