'use client';

import CourseCard from './components/course-card';
import { courses } from '../../temp-data/temp-data.json';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

function Dashboard() {
  const [displayedInfo, setDisplayedInfo] = useState<string>('Courses');

  function handleDisplayInfoChange(event: SelectChangeEvent) {
    setDisplayedInfo(event.target.value);
  }

  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
      <Link
        href="/"
        className="absolute top-0 left-0 m-5 p-1 border rounded-md hover:-translate-y-2 duration-200"
      >
        Welcome Page
      </Link>
      <div className="grid grid-rows-1 gap-25 w-fit">
        <div className="flex justify-between">
          <FormControl>
            <InputLabel>Select Info</InputLabel>
            <Select value={displayedInfo} onChange={handleDisplayInfoChange}>
              <MenuItem value={'Courses'}>Courses</MenuItem>
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
