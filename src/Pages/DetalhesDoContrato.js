import React, { Component, Fragment } from "react";
import Navbar from "./Components/Navbar";
import CardMeusAgendamentos from "./Components/CardMeusAgendamentos"

class DetalhesDoContrato extends React.Component {
  state = {
    contract: null
  };

  constructor(contract) {
    super();
    this.state.contract = contract;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="col">
                  <div className="content mt-4 h-50">
                    <div
                      className="row w-100 h-50 justify-content-left"
                      style={{ borderBottom: "1px solid" }}
                    >
                      <div className="col-sm-1 ml-3">
                        <i
                          class="fas fa-user-circle"
                          style={{ fontSize: "72px" }}
                        />
                      </div>

                      <div className="col-sm-4 justify-content-left mt-3">
                        <p className="h3">Antonio Costa de Jesus</p>
                        <p className="h4">Tecnico Eletronico</p>
                      </div>
                    </div>

                    <div className="col w-100 justify-content-left mt-5">
                      <div className="row-sm-2 justify-content-left">
                        <label className="h5 text-secondary">Situação - </label>
                        <label className="h5 text-success">Aceito</label>
                      </div>
                      <div className="row-sm-2 justify-content-left">
                        <label className="h5 text-secondary">Local - </label>
                        <label className="h5 text-primary">Domicilio</label>
                      </div>
                      <div className="row-sm-8">
                        <label className="h5 text-secondary">Data - </label>
                        <label className="h5 text-primary">
                          27/09/2019 às 14h40m
                        </label>
                      </div>
                      <div className="row-sm-5">
                        <label className="h5 text-secondary">
                          Forma de pagamento -{" "}
                        </label>
                        <label className="h5 text-primary"> Débito</label>
                      </div>
                      <div
                        className="col w-100 justify-content-right"
                        align="right"
                      >
                        <div className="row-sm-2">
                          <p className="h5 text-secondary" align="">
                            {" "}
                            Descrição do serviço{" "}
                          </p>
                          <p className="h5 text-primary">
                            {" "}
                            Arrumo diversos eletronicos, computador, notebook,
                            smartphones e eletroeletronicos. Faça seu orçamento.
                          </p>
                        </div>
                        <div className="row-sm-5">
                          <p className="h1"> R$ 100,20 </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetalhesDoContrato;
