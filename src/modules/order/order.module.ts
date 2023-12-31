import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.entity';
import { SocketGateway } from 'src/socket/socket.gateway';
import { TableModule } from '../table/table.module';
import { ProductModule } from '../product/product.module';

@Module({
    imports: [
        TableModule,
        ProductModule,
        MongooseModule.forFeature([
            {
                name: Order.name,
                schema: OrderSchema
            }
        ])
    ],
    controllers: [OrderController],
    providers: [OrderService, SocketGateway],
})
export class OrderModule { }
