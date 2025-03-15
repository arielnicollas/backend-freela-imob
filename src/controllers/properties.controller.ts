import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../services/jwt-auth.guard';
import { RolesGuard } from '../services/roles.guard';
import { Roles } from '../roles/roles.decorator';
import { UserRole } from '../dtos/user.entity';
import { PropertiesService } from '../services/properties.service';

@Controller('properties')
@UseGuards(JwtAuthGuard)
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles(UserRole.SELLER)
  createProperty(@Body() createPropertyDto: any, @Body('sellerId') sellerId: string) {
    return this.propertiesService.create(createPropertyDto, sellerId );
  }

  @Get()
  getAllProperties() {
    return this.propertiesService.findAll();
  }

  @Get(':id')
  getPropertyDetails(@Param('id') id: string) {
    return this.propertiesService.findOne(id);
  }

  @Post(':id/reserve')
  reserveProperty(@Param('id') id: string) {
    return this.propertiesService.reserve(id, 'user-id');
  }
}
