/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-explicit-any */
jest.mock("swiper/react", () => ({
  Swiper: ({ children, grid, modules, ...rest }: any) => {
    return (
      <div
        data-testid="swiper"
        grid-rows={grid.rows}
        modules={modules.map((module: any) => module.name)}
        {...rest}
      >
        {children}
      </div>
    );
  },
  SwiperSlide: ({ children, ...rest }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide" {...rest}>
      {children}
    </div>
  ),
}));

jest.mock("swiper/modules", () => ({
  Grid: () => ({}),
  Pagination: () => ({}),
}));

jest.mock("swiper/css", () => jest.fn());
jest.mock("swiper/css/grid", () => jest.fn());
jest.mock("swiper/css/pagination", () => jest.fn());

export {};
