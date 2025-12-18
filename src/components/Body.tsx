function Body() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <a href="#" className="hover-3d my-12 mx-2 cursor-pointer">
        {/* content */}
        <div className="card w-96 h-48 bg-black text-white ">
          <div className="card-body ">
            <div className="flex justify-between mb-10">
              <div className="font-bold">Caleb Jennings</div>
            </div>
            <div className="text-lg mb-4 opacity-40">Software Engineer </div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs opacity-20">Emory University 2026</div>
                <div>Atlanta, GA</div>
              </div>
              <div>
                <div className="text-xs opacity-20">PLEASE HIRE BY</div>
                <div>26/05</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </a>
    </div>
  );
}

export default Body;
