package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"log"

	"github.com/LuisFlahan4051/krisstalnet/API/database"
	"github.com/LuisFlahan4051/krisstalnet/API/graph/generated"
	"github.com/LuisFlahan4051/krisstalnet/API/graph/model"
	"go.mongodb.org/mongo-driver/bson"
)

var db = database.Connect()

func (r *mutationResolver) CrearUsuario(ctx context.Context, input model.ModificarUsuario) (*model.Usuario, error) {
	collection := db.Client.Database("krisstalnet-db").Collection("Usuarios")
	nuevoUsuario := &model.Usuario{
		ID:     input.ID,
		Nombre: input.Nombre,
		Admin:  input.Admin,
		Root:   input.Root,
	}

	insertion, err := collection.InsertOne(context.TODO(), nuevoUsuario)
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Insertion Correctly!\n %v", insertion)

	return nuevoUsuario, err
}

func (r *mutationResolver) EliminarUsuarioByID(ctx context.Context, input *model.ModificarUsuario) (*model.Usuario, error) {
	collection := db.Client.Database("krisstalnet-db").Collection("Usuarios")

	filter := &model.Usuario{
		ID: input.ID,
	}
	bsonFilter := bson.M{
		"id": input.ID,
	}

	delete, err := collection.DeleteOne(context.TODO(), bsonFilter)
	if err != nil {
		log.Println(err)
	} else {
		log.Printf("bson:\n %v, %v", bsonFilter, delete)
	}

	return filter, err
}

func (r *mutationResolver) ActualizarUsuario(ctx context.Context, input *model.ModificarUsuario) (*model.Usuario, error) {
	collection := db.Client.Database("krisstalnet-db").Collection("Usuarios")

	bsonFilter := bson.M{
		"id": input.ID,
	}

	update := &model.Usuario{
		ID:     input.ID,
		Nombre: input.Nombre,
		Admin:  input.Admin,
		Root:   input.Root,
	}
	bsonUpdate := bson.M{"$set": bson.M{
		"id":     input.ID,
		"nombre": input.Nombre,
		"mail":   input.Mail,
		"nick":   input.Nick,
		"pass":   input.Pass,
		"admin":  input.Admin,
		"root":   input.Root,
	}}

	actualizar, err := collection.UpdateOne(context.TODO(), bsonFilter, bsonUpdate)
	if err != nil {
		log.Fatal(err)
	} else {
		log.Printf("Update Correctly!\n %v", *actualizar)
	}

	return update, nil
}

func (r *queryResolver) Usuarios(ctx context.Context, id *string) ([]*model.Usuario, error) {
	collection := db.Client.Database("krisstalnet-db").Collection("Usuarios")
	iterador, err := collection.Find(context.TODO(), bson.D{})
	if err != nil {
		log.Fatal(err)
	}

	var usuarios []*model.Usuario
	for iterador.Next(context.TODO()) {
		var usuario *model.Usuario
		err := iterador.Decode(&usuario)
		if err != nil {
			log.Fatal(err)
		}
		usuarios = append(usuarios, usuario)
	}

	return usuarios, err
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
