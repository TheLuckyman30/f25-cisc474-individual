import Image from 'next/image';
import calendar from '../../../public/september-2025-calendar-landscape.png';

function Calendar() {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <div className="max-w-2xl">
        <Image
          className="object-contain"
          src={calendar}
          alt="Calendar Image"
        ></Image>
      </div>
    </div>
  );
}

export default Calendar;
