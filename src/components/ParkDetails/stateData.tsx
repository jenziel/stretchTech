const stateData = [
    { abbreviation: 'AL', fullName: 'Alabama' },
    { abbreviation: 'AK', fullName: 'Alaska' },
    { abbreviation: 'AZ', fullName: 'Arizona' },
    { abbreviation: 'AR', fullName: 'Arkansas' },
    { abbreviation: 'CA', fullName: 'California' },
    { abbreviation: 'CO', fullName: 'Colorado' },
    { abbreviation: 'CT', fullName: 'Connecticut' },
    { abbreviation: 'DE', fullName: 'Delaware' },
    { abbreviation: 'FL', fullName: 'Florida' },
    { abbreviation: 'GA', fullName: 'Georgia' },
    { abbreviation: 'HI', fullName: 'Hawaii' },
    { abbreviation: 'ID', fullName: 'Idaho' },
    { abbreviation: 'IL', fullName: 'Illinois' },
    { abbreviation: 'IN', fullName: 'Indiana' },
    { abbreviation: 'IA', fullName: 'Iowa' },
    { abbreviation: 'KS', fullName: 'Kansas' },
    { abbreviation: 'KY', fullName: 'Kentucky' },
    { abbreviation: 'LA', fullName: 'Louisiana' },
    { abbreviation: 'ME', fullName: 'Maine' },
    { abbreviation: 'MD', fullName: 'Maryland' },
    { abbreviation: 'MA', fullName: 'Massachusetts' },
    { abbreviation: 'MI', fullName: 'Michigan' },
    { abbreviation: 'MN', fullName: 'Minnesota' },
    { abbreviation: 'MS', fullName: 'Mississippi' },
    { abbreviation: 'MO', fullName: 'Missouri' },
    { abbreviation: 'MT', fullName: 'Montana' },
    { abbreviation: 'NE', fullName: 'Nebraska' },
    { abbreviation: 'NV', fullName: 'Nevada' },
    { abbreviation: 'NH', fullName: 'New Hampshire' },
    { abbreviation: 'NJ', fullName: 'New Jersey' },
    { abbreviation: 'NM', fullName: 'New Mexico' },
    { abbreviation: 'NY', fullName: 'New York' },
    { abbreviation: 'NC', fullName: 'North Carolina' },
    { abbreviation: 'ND', fullName: 'North Dakota' },
    { abbreviation: 'OH', fullName: 'Ohio' },
    { abbreviation: 'OK', fullName: 'Oklahoma' },
    { abbreviation: 'OR', fullName: 'Oregon' },
    { abbreviation: 'PA', fullName: 'Pennsylvania' },
    { abbreviation: 'RI', fullName: 'Rhode Island' },
    { abbreviation: 'SC', fullName: 'South Carolina' },
    { abbreviation: 'SD', fullName: 'South Dakota' },
    { abbreviation: 'TN', fullName: 'Tennessee' },
    { abbreviation: 'TX', fullName: 'Texas' },
    { abbreviation: 'UT', fullName: 'Utah' },
    { abbreviation: 'VT', fullName: 'Vermont' },
    { abbreviation: 'VA', fullName: 'Virginia' },
    { abbreviation: 'WA', fullName: 'Washington' },
    { abbreviation: 'WV', fullName: 'West Virginia' },
    { abbreviation: 'WI', fullName: 'Wisconsin' },
    { abbreviation: 'WY', fullName: 'Wyoming' }]

// export  interface StateDataProps {
//         abbreviation: string;
//         fullName: string;
//     }

// export interface handleStateProps {
//         twoLetterState: string;
//         stateData: StateDataProps[];
//     }
    
// export interface handleStateDataFunction {
//     (twoLetterState: string, stateData: StateDataProps[]): string;
//       }

    // const handleStateData = ({twoLetterState, stateData}: handleStateProps) => {    
    //     const foundState = stateData.find((state) => state.abbreviation === twoLetterState);
    //     return foundState ? foundState.fullName : 'Not Found';
    //     }
    

export default {stateData}
