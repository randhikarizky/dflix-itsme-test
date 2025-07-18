import { SelectOption } from "@/app/global/interfaces/form.interface";

export const sortFilterOptions: SelectOption[] = [
  {
    label: "Title",
    value: "title",
  },
  {
    label: "Popularity",
    value: "popularity",
  },
  {
    label: "Release Date",
    value: "primary_release_date",
  },
  {
    label: "Revenue",
    value: "revenue",
  },
  {
    label: "Vote Average",
    value: "vote_average",
  },
  {
    label: "Vote Count",
    value: "vote_count",
  },
];
