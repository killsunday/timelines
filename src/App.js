import { useState } from "react";
import { Timeline } from "./components/Timeline/Timeline";
import { mockTimeline } from "./assets/mockData";
import { intervalToDuration } from "date-fns";
import "./App.css";

function App() {
  const [ intervalToggle, setIntervalToggle ] = useState("hours");

  const duration = intervalToDuration({
    start: new Date(mockTimeline.startDate),
    end: new Date(mockTimeline.endDate),
  });

  return (
    <div className="App">
      <div className="unit-toggles">
        {<span className="unit-toggles-btn">Hours</span>}
        {duration.days > 5 && <span className="unit-toggles-btn">Days</span>}
        {duration.weeks > 5 && <span className="unit-toggles-btn">Weeks</span>}
        {duration.months > 5 && (
          <span className="unit-toggles-btn">Months</span>
        )}
        {duration.years > 5 && <span className="unit-toggles-btn">Years</span>}
      </div>
      <Timeline
        events={mockTimeline.events}
        startDate={mockTimeline.startDate}
        endDate={mockTimeline.endDate}
        intervalSetting={intervalToggle}
      />
    </div>
  );
}

export default App;
