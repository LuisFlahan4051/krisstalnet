package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"
	"log"

	"github.com/LuisFlahan4051/krisstalnet/API/database"
	"github.com/LuisFlahan4051/krisstalnet/API/graph/generated"
	"github.com/LuisFlahan4051/krisstalnet/API/graph/model"
	"go.mongodb.org/mongo-driver/bson"
)

var db = database.Connect()

func (r *mutationResolver) CrearUsuario(ctx context.Context, input model.AgregarUsuario) (*model.Usuario, error) {
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

func (r *mutationResolver) EliminarUsuarioByID(ctx context.Context, input model.EliminarUsuario) (*model.Usuario, error) {
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

func (r *mutationResolver) ActualizarUsuario(ctx context.Context, input *model.ActualizarUsuario) (*model.Usuario, error) {
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

func (r *mutationResolver) AgregarProducto(ctx context.Context, input model.AgregarProducto) (*model.Producto, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) EliminarProductoByID(ctx context.Context, input model.EliminarProducto) (*model.Producto, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ActualizarProducto(ctx context.Context, input *model.ActualizarProducto) (*model.Producto, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AgregarArticulo(ctx context.Context, input model.AgregarArticulo) (*model.Articulo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) EliminarArticuloByID(ctx context.Context, input model.EliminarArticulo) (*model.Articulo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ActualizarArticulo(ctx context.Context, input *model.ActualizarArticulo) (*model.Articulo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AgregarCaja(ctx context.Context, input *model.AgregarCaja) (*model.Caja, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) EliminarCajaByID(ctx context.Context, input *model.EliminarCajaByID) (*model.Caja, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ActualizarCaja(ctx context.Context, input *model.ActualizarCaja) (*model.Caja, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AgregarContadorCopia(ctx context.Context, input *model.AgregarContadorCopia) (*model.ContadorCopia, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) EliminarContadorCopiaByID(ctx context.Context, input *model.EliminarContadorCopiaByID) (*model.ContadorCopia, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ActualizarContadorCopia(ctx context.Context, input *model.ActualizarContadorCopia) (*model.ContadorCopia, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AgregarObservacion(ctx context.Context, input *model.AgregarObservacion) (*model.Observacion, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) EliminarObservacionByID(ctx context.Context, input *model.EliminarObservacionByID) (*model.Observacion, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ActualizarObservacion(ctx context.Context, input *model.ActualizarObservacion) (*model.Observacion, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) NuevaResponsiva(ctx context.Context, input model.AgregarResponsiva, productos []*model.AgregarProducto, productosVendidos []*model.AgregarProducto, articulosActuales []*model.AgregarArticulo, articulosEntregados []*model.AgregarArticulo, copiasActuales *model.AgregarContadorCopia, copiasEntregadas *model.AgregarContadorCopia, observaciones []*model.AgregarObservacion) (*model.Responsiva, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) EliminarResponsiva(ctx context.Context, input model.EliminarResponsivaByID) (*model.Responsiva, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ActualizarResponsiva(ctx context.Context, input model.AgregarResponsiva, productos []*model.AgregarProducto, productosVendidos []*model.AgregarProducto, articulosActuales []*model.AgregarArticulo, articulosEntregados []*model.AgregarArticulo, copiasActuales *model.AgregarContadorCopia, copiasEntregadas *model.AgregarContadorCopia, observaciones []*model.AgregarObservacion) (*model.Responsiva, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) AgregarSucursal(ctx context.Context, input model.AgregarSucursal, productos []*model.AgregarProducto, articulos []*model.AgregarArticulo, usuarios []*model.AgregarUsuario, responsivas []*model.AgregarResponsiva, contadorCopia *model.AgregarContadorCopia) (*model.Sucursal, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) EliminarSucursalByID(ctx context.Context, input model.EliminarSucursal) (*model.Sucursal, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *mutationResolver) ActualizarSucursal(ctx context.Context, input model.AgregarSucursal, productos []*model.AgregarProducto, articulos []*model.AgregarArticulo, usuarios []*model.AgregarUsuario, responsivas []*model.AgregarResponsiva, contadorCopia *model.AgregarContadorCopia) (*model.Sucursal, error) {
	panic(fmt.Errorf("not implemented"))
}

/*Querys*/
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

func (r *queryResolver) Productos(ctx context.Context, sucursal *string) ([]*model.Producto, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Sucursales(ctx context.Context) ([]*model.Sucursal, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Articulos(ctx context.Context, sucursal *string, numeroCaja *int) ([]*model.Articulo, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Responsivas(ctx context.Context, sucursal *string, numeroCaja *int) ([]*model.Responsiva, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Copias(ctx context.Context, sucursal *string, numeroCaja *int) ([]*model.ContadorCopia, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) Observaciones(ctx context.Context, sucursal *string, numeroCaja *string) ([]*model.Observacion, error) {
	panic(fmt.Errorf("not implemented"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
