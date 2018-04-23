import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFiltrs";
import { filters, altFilters } from "../fixtures/filters";
import { filter } from "rxjs/operator/filter";

let wrapper, setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount;

const SEOByVal = value => ({
  target: { value }
});

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt date correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle setTextFilter correctly", () => {
  wrapper.find("input").simulate("change", SEOByVal(altFilters.text));
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test("should handle sortByDate correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", SEOByVal(filters.sortBy));
  expect(sortByDate).toHaveBeenCalled();
});

test("should handle sortByAmount correctly", () => {
  wrapper.find("select").simulate("change", SEOByVal(altFilters.sortBy));
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle onDateChange correctly", () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  wrapper.find("#date-range-picker").prop("onDatesChange")({
    startDate,
    endDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle onFocusChange correctly", () => {
  let calenderFocused = "startDate";
  wrapper.find("#date-range-picker").prop("onFocusChange")(calenderFocused);
  expect(wrapper.state("calenderFocused")).toBe(calenderFocused);
});
