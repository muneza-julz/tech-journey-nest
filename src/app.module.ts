import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';


@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        ItemsModule],
    controllers: [ItemsController],
    providers: [],
})
export class AppModule { }
