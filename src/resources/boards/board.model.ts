// import { v4 as uuid } from 'uuid';
// import Column from './column.model';

// /**
//  * Class represent a board of some task in DB
//  * @constructor
//  */

// interface IBoardRequest {
//   title: string;
//   columns: Column[];
// }

// export default class Board {
//   /**
//    * Board's data
//    * @param {String} id - board's ID
//    * @param {String} title - board's name
//    * @param {Column[]} columns - board's column, that include all info about tasks
//    * if some info doesn't exist - using info from presets
//    */

//   id: string;

//   title: string;

//   columns: Column[];

//   constructor({ id = uuid(), title = 'Title', columns = [] } = {}) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns.map((col) => new Column(col));
//   }
// }

// export { IBoardRequest };
