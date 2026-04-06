"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

const finosProducts: Gallery4Item[] = [
  {
    id: "esignsuite",
    title: "eSignSuite",
    description:
      "Bộ giải pháp ký số toàn diện đạt chuẩn pháp lý Việt Nam và quốc tế, hỗ trợ ký đơn lẻ, ký hàng loạt và quản lý vòng đời hợp đồng điện tử.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "ekyc",
    title: "eKYC",
    description:
      "Xác minh danh tính khách hàng trực tuyến nhanh chóng và chính xác với công nghệ nhận diện khuôn mặt, OCR CMND/CCCD và liveness detection.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "etms",
    title: "eTMS",
    description:
      "Hệ thống quản lý giao dịch điện tử toàn diện, tự động hóa luồng xử lý giao dịch, đối soát và báo cáo theo thời gian thực cho các tổ chức tài chính.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "emeeting",
    title: "eMeeting",
    description:
      "Nền tảng họp trực tuyến và ký kết hợp đồng từ xa đạt chuẩn pháp lý, tích hợp eKYC và eSign trong cùng một luồng hội nghị.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "econnect",
    title: "eConnect",
    description:
      "Nền tảng kết nối mở giữa ngân hàng, fintech và đối tác thứ ba thông qua API chuẩn hóa, giúp triển khai tích hợp nhanh chóng và an toàn.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "edocai",
    title: "eDocAI",
    description:
      "Giải pháp xử lý tài liệu thông minh ứng dụng AI — OCR, trích xuất dữ liệu và phân loại tài liệu tự động, giảm thiểu thao tác thủ công.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "micro-investment",
    title: "Micro-Investment Solution",
    description:
      "Giải pháp đầu tư vi mô toàn diện hỗ trợ toàn bộ vòng đời đầu tư, kết nối với mạng lưới các công ty quản lý tài sản và nhà phân phối đã được cấu hình sẵn.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "micro-lending",
    title: "Micro-Lending Solution",
    description:
      "Giải pháp cho vay vi mô plug-and-play hỗ trợ toàn bộ vòng đời khoản vay, tích hợp mạng lưới rộng lớn các tổ chức cho vay và nhà phân phối sản phẩm đã được cấu hình sẵn.",
    href: "/services/esign",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "credit-scoring",
    title: "Credit Scoring Engine",
    description:
      "Động cơ chấm điểm tín dụng AI xử lý dữ liệu từ cả nguồn truyền thống lẫn các nguồn dữ liệu mới độc quyền, giúp tăng tỷ lệ phê duyệt và giảm rủi ro nợ xấu.",
    href: "/services/credit-scoring",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

const Gallery4 = ({
  title = "Sản phẩm của FinOS",
  description = "Hệ sinh thái sản phẩm tài chính kỹ thuật số toàn diện — từ chấm điểm tín dụng, cho vay vi mô, đầu tư đến ký số và dữ liệu mở, giúp đối tác triển khai nhanh chóng tại Đông Nam Á.",
  items = finosProducts,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => { carouselApi.off("select", updateSelection); };
  }, [carouselApi]);

  return (
    <section className="pt-8 pb-24 bg-transparent">
      {/* Header căn đều với các section khác */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 md:mb-14 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-gray-400 text-lg leading-relaxed">{description}</p>
          <div className="flex justify-center gap-2 mt-6">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto text-white hover:bg-white/10 disabled:opacity-30"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel full-width, bắt đầu từ edge trái của container */}
      <div className="w-full overflow-hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": { dragFree: true },
            },
          }}
        >
          <CarouselContent className="ml-[max(1rem,calc(50vw-42rem))] 2xl:ml-[max(2rem,calc(50vw-42rem))]">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-5 basis-[70%] sm:basis-[45%] md:basis-[33%] lg:basis-[26%]"
              >
                <a href={item.href} className="group block rounded-xl">
                  <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f2e]/90 via-[#0a0f2e]/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6">
                      <div className="mb-2 text-lg font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="mb-6 line-clamp-2 text-gray-300 text-base">
                        {item.description}
                      </div>
                      <div className="flex items-center text-accent text-sm font-medium">
                        Tìm hiểu thêm{" "}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Dots căn giữa */}
      <div className="mt-8 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-accent" : "bg-white/20"
            }`}
            onClick={() => carouselApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export { Gallery4 };
