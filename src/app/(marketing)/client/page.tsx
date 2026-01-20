import ImageClientMoodTest from "@/public/imgs/image-client-mood.png";
import ImageClientProduct from "@/public/imgs/image-client-product.png";
import ImageClientReserve from "@/public/imgs/image-client-reserve.png";
import Image from "next/image";
import MoodAnimation from "../_components/MoodAnimation";
import ClientFooter from "./components/ClientFooter";

export default function Page() {
  return (
    <div className="flex flex-col px-[2rem] w-full items-center">
      <div className="flex flex-col gap-[4.2rem] w-full">
        <div className="flex flex-col gap-[0.7rem] text-center">
          <h1 className="text-black-1  title-23-eb">
            테스트 한 번으로
            <br />
            나만의 스냅 무드 알아보기
          </h1>
          <h2 className="caption-14-rg text-black-6 ">
            나도 몰랐던 나의 스냅 추구미,
            <br />
            AI 무드 테스트로 만족스러운 스냅 촬영을 경험하세요
          </h2>
        </div>
        <Image src={ImageClientMoodTest} alt="클라이언트 무드 테스트 이미지" />
      </div>
      <MoodAnimation />
      <ClientFooter buttonText="AI 무드 큐레이션 받아보기" />
      <div className="flex flex-col gap-[3.8rem] mt-[8rem]">
        <div className="flex flex-col gap-[0.7rem] text-center">
          <h1 className="text-black-1  title-23-eb">
            원하는 조건으로
            <br />
            스냅 상품을 한 눈에,
          </h1>
          <h2 className="caption-14-rg text-black-6 ">
            여러 채널로 나뉘어 있던 예약 현황을
            <br />내 예약 탭에서 관리하세요.
          </h2>
        </div>
        <Image src={ImageClientProduct} alt="클라이언트 스냅 상품 이미지" />
      </div>
      <ClientFooter buttonText="무드 스냅 상품 둘러보기" />
      <div className="flex flex-col gap-[3.8rem] mt-[8rem]">
        <div className="flex flex-col gap-[0.7rem] text-center">
          <h1 className="text-black-1  title-23-eb">
            흩어져 있던 스냅 예약 정보를
            <br />한 곳에서 투명하게,
          </h1>
          <h2 className="caption-14-rg text-black-6 ">
            여러 채널을 옮겨다니며 확인하던 예약 정보를
            <br />
            한눈에 모아 비교해, 손쉽게 예약하세요.
          </h2>
        </div>
        <Image
          src={ImageClientReserve}
          alt="클라이언트 스냅 예약 정보 이미지"
        />
      </div>
      <ClientFooter buttonText="무드 스냅 예약하기" />
    </div>
  );
}
