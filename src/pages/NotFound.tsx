function NotFound() {
  return (
    <div className="h-screen bg-black text-white grid place-items-center ">
      <div className="flex gap-10 items-center">
        <h4 className="text-2xl">404</h4>
        <div className="w-[1px] h-10 bg-white"></div>
        <p>This page could not be found.</p>
      </div>
    </div>
  );
}

export default NotFound;
