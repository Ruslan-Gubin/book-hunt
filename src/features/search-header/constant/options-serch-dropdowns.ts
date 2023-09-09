type OptionsDropdown = {
  optionsCategory: OptionsSelectType[];
  optionsSort: OptionsSelectType[];
};

export const OPTIONS_DROPDOWNS: OptionsDropdown = {
  optionsCategory: [
    { id: "1", value: "all", label: "ALL" },
    { id: "2", value: "art", label: "ART" },
    { id: "3", value: "biography", label: "BIOGRAPHY" },
    { id: "4", value: "computers", label: "COMPUTERS" },
    { id: "5", value: "history", label: "HISTORY" },
    { id: "6", value: "medical", label: "MEDICAL" },
    { id: "7", value: "poetry", label: "POETRY" },
  ],
  optionsSort: [
    { id: "1", value: "relevance", label: "RELEVANCE" },
    { id: "2", value: "newest", label: "NEWEST" },
  ],
};
