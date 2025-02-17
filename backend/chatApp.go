package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true }, // Allow all connections by checking request origin
}

type Client struct {
	Conn *websocket.Conn // Websocket connection
}

var clients = make(map[*Client]bool) // Connected clients

func handleConnection(c *gin.Context) {
	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil) // Upgrade HTTP connection to websocket
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	} // Return error if connection upgrade fails
	client := &Client{Conn: conn} // Create new client
	clients[client] = true        // Add client to map
	for {
		_, msg, err := conn.ReadMessage() // Read message from the WebSocket connection
		if err != nil {
			delete(clients, client) // Remove client from map if error occurs
			break
		}
		for client := range clients {
			if err := client.Conn.WriteMessage(websocket.TextMessage, msg); err != nil {
				delete(clients, client) // Remove client from map if error occurs
			}
		}
	}
}

func main() {
	r := gin.Default()             // Create a new Gin router
	r.GET("/ws", handleConnection) // Handle WebSocket connections
	if err := r.Run(":8080"); err != nil {
		log.Fatal("Server failed to start", err)
	}
}
