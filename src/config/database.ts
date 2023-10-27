import {TypeOrmModule} from "@nestjs/typeorm";

export const databaseConnection = () => TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'db',
                port: parseInt(process.env.POSTGRES_PORT!) || 5432,
                database: process.env.POSTGRES_DATABASE,
                username: process.env.POSTGRES_USERNAME,
                password: process.env.POSTGRES_PASSWORD,
                entities: [__dirname + '/../**/*.{js,ts}'],
                synchronize: true,
                autoLoadEntities: true,
                logging: false,
                maxQueryExecutionTime: 2000,
                connectTimeoutMS: 10000,
        })
