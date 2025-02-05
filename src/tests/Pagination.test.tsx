import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        previousPage: "previous",
        nextPage: "next",
        pageNumber_part1: "page",
        pageNumber_part2: "of",
      };
      return translations[key] || key;
    },
  }),
}));

describe("Pagination Component", () => {
  it("renders pagination with correct text", async () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={jest.fn()} />
    );

    expect(await screen.findByText(/page 1 of 5/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /previous/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).toBeEnabled();
  });

  it("calls onPageChange when clicking next and previous buttons", async () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /previous/i }));
    expect(onPageChangeMock).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByRole("button", { name: /next/i }));
    expect(onPageChangeMock).toHaveBeenCalledWith(3);
  });

  it("disables next button on last page", async () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={jest.fn()} />
    );
    expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
  });
});
