import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertiesController } from '../controllers/properties.controller';
import { PropertiesService } from '../services/properties.service';
import { PropertySchema } from '../schemas/property.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService],
})
export class PropertiesModule {}
