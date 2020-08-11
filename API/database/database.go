package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Database struct {
	Client *mongo.Client
}

func Connect() *Database {
	/* ctx := context.TODO()
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}
	log.Println("Connection to MongoDB DONE!") */
	client, err := mongo.NewClient(options.Client().ApplyURI("mongodb://localhost:27017"))
	if err != nil {
		log.Println(err)
	}

	err = client.Connect(context.TODO())
	if err != nil {
		log.Println(err)
	}
	log.Println("Connect to MongoDB Succesfully!")

	return &Database{
		Client: client,
	}
}
