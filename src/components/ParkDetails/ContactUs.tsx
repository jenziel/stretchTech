import { ParkData } from '../../ApiCalls';

type AdditionalInfoProps = {
  park: ParkData;
};
function ContactUs({ park }: AdditionalInfoProps) {
    return (
        <div className='contact-us'>
            <h2>Contact Us</h2>
            <p><strong>Email:</strong> {park.contacts.emailAddresses[0].emailAddress}</p>
        <p><strong>Phone Number:</strong> {park.contacts.phoneNumbers.map(phone => phone.phoneNumber).join(', ')}</p>
        </div>
    )}
    export default ContactUs;