type EntranceFee = {
  cost: string;
  description: string;
  title: string;
};

type EntranceFeesProps = {
  fees: EntranceFee[];
  toggleVisibility: (index: string) => void;
  visibleFees: { [key: string]: boolean };
};

function EntranceFees({
  fees,
  toggleVisibility,
  visibleFees,
}: EntranceFeesProps) {
  return (
    <div className='entrance-fees'>
      <h2>Entrance Fees</h2>
      <ul>
        {fees.map((fee, index) => (
          <li key={index} className='fee-list'>
            <strong>
              {fee.title} - ${fee.cost}
            </strong>
            <button
              className='show-fees-btn'
              onClick={() => toggleVisibility(index.toString())}
            >
              {visibleFees[index] ? "Hide Details" : "Show Details"}
            </button>
            {visibleFees[index] && <p>{fee.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntranceFees;
