import { ClockIcon } from '@heroicons/react/24/solid';
import { RadioGroup } from '@headlessui/react';
import { Label } from '@windmill/react-ui';

function ScheduleSelector({ schedules, selectedSchedule, onSelectSchedule }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-red-600">Select schedule</h2>
      <RadioGroup 
        value={selectedSchedule?.scheduleId.toString()} 
        onChange={(value) => onSelectSchedule(schedules.find(st => st.scheduleId.toString() === value) || schedules[0])}
        className="flex flex-wrap gap-4"
      >
        {schedules.map((schedule) => (
          <RadioGroup.Option key={schedule.scheduleId} value={schedule.scheduleId.toString()} as="div" className="flex items-center">
            {({ checked }) => (
              <>
                <input
                  type="radio"
                  value={schedule.scheduleId.toString()}
                  id={`schedule-${schedule.scheduleId}`}
                  className="peer sr-only"
                />
                <Label 
                  htmlFor={`schedule-${schedule.scheduleId}`}
                  className={`flex items-center justify-center px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${checked ? 'bg-red-600 text-white' : 'bg-gray-800 text-white hover:bg-red-700'}`}
                >
                  <ClockIcon className="w-4 h-4 mr-2" />
                  {schedule.time}
                </Label>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div>
  );
}

export default ScheduleSelector;