export default function CardSection() {
  return (
    <div className="w-full flex justify-center bg-[#ffffff] py-10">
      <div className="max-w-[1100px] w-full grid grid-cols-3 gap-6 ">
        {/* ABOUT */}
        <div className="bg-[#012A42] text-[#ffffff] p-6 rounded-md text-[16px] font-semibold">
          <h3 className="text-[#FAA419] font-bold text-[30px] mb-3">About</h3>
          <p className=" leading-[26px]">
            Cozym Limited is a 100% Nigerian indigenous company delivering oil
            and gas infrastructure that powers Nigeria’s energy future.
          </p>
        </div>

        {/* CONTACT */}
        <div className="bg-[#FAA419] text-[#ffffff] p-6 rounded-md text-[16px] font-semibold ">
          <h3 className="text-[#012A42] font-bold text-[30px] mb-3">Contact</h3>

          <p className="">+234 907 000 0251</p>
          <p className="">+234 907 000 0252</p>
          <p className="">+234 907 000 0253</p>

          <p className="mt-2">cozym@cozymld.com</p>
          <p className="">Mon - Fri: 7:00 am - 6:00 pm</p>
        </div>

        {/* ADDRESS */}
        <div className="bg-[#012A42] text-[#ffffff] p-6 rounded-md text-[16px] font-semibold">
          <h3 className="text-[#FAA419] font-bold text-[30px] mb-3">Address</h3>

          <p className=" leading-[26px]">
            Plot 2, Block 115, Ayo Babatunde Crescent, Off Oniru New Market
            Road, Lekki, Lagos State, Nigeria
          </p>
        </div>
      </div>
    </div>
  );
}
