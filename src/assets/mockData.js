import { v4 as uuid } from "uuid";

export const mockTimeline = {
  startDate: "2022-05-02T00:00:00Z",
  endDate: "2022-06-28T23:59:59Z",
  events: [
    {
      id: uuid(),
      startDate: "2022-05-03T00:00:00Z",
      endDate: "2022-05-03T00:00:00Z",
      title: "Washington Capitals @ Florida Panthers",
      description:
        "Score 4-2 in favor of the Capitals.  The Florida Panthers had won the President's Trophy as the best regular season team with 122 points.",
    },
    {
      id: uuid(),
      startDate: "2022-05-05T00:00:00Z",
      endDate: "2022-05-05T00:00:00Z",
      title: "Washington Captials @ Flordia Panthers",
      description:
        "Score 1-5 in favor of the Panthers.  The Florida Panthers had won the President's Trophy as the best regular season team with 122 points.",
    },
    {
      id: uuid(),
      startDate: "2022-05-07T00:00:00Z",
      endDate: "2022-05-07T00:00:00Z",
      title: "Flordia Panthers @ Washington Captials",
      description:
        "Score 1-6 in favor of the Capitals.  The Florida Panthers had won the President's Trophy as the best regular season team with 122 points.",
    },
    {
      id: uuid(),
      startDate: "2022-05-09T00:00:00Z",
      endDate: "2022-05-09T00:00:00Z",
      title: "Flordia Panthers @ Washington Captials",
      description:
        "Score 3-2 in favor of the Panthers.  The Florida Panthers had won the President's Trophy as the best regular season team with 122 points.",
    },
    {
      id: uuid(),
      startDate: "2022-05-11T00:00:00Z",
      endDate: "2022-05-11T00:00:00Z",
      title: "Washington Captials @ Flordia Panthers",
      description:
        "Score 3-5 in favor of the Panthers.  The Florida Panthers had won the President's Trophy as the best regular season team with 122 points.",
    },
    {
      id: uuid(),
      startDate: "2022-05-13T00:00:00Z",
      endDate: "2022-05-13T00:00:00Z",
      title: "Flordia Panthers @ Washington Captials",
      description:
        "Score 4-3 in favor of the Panthers.  The Florida Panthers had won the President's Trophy as the best regular season team with 122 points.",
    },
  ],
};
