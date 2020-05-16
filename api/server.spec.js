const request = require("supertest");
const jwt = require("jsonwebtoken");

const server = require("./server");
const db = require("../database/dbConfig");

describe("server", () => {
	describe("POST /api/auth/register", () => {
		it("returns 401 if req doesnt have username and password", () => {
			return request(server)
				.post("/api/auth/register")
				.then((res) => expect(res.status).toBe(400));
		});

		it("returns created user", async () => {
			await db("users").truncate();

			return request(server)
				.post("/api/auth/register")
				.send({ username: "Joe", password: "pass" })
				.then((res) => expect(res.body.username).toBe("Joe"));
		});
	});

	describe("POST /api/auth/login", () => {
		beforeAll(async () => {
			await db("users").truncate();
			await db("users").insert({
				username: "Joe",
				password:
					"$2a$10$ALprTqSpxW4bUU2p91QuluiuWVHFfid5xJmgsJacnjoIXB6x6daiK",
			});
		});

		it("returns 401 after login with incorrect password", () => {
			return request(server)
				.post("/api/auth/login")
				.send({ username: "Joe", password: "password" })
				.then((res) => expect(res.status).toBe(401));
		});

		it("returns token after succesful login", () => {
			return request(server)
				.post("/api/auth/login")
				.send({ username: "Joe", password: "pass" })
				.then((res) => expect(res.body).toHaveProperty("token"));
		});
	});

	describe("GET /api/jokes", () => {
		it("returns 401 status if not authenticated", () => {
			return request(server)
				.get("/api/jokes")
				.then((res) => expect(res.status).toBe(401));
		});

		it("returns 200 if authenticated", () => {
			const token = jwt.sign({ username: "Joe" }, "asid08ay9f", {
				expiresIn: "1m",
			});

			return request(server)
				.get("/api/jokes")
				.set("Authorization", token)
				.then((res) => expect(res.status).toBe(200));
		});
	});
});
