type Activity = {
  id: string;
  name: string;
};

type ActivitiesProps = {
  activities: Activity[];
};

function Activities({ activities }: ActivitiesProps) {
  return (
    <div className='activities'>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
