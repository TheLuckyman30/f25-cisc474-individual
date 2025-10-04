import { Link } from 'links/entities/link.entity';
import { CreateLinkDto } from 'links/dto/create-link.dto';
import { UpdateLinkDto } from 'links/dto/update-link.dto';
import { GetCourseDto } from 'courses/dto/get-course.dto';
import { GetAssignmentDto } from 'assignments/dto/get-assignment.dto';

export const courses = {
  dto: {
    GetCourseDto
  }
}

export const assigments = {
  dto: {
    GetAssignmentDto
  }
}

export const links = {
  dto: {
    CreateLinkDto,
    UpdateLinkDto,
  },
  entities: {
    Link,
  },
};
