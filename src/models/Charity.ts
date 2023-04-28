import connection from "../dbconfig";

class Charity {
  id: string;
  name: string;
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
  static getAll(
    callback: (error: Error, charities?: Charity[] | null) => void
  ) {
    connection.query("SELECT * FROM charities", (error, results) => {
      if (error) {
        callback(error);
      } else {
        const charities = results.map(
          (result: any) => new Charity(result.id, result.name, result.url)
        );
        callback(charities);
      }
    });
  }
}
export default Charity;
