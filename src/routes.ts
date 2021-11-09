export enum RoutesEnum {
  index = '/',
  contact = '/contact'
}

export const routes = {
  index: RoutesEnum.index,
  contact: `${RoutesEnum.contact}/:id`,
}