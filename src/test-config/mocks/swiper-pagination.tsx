/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock("swiper/react", () => ({
  Swiper: ({ children, modules, ...rest }: any) => {
    return  (<div
      data-testid="swiper"
      modules={modules.map((module: any) => module.name)}
      {...rest}
    >
      {children}
    </div>)},
  SwiperSlide: ({ children, ...rest }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide" {...rest}>
      {children}
    </div>
  ),
}))

jest.mock("swiper/modules", () => ({
  Pagination: () => ({}),
}))

jest.mock("swiper/css", () => jest.fn())
jest.mock("swiper/css/pagination", () => jest.fn())

export {}