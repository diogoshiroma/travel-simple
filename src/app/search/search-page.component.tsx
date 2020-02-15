import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Residence } from '../../model/entities';
import { ResidencesListComponent } from '../../components/mol.residences-list/residences-list.component';
import { SearchForm } from '../../components/org.search-form';
import { VSeparator } from '../../components/atm.separators';
import { ErrorMessage } from '../../components/typography.style';
import { Strings } from '../../resources';

interface SearchPageInterface {
  onChangeCity: (event: any) => void;
  onChangeCheckinDate: (event: any) => void;
  onChangeCheckoutDate: (event: any) => void;
  matchResidences: () => Residence[];
}

export const SearchPage = (props: SearchPageInterface) => {
  const [resList, setResList] = React.useState<Residence[]>([]);
  
  const handleSubmit = () => {
    const list = props.matchResidences();
    setResList(list);
  };

  return (
    <>
      <VSeparator />
      <SearchForm
        onChangeCity={props.onChangeCity}
        onChangeCheckinDate={props.onChangeCheckinDate}
        onChangeCheckoutDate={props.onChangeCheckoutDate}
        onSubmit={handleSubmit}
      />
      {
        resList.length > 0 ?
          <ResidencesListComponent residences={resList} />
        :
          <>
            <VSeparator />
            <ErrorMessage>{Strings.Components.ResidencesForm.NoResFound}</ErrorMessage>
          </>
      }
    </>
  );
};
