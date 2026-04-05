import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { MonitorPlay, ShieldCheck, FileSignature } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "FinOS eSignSuite",
  heading = "Nền Tảng Ký Điện Tử Doanh Nghiệp",
  description = "Ký nhanh hơn. Kiểm soát chặt hơn. Bằng chứng đầy đủ hơn.",
  tabs = [
    {
      value: "tab-1",
      icon: <MonitorPlay className="h-auto w-4 shrink-0" />,
      label: "eSign Platform",
      content: {
        badge: "Sandbox miễn phí",
        title: "Tự tay trải nghiệm quy trình ký số từ đầu đến cuối.",
        description:
          "Nền tảng eSign cho phép bạn tải tài liệu lên, định nghĩa thứ tự người ký, chọn phương thức xác thực danh tính và nhận gói bằng chứng hoàn chỉnh — tất cả trong vòng dưới 5 phút. Không cần cài đặt phần mềm, không cần tạo tài khoản, không giới hạn số lần thử.",
        buttonText: "Trải nghiệm ngay →",
        buttonHref: "/demo-portal/esign",
        videoSrc: "/FinOS_demo_tao_quy_trinh_ky_eSign_Portal.mp4",
        imageSrc:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        imageAlt: "FinOS eSign Demo Portal",
      },
    },
    {
      value: "tab-2",
      icon: <ShieldCheck className="h-auto w-4 shrink-0" />,
      label: "Bảo mật & Pháp lý",
      content: {
        badge: "Pháp lý & Bảo mật",
        title: "Chữ ký số có giá trị pháp lý đầy đủ tại Việt Nam.",
        description:
          "FinOS eSign tuân thủ Nghị định 130/2018/NĐ-CP về chữ ký số và Luật Giao dịch điện tử 2023. Mỗi phiên ký được gắn dấu thời gian hợp lệ (RFC 3161), nhật ký thao tác đầy đủ và gói bằng chứng kỹ thuật số — đủ cơ sở để nộp làm bằng chứng khi xảy ra tranh chấp hoặc kiểm toán. Hạ tầng bảo mật đạt chuẩn TLS 1.3, mã hóa dữ liệu khi lưu trữ và phân quyền truy cập theo vai trò.",
        buttonText: "Liên hệ tư vấn",
        buttonHref: "/contact",
        imageSrc:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
        imageAlt: "FinOS eSign Security & Compliance",
      },
    },
    {
      value: "tab-3",
      icon: <FileSignature className="h-auto w-4 shrink-0" />,
      label: "Tính năng nổi bật",
      content: {
        badge: "Linh hoạt & Toàn diện",
        title: "Ký đúng người, đúng tài liệu, đủ bằng chứng pháp lý.",
        description:
          "Hỗ trợ 4 phương thức xác thực danh tính: chữ ký tay điện tử, OTP qua SMS, VNeID và USB Token PKI. Luồng ký đa người theo thứ tự tuỳ chỉnh, có thể thiết lập thời hạn ký và nhắc nhở tự động. Sau khi hoàn tất, hệ thống tự động tổng hợp gói bằng chứng gồm hợp đồng đã ký, nhật ký thao tác từng bước và dấu thời gian — sẵn sàng lưu trữ hoặc tích hợp về hệ thống nội bộ qua API.",
        buttonText: "Xem tất cả tính năng",
        buttonHref: "#how-it-works",
        imageSrc:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80",
        imageAlt: "FinOS eSign Features",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4 text-center mb-2">
          <Badge variant="outline" className="border-[#00bcd4] text-[#00bcd4] bg-[#e0f7fa]">
            {badge}
          </Badge>
          <h1 className="max-w-2xl text-3xl font-bold text-gray-900 md:text-4xl">
            {heading}
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">{description}</p>
        </div>

        <Tabs defaultValue={tabs[0].value} className="mt-10">
          <TabsList className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-gray-500 border border-gray-200 transition-all cursor-pointer data-[state=active]:bg-[#00bcd4] data-[state=active]:text-white data-[state=active]:border-[#00bcd4] data-[state=active]:shadow-md hover:border-[#00bcd4] hover:text-[#00bcd4]"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-gray-50 border border-gray-100 p-6 lg:p-12">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-12"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-white border-gray-200 text-gray-600">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl leading-snug">
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed lg:text-lg">
                    {tab.content.description}
                  </p>
                  <a
                    href={tab.content.buttonHref}
                    className="mt-1 w-fit inline-flex items-center gap-2 bg-[#00bcd4] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#0097a7] transition-colors shadow-sm text-sm"
                  >
                    {tab.content.buttonText}
                  </a>
                </div>
                {tab.content.videoSrc ? (
                  <video
                    src={tab.content.videoSrc}
                    className="rounded-xl w-full aspect-video shadow-sm object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : (
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="rounded-xl w-full object-cover aspect-video shadow-sm"
                  />
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
