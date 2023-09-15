import { ParkData } from '../../ApiCalls';

type AdditionalInfoProps = {
  park: ParkData;
};

function AdditionalInfo({ park }: AdditionalInfoProps) {
  return (
    <div className="additional-info">
      <h2>Additional Information</h2>
        <p><strong>Entrance Hours:</strong></p>
        <ul>
          {Object.entries(park.operatingHours[0].standardHours).map(([day, hours]) => (
            <li key={day}>{`${day.charAt(0).toUpperCase() + day.slice(1)}: ${hours}`}</li>
          ))}
        </ul>
        <p><strong>Location (State):</strong> {park.states}</p>
        <p><strong>Address:</strong> {park.addresses.map(address => address.line1).join(', ')}</p>
        <p><strong>Phone Number:</strong> {park.contacts.phoneNumbers.map(phone => phone.phoneNumber).join(', ')}</p>
        <p><strong>Directions:</strong> <a href={park.directionsUrl} target="_blank" rel="noopener noreferrer">Click here for directions</a></p>
      </div>
  );
}

export default AdditionalInfo;

