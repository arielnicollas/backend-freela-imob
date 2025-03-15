import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PropertyDocument } from '../schemas/property.schema';
import { PropertyStatus, PropertyType } from '../dtos/property.entity';
import { CreatePropertyDto } from '../dtos/create-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectModel('Property') private propertyModel: Model<PropertyDocument>,
  ) {}

  async create(createPropertyDto: CreatePropertyDto, sellerId: string) {
    const property = new this.propertyModel({
      ...createPropertyDto,
      sellerId,
      status: PropertyStatus.AVAILABLE,
    });
    return await property.save();
  }

  async findAll() {
    return await this.propertyModel.find().populate('sellerId', 'name email');
  }

  async findOne(id: string) {
    const property = await this.propertyModel
      .findById(id)
      .populate('sellerId', 'name email');
    
    if (!property) {
      throw new NotFoundException('Property not found');
    }
    
    return property;
  }

  async reserve(id: string, userId: string) {
    const property = await this.propertyModel.findById(id);
    
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (property.status !== PropertyStatus.AVAILABLE) {
      throw new ForbiddenException('Property is not available for reservation');
    }

    property.status = PropertyStatus.RESERVED;
    return await property.save();
  }

  async validateDocuments(id: string, sellerId: string) {
    const property = await this.propertyModel.findById(id);
    
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    if (property.sellerId.toString() !== sellerId) {
      throw new ForbiddenException('Not authorized to validate documents for this property');
    }

    property.status = PropertyStatus.SOLD;
    return await property.save();
  }

  async findBySeller(sellerId: string) {
    return await this.propertyModel.find({ sellerId });
  }
}
