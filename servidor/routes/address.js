const { address } = require("./models/address");
const AddressRoutes = require("./usuarios");

const { ListarAddress, EditarEndereços, AtualizarEndereços, DeletandoEndereços } = require('../controllers.address.js')

AddressRoutes.get("/address", ListarAddress)

AddressRoutes.post("/address", EditarEndereços)

AddressRoutes.put("/address/:id", AtualizarEndereços)

AddressRoutes.delete("/address/:id", DeletandoEndereços)

module.exports = AddressRoutes;