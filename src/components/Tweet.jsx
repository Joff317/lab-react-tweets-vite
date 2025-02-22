import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import TimesTamp from "./TimesTamp";
import User from "./User";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image}/>

      <div className="body">
        <div className="top">
        <User name={tweet.user.name} handle={tweet.user.handle} />

          <TimesTamp timestamp={tweet.timestamp}/>
          
        </div>

        <Message message={tweet.message}/>

        <Actions/>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
