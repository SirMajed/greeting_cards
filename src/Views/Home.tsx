import GreetingCardItem from "@/components/GreetingCardItem";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex items-center h-full justify-center ">
      <div className="mt-32 flex flex-col-reverse lg:flex-row gap-10 items-center lg:items-start justify-center">
        <div className="px-6">
          <Image
            src="/images/envelope.svg"
            alt="Image"
            height="400"
            width="450"
          />
        </div>

        <div className="text-center lg:text-right select-none px-3 lg:px-5 xl:px-0">
          <p className="text-t4  text-xl lg:text-3xl">بطاقات تهنئة</p>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl text-center  lg:text-right font-black font-tajwal">
            <span className="text-t2">صمم</span>{" "}
            <span className="text-t2">بطاقتك</span>{" "}
            <span className="text-t3">الآن</span>
          </h1>
          <p className="text-sm lg:text-lg text-gray-400 mt-4">
            صمم و شارك بطاقات التهنئة مع من تحب و ادام الله عليكم المحبة و
            السعادة
          </p>

          <div className="grid grid-rows-2 lg:grid-cols-2 items-center gap-4 w-full font-tajwal py-8">
            <GreetingCardItem
              title={"عيد الفطر"}
              description={"صمم بطاقاتك الخاصة بعيد الفطر المبارك"}
              href={"/eid"}
              soon={false}
            />
            <GreetingCardItem
              title={"رمضان"}
              description={"صمم بطاقاتك الخاصة بشهر رمضان المبارك"}
              href={"/ramadan"}
              soon={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
