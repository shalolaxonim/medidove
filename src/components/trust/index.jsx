import ButtonPink from "../buttonPink";

export default function TrustPart() {
  return (
    <div>
      <div className="bg-[#13232F] p-[20px] lg:px-[250px] py-[80px]">
        <div className="flex flex-col gap-[30px] items-center text-center justify-center">
          <h2 className="text-gray-500 text-[20px] font-semibold">
            Stay healthy & strong to enjoy life
          </h2>
          <h1 className="text-white text-[30px] md:text-[60px] font-bold md:leading-[70px]">
            Trust Us To Be There To Help All & Make Things Well Again.
          </h1>
          <ButtonPink btnText={"GET A CONSULTANT"} />
        </div>
      </div>
    </div>
  );
}
