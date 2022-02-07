import avatar from "../img/punk4596.png";
const UserWidget = () => {
  // const { name, avatar } = user;
  return (
    <div className="user-widget border bg-gray-500 w-full h-hull">
      <div className="user-widget__avatar">
        <img
          src={avatar}
          alt={`punk`}
          className="rounded-full w-16 bg-gradient-to-tr from-[#ed0138] to-[#ed01ae] border-[#060508] border-2"
        />
      </div>
      <div className="user-widget__name">0xreeko</div>
    </div>
  );
};
export default UserWidget;
