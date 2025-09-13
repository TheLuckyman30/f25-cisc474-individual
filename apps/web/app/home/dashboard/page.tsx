'use client';

import CourseCard from './components/course-card';
import { courses, assignments } from '../../temp-data/temp-data.json';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

function Dashboard() {
  const [displayedInfo, setDisplayedInfo] = useState<string>('Courses');

  function handleDisplayInfoChange(event: SelectChangeEvent) {
    setDisplayedInfo(event.target.value);
  }

  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <div className="grid grid-rows-1 gap-25 w-fit">
        <div className="flex justify-between">
          <FormControl>
            <InputLabel>Select Info</InputLabel>
            <Select value={displayedInfo} onChange={handleDisplayInfoChange}>
              <MenuItem value={'Courses'}>Courses</MenuItem>
              <MenuItem value={'Assignments'}>Assignments</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="grid grid-cols-5 gap-10">
          {displayedInfo === 'Courses' &&
            courses.map((course, index) => (
              <CourseCard course={course} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
