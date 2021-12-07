import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
import * as blogPosts from "../../mockupData/dbBlogData.json";

const Posts = () => {

return (
	
	<div>
		<div className="Intro">
              <h1>Concepts & Structures :Internet Computing</h1>
                <h3>A computer is an electronic device that accepts data from the user, processes it, produces results, displays them to the users, and stores the results for future usage. Data is a collection of unorganized facts & figures and does not provide any further information regarding patterns, context, etc. Hence data means "unstructured facts and figures". Information is a structured data i.e. organized meaningful and processed data. To process the data and convert into information, a computer is used.</h3>                            
        </div>
		<div className="posts-container">
			{blogPosts.default.map(post => (
				<Post key={post.id} post={post} />
			))}
		</div>
		
	</div>
);
};

export default Posts;
