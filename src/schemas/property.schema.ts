import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { PropertyType, PropertyStatus } from '../dtos/property.entity';

@Schema()
export class PropertyDocument extends Document {
  @Prop({ required: true, enum: PropertyType })
  type: PropertyType;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: PropertyStatus.AVAILABLE, enum: PropertyStatus })
  status: PropertyStatus;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  sellerId: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PropertySchema = SchemaFactory.createForClass(PropertyDocument);
