import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RendingPage from "../../Rending";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { BrowserRouter } from "react-router-dom";
describe("메인페이지", () => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
  it("Go버튼 테스트1", () => {
    render(
      <BrowserRouter>
        <RendingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByRole("repoInput"), {
      target: { value: "" },
    });

    fireEvent.click(screen.getByRole("goButton"));
    expect(window.alert).toBeCalledWith("올바른 깃허브 주소가 아닙니다.");
  });
  it("Go버튼 테스트2", () => {
    render(
      <BrowserRouter>
        <RendingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByRole("repoInput"), {
      target: { value: "naver.com" },
    });

    fireEvent.click(screen.getByRole("goButton"));
    expect(window.alert).toBeCalledWith("올바른 깃허브 주소가 아닙니다.");
  });
  // Next.js 프로젝트
  it("Go버튼 테스트3", async () => {
    render(
      <BrowserRouter>
        <RendingPage />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByRole("repoInput"), {
      target: {
        value: "https://github.com/Junejae1625/Numble_reference.git",
      },
    });

    fireEvent.click(screen.getByRole("reactButton"));
    try {
      fireEvent.click(screen.getByRole("goButton"));
      await waitFor(() => {});
    } catch (e) {
      expect(e.matcherResult.message).toContain(
        "프로젝트가 React인지 Next인지 다시 확인해주세요."
      );
    }
  });
  it("React버튼 테스트", () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <RendingPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("reactButton"));

    expect(getAllByRole("footerBar")[0]).toHaveStyleRule(
      "background",
      "linear-gradient( to bottom, rgba(0,0,0,0) 94%, rgb(51,153,255) 96%, rgba(179,217,255) 100% )"
    );
  });
  it("Next버튼 테스트", () => {
    const { getAllByRole } = render(
      <BrowserRouter>
        <RendingPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByRole("nextButton"));

    expect(getAllByRole("footerBar")[0]).toHaveStyleRule(
      "background",
      "linear-gradient( to bottom, rgba(0,0,0,0) 94%, rgb(228,87,27) 96%, yellow 100% )"
    );
  });
});
