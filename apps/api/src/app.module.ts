import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CoursesModule } from './courses/courses.module';
import { AssignmentsModule } from './assignments/assingments.module';
import { UsersModule } from './users/users.model';

@Module({
  imports: [CoursesModule, AssignmentsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
