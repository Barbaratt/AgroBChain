import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypesService {
  cultivationTypes: any[] = [
    { value: 'cultivationType-0', viewValue: 'Cultivo em campo aberto' },
    { value: 'cultivationType-1', viewValue: 'Cultivo em estufa' },
    { value: 'cultivationType-2', viewValue: 'Hidroponia' },
    { value: 'cultivationType-3', viewValue: 'Aeroponia' },
    { value: 'cultivationType-4', viewValue: 'Aquaponia' },
    { value: 'cultivationType-5', viewValue: 'Cultivo em substratos' },
  ];

  cultivationMethods: any[] = [
    { value: 'cultivationMethod-0', viewValue: 'Cultivo em campo aberto' },
    { value: 'cultivationMethod-1', viewValue: 'Cultivo em estufa' },
    { value: 'cultivationMethod-2', viewValue: 'Cultivo em hidroponia' },
    { value: 'cultivationMethod-3', viewValue: 'Cultivo em aeroponia' },
    { value: 'cultivationMethod-4', viewValue: 'Cultivo em aquaponia' },
    { value: 'cultivationMethod-5', viewValue: 'Cultivo em substratos' },
    { value: 'cultivationMethod-6', viewValue: 'Cultivo em camas elevadas' },
    { value: 'cultivationMethod-7', viewValue: 'Cultivo vertical' },
  ];

  equipmentOrMachinerys: any[] = [
    { value: 'equipmentOrMachinery-0', viewValue: 'Tratores' },
    { value: 'equipmentOrMachinery-1', viewValue: 'Arados' },
    { value: 'equipmentOrMachinery-2', viewValue: 'Colheitadeiras' },
    { value: 'equipmentOrMachinery-3', viewValue: 'Pulverizadores' },
    { value: 'equipmentOrMachinery-4', viewValue: 'Plantadeiras' },
    { value: 'equipmentOrMachinery-5', viewValue: 'Enfardadeiras' },
    { value: 'equipmentOrMachinery-6', viewValue: 'Gradeadoras' },
    { value: 'equipmentOrMachinery-7', viewValue: 'Irrigação' },
    {
      value: 'equipmentOrMachinery-8',
      viewValue: 'Equipamentos de armazenamento',
    },
    { value: 'equipmentOrMachinery-9', viewValue: 'Ordenhadeiras mecânicas' },
    { value: 'equipmentOrMachinery-010', viewValue: 'Cercas' },
    {
      value: 'equipmentOrMachinery-011',
      viewValue: 'Máquinas de limpeza de estábulos',
    },
    { value: 'equipmentOrMachinery-012', viewValue: 'Moinhos' },
    { value: 'equipmentOrMachinery-013', viewValue: 'Descascadores' },
    { value: 'equipmentOrMachinery-014', viewValue: 'Secadores' },
    { value: 'equipmentOrMachinery-015', viewValue: 'Colheitadeiras' },
    { value: 'equipmentOrMachinery-016', viewValue: 'Enfardadeiras' },
    { value: 'equipmentOrMachinery-017', viewValue: 'Semeadoras' },
    { value: 'equipmentOrMachinery-018', viewValue: 'Grades' },
  ];

  // Procurar trazer em ordem alfabética,
  // mas acho melhor dividir em legumes/verduras e frutas
  nourishments: any[] = [
    { value: 'nourishment-0', viewValue: 'Abobrinha Brasileira' },
    { value: 'nourishment-1', viewValue: 'Abobrinha Italiana' },
    {
      value: 'nourishment-2',
      viewValue: 'Abobrinha Menina Brasileira',
    },
    { value: 'nourishment-3', viewValue: 'Abobrinha Paulista ' },
    { value: 'nourishment-4', viewValue: 'Abobrinha Princesa' },
    { value: 'nourishment-5', viewValue: 'Abóbora Cabotia' },
    { value: 'nourishment-6', viewValue: 'Abóbora de Pescoço' },
    { value: 'nourishment-7', viewValue: 'Abóbora Japonesa' },
    { value: 'nourishment-8', viewValue: 'Abóbora Moranga' },
    { value: 'nourishment-9', viewValue: 'Abóbora Menina' },
    { value: 'nourishment-010', viewValue: 'Abóbora Paulista' },
    { value: 'nourishment-011', viewValue: 'Acelga' },
    { value: 'nourishment-012', viewValue: 'Agrião' },
    { value: 'nourishment-013', viewValue: 'Alface Americana' },
    { value: 'nourishment-014', viewValue: 'Alface Crespa' },
    { value: 'nourishment-015', viewValue: 'Alface Lisa' },
    { value: 'nourishment-016', viewValue: 'Alface Mimosa' },
    { value: 'nourishment-017', viewValue: 'Alface Romana' },
    { value: 'nourishment-018', viewValue: 'Almeirão Fino' },
    { value: 'nourishment-019', viewValue: 'Almeirão Pão' },
    { value: 'nourishment-020', viewValue: 'Alface Roxa' },
    { value: 'nourishment-021', viewValue: 'Berinjela Mini Bilbo' },
    { value: 'nourishment-022', viewValue: 'Berinjela Morella' },
    { value: 'nourishment-023', viewValue: 'Berinjela Niobe' },
    { value: 'nourishment-024', viewValue: 'Berinjela Rajada' },
    { value: 'nourishment-025', viewValue: 'Berinjela Zita' },
    { value: 'nourishment-026', viewValue: 'Beterraba Pinot' },
    { value: 'nourishment-027', viewValue: 'Beterraba Sacarina' },
    { value: 'nourishment-028', viewValue: 'Brócolis Comum' },
    { value: 'nourishment-029', viewValue: 'Brócolis Ninja' },
    { value: 'nourishment-030', viewValue: 'Cebola Branca' },
    { value: 'nourishment-031', viewValue: 'Cebola Roxa' },
    { value: 'nourishment-032', viewValue: 'Cebolinha' },
    { value: 'nourishment-033', viewValue: 'Cenoura' },
    { value: 'nourishment-034', viewValue: 'Chicória' },
    { value: 'nourishment-035', viewValue: 'Chuchu' },
    { value: 'nourishment-036', viewValue: 'Coentro' },
    { value: 'nourishment-037', viewValue: 'Couve Manteiga' },
    { value: 'nourishment-038', viewValue: 'Couve-Flor' },
    { value: 'nourishment-039', viewValue: 'Couve de Bruxelas' },
    { value: 'nourishment-040', viewValue: 'Espinafre' },
    { value: 'nourishment-041', viewValue: 'Jiló' },
    { value: 'nourishment-042', viewValue: 'Jiló Carioca' },
    { value: 'nourishment-043', viewValue: 'Mandioca' },
    { value: 'nourishment-044', viewValue: 'Mandioquinha' },
    { value: 'nourishment-045', viewValue: 'Manjericão' },
    { value: 'nourishment-046', viewValue: 'Manjericão Basílico' },
    { value: 'nourishment-047', viewValue: 'Manjericão Doce' },
    { value: 'nourishment-048', viewValue: 'Manjericão Francês' },
    { value: 'nourishment-049', viewValue: 'Manjericão Roxo' },
    { value: 'nourishment-050', viewValue: 'Pepino Caipira' },
    { value: 'nourishment-051', viewValue: 'Pepino Japonês' },
    { value: 'nourishment-052', viewValue: 'Pimentão Amarelo' },
    { value: 'nourishment-053', viewValue: 'Pimentão Verde' },
    { value: 'nourishment-054', viewValue: 'Pimentão Vermelho' },
    { value: 'nourishment-055', viewValue: 'Quiabo' },
    { value: 'nourishment-056', viewValue: 'Rabanete' },
    { value: 'nourishment-057', viewValue: 'Repolho Verde' },
    { value: 'nourishment-058', viewValue: 'Repolho Roxo' },
    { value: 'nourishment-059', viewValue: 'Rúcula' },
    { value: 'nourishment-060', viewValue: 'Salsa' },
    { value: 'nourishment-061', viewValue: 'Tomate Cereja' },
    { value: 'nourishment-062', viewValue: 'Tomate Italiano' },
    { value: 'nourishment-063', viewValue: 'Tomate Pera' },
    { value: 'nourishment-064', viewValue: 'Vagem Amarelo' },
    { value: 'nourishment-065', viewValue: 'Vagem Holandesa' },
    { value: 'nourishment-066', viewValue: 'Vagem Manteiga' },
    { value: 'nourishment-067', viewValue: 'Vagem Macarrão' },
    { value: 'nourishment-068', viewValue: 'Vagem Xápeco (Trepador)' },

    { value: 'nourishment-069', viewValue: 'Abacate Avocado' },
    { value: 'nourishment-070', viewValue: 'Abacate Manteiga' },
    { value: 'nourishment-071', viewValue: 'Abacaxi Pérola' },
    { value: 'nourishment-072', viewValue: 'Abacaxi Havaiano' },
    { value: 'nourishment-073', viewValue: 'Ameixa Amarela' },
    { value: 'nourishment-074', viewValue: 'Ameixa Vermelha' },
    { value: 'nourishment-075', viewValue: 'Amora Vermelha' },
    { value: 'nourishment-076', viewValue: 'Amora Preta' },
    { value: 'nourishment-077', viewValue: 'Banana Nanina' },
    { value: 'nourishment-078', viewValue: 'Banana Prata' },
    { value: 'nourishment-079', viewValue: 'Banana da Terra' },
    { value: 'nourishment-080', viewValue: 'Banana de Água' },
    { value: 'nourishment-081', viewValue: 'Banana Ouro' },
    { value: 'nourishment-082', viewValue: 'Caju Anão' },
    { value: 'nourishment-083', viewValue: 'Caju Comum' },
    { value: 'nourishment-084', viewValue: 'Cereja Ácida' },
    { value: 'nourishment-085', viewValue: 'Cereja Doce' },
    { value: 'nourishment-086', viewValue: 'Coco Seco' },
    { value: 'nourishment-087', viewValue: 'Coco Verde' },
    { value: 'nourishment-088', viewValue: 'Figo Verde' },
    { value: 'nourishment-089', viewValue: 'Figo Roxo' },
    { value: 'nourishment-090', viewValue: 'Goiaba Branca' },
    { value: 'nourishment-091', viewValue: 'Goiaba Vermelha' },
    { value: 'nourishment-092', viewValue: 'Kiwi Dourado' },
    { value: 'nourishment-093', viewValue: 'Kiwi Verde' },
    { value: 'nourishment-094', viewValue: 'Laranja Bahia' },
    { value: 'nourishment-095', viewValue: 'Laranja Pera' },
    { value: 'nourishment-096', viewValue: 'Laranja ' },
    { value: 'nourishment-097', viewValue: 'Limão Siciliano' },
    { value: 'nourishment-098', viewValue: 'Limão Tahiti' },
    { value: 'nourishment-099', viewValue: 'Maçã Gala' },
    { value: 'nourishment-0100', viewValue: 'Maçã Fuji' },
    { value: 'nourishment-0101', viewValue: 'Mamão Formosa' },
    { value: 'nourishment-0102', viewValue: 'Mamão Papaya' },
    { value: 'nourishment-0103', viewValue: 'Manga Palmer' },
    { value: 'nourishment-0104', viewValue: 'Manga Tommy' },
    { value: 'nourishment-0105', viewValue: 'Maracujá Azedo' },
    { value: 'nourishment-0106', viewValue: 'Maracujá Doce' },
    { value: 'nourishment-0107', viewValue: 'Melancia Sem Sementes' },
    { value: 'nourishment-0108', viewValue: 'Melancia Vermelha' },
    { value: 'nourishment-0109', viewValue: 'Melão Amarelo' },
    { value: 'nourishment-0110', viewValue: 'Melão Japonês' },
    { value: 'nourishment-0111', viewValue: 'Morango Tradicional' },
    { value: 'nourishment-0112', viewValue: 'Morango Silvestre' },
    { value: 'nourishment-0113', viewValue: 'Pera Asiática' },
    { value: 'nourishment-0114', viewValue: 'Pera Williams' },
    { value: 'nourishment-0115', viewValue: 'Pêssego Branco' },
    { value: 'nourishment-0116', viewValue: 'Pêssego Amarelo' },
    { value: 'nourishment-0117', viewValue: 'Pitanga Amarela' },
    { value: 'nourishment-0118', viewValue: 'Pitanga Vermelha' },
    { value: 'nourishment-0119', viewValue: 'Romã Branca' },
    { value: 'nourishment-0120', viewValue: 'Romã Vermelha' },
    { value: 'nourishment-0121', viewValue: 'Tangerina Murcote' },
    { value: 'nourishment-0122', viewValue: 'Tangerina Ponkan' },
    { value: 'nourishment-0123', viewValue: 'Toranja Branca' },
    { value: 'nourishment-0124', viewValue: 'Toranja Rosa' },
    { value: 'nourishment-0125', viewValue: 'Uva Brasil' },
    { value: 'nourishment-0126', viewValue: 'Uva Crimson' },
    { value: 'nourishment-0127', viewValue: 'Uva Itália' },
    { value: 'nourishment-0128', viewValue: 'Uva Red Globe' },
    { value: 'nourishment-0129', viewValue: 'Uva Thompson' },
  ];

  public newCultivationType: string;

  constructor() {}

  public getCultivationMethods() {
    return this.cultivationMethods;
  }

  public getCultivationTypes() {
    return this.cultivationTypes;
  }

  public getEquipmentOrMachinerys() {
    return this.equipmentOrMachinerys;
  }

  public getNourishments() {
    return this.nourishments;
  }
}
