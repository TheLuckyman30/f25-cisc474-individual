import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CoursesModule } from './courses/courses.module';
import { AssignmentModel } from './assignments/assingments.model';

@Module({
  imports: [CoursesModule, AssignmentModel],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
