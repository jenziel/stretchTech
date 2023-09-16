import { ParkData } from "../../ApiCalls";

type AdditionalInfoProps = {
  park: ParkData;
};

function AdditionalInfo({ park }: AdditionalInfoProps) {
  return (
    <div className='additional-info'>
      <h2>Plan Your Visit</h2>
      <ul>
        {Object.entries(park.operatingHours[0].standardHours).map(
          ([day, hours]) => (
            <li key={day}>{`${
              day.charAt(0).toUpperCase() + day.slice(1)
            }: ${hours}`}</li>
          )
        )}
      </ul>
      <p>
        <strong>Directions:</strong>{" "}
        <a href={park.directionsUrl} target='_blank' rel='noopener noreferrer'>
          Click here for directions
        </a>
      </p>
      <p>
        <strong>Address:</strong>{" "}
        {park.addresses.map((address) => address.line1).join(", ")}
      </p>
    </div>
  );
}

export default AdditionalInfo;
