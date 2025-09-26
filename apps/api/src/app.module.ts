import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CoursesModule } from './courses/courses.module';
import { AssignmentsModule } from './assignments/assingments.module';
import { UsersModule } from './users/users.model';
import { SubmissionsModule } from './submissions/submissions.module';
import { AnnoucementsModule } from './annoucements/announcements.module';
import { MessagesModule } from './messages/messages.module';
import { GradesModule } from './grades/grades.module';

@Module({
  imports: [CoursesModule, AssignmentsModule, UsersModule, SubmissionsModule, AnnoucementsModule, MessagesModule, GradesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
