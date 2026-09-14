import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll() {
        return 'This action returns all items';
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns item with id ${id}`;
    }
}

