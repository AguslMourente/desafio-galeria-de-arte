import * as jsonfile from "jsonfile";

const FILE_PATH = new URL("./pelis.json", import.meta.url).pathname;

type Peli = {
  id: number;
  title: string;
  tags: string[];
};

class PelisCollection {
  async getAll(): Promise<Peli[]> {
    return await jsonfile.readFile(FILE_PATH);
  }

  async getById(id: number): Promise<Peli | null> {
    const pelis = await this.getAll();
    return pelis.find((p) => p.id === id) || null;
  }

  async add(peli: Peli): Promise<boolean> {
    const pelis = await this.getAll();
    const existe = pelis.find((p) => p.id === peli.id);
    if (existe) return false;

    pelis.push(peli);
    await jsonfile.writeFile(FILE_PATH, pelis, { spaces: 2 });
    return true;
  }

  async search(options: { title?: string; tag?: string }): Promise<Peli[]> {
    const pelis = await this.getAll();
    return pelis.filter((p) => {
      const matchTitle = options.title
        ? p.title.toLowerCase().includes(options.title.toLowerCase())
        : true;
      const matchTag = options.tag
        ? p.tags.includes(options.tag.toLowerCase())
        : true;
      return matchTitle && matchTag;
    });
  }
}

export { PelisCollection, Peli };
