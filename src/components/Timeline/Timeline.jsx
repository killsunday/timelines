import { format } from "date-fns";
import PropTypes from "prop-types";

export const Timeline = (props) => {
  return (
    <div className="timeline-container">
      <ul>
        {props.events.map((item) => {
          return (
            <li className="timeline-event" key={item.id}>
              <h3>{item.title}</h3>
              <p>{format(new Date(item.startDate), "MMMM d, yyyy")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const EventsShape = PropTypes.shape({
  id: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
});

Timeline.propTypes = {
  events: PropTypes.arrayOf(EventsShape).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  intervalSetting: PropTypes.string.isRequired,
};
