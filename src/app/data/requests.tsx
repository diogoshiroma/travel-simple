import axios, { AxiosResponse } from 'axios';
import { Host, Bedroom } from './model';
import { mapHostDataToHost, mapBedroomDataToBedroom, mapHostAndBedroomToResidence } from './mapper';
import { Residence } from '../../model/entities';

const API_URL = 'http://localhost:8000';

export const getHosts = async (): Promise<Host[]> => {
  const url = `${API_URL}/api/hosts/`;
  const axiosResponse: AxiosResponse<any> = await axios.get(url);
  return parseHostsData(axiosResponse.data);
}

const parseHostsData = (hostsData: any): Host[] => {
  return hostsData.data.map((hostData: any) => mapHostDataToHost(hostData));
};

export const getBedroomsOfHost = async (hostId: number): Promise<Bedroom[]> => {
  const url = `${API_URL}/api/hosts/${hostId}/bedrooms/`;
  const axiosResponse: AxiosResponse<any> = await axios.get(url);
  return parseBedroomsData(axiosResponse.data);
}

const parseBedroomsData = (bedroomsData: any): Bedroom[] => {
  return bedroomsData.data.map((bedroomData: any) => mapBedroomDataToBedroom(bedroomData));
};

export const getResidences = async (): Promise<Residence[]> => {
  const hosts: Host[] = await getHosts();
  let residences: Residence[] = [];
  const bedroomPromises: Promise<Bedroom[]>[] = hosts.map(host => getBedroomsOfHost(host.id));
  return Promise.all(bedroomPromises).then(function(bedroomLists) {
    const bedrooms: Bedroom[] = bedroomLists.flat();
    const residencesFromBedrooms = bedrooms.map(bedroom => mapHostAndBedroomToResidence(bedroom, hosts[0]));
    residences.push(...residencesFromBedrooms);
  }).then(function resolve() {
    return residences;
  });
};