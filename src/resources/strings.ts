export let Strings = {
  AppName: 'Travel Simple',
  Components: {
    Residence: {
      AvailablePlaces: "Vagas disponíveis: "
    },
    ResidencesForm: {
      City: "Cidade",
      CheckinDate: "Data de entrada",
      CheckoutDate: "Data de saída",
      Submit: "Buscar quartos!",
      DateFormat: "Formato: (DD/MM/AAAA)",
      Placeholder: {
        City: "Informe a cidade de destino",
        CheckinDate: "Informe a data de entrada",
        CheckoutDate: "Informe a data de saída",
      },
    },
    ResidenceDetail: {
      AvailablePlacesLbl: 'Vagas disponíveis: ',
      BookNowYourRoom: 'Reserve agora o seu quarto: ',
      BuyRoom: 'Comprar',
    },
    Dialog: {
      Title: 'Confirma compra de ',
      Cancel: 'Cancelar',
      Accept: 'Confirmar',
    },
  },
  Pages: {
    NotFound: 'Esta página não existe :-(',
  },
  Error: { 
    ResidencesForm: {
      InvalidDateFormat: "Formato de data incorreto",
      NonExistingDate: "Data não existente",
      EmptyCity: "Digite o nome da cidade",
      CheckingAfterCheckout: "A data de entrada deve ser anterior à data de saída",
      NoResFound: "Nenhum quarto encontrado! :-(",
    },
    ResidenceDetail: {
      NoResFound: "Nenhum quarto encontrado! :-(",
    },
  },
};
