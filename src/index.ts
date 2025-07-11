import { PelisController } from "./controller";
import minimist from "minimist";
async function main() {
  const controller = new PelisController();
  const params = minimist(process.argv.slice(2));

  const comando = params._[0];

  if (comando === "add") {
    const peli = {
      id: params.id,
      title: params.title,
      tags: params.tags.split(","),
    };
    const result = await controller.add(peli);
    console.log(result);
  } else if (comando === "get") {
    const result = await controller.get({ id: params._[1] });
    console.log(result);
  } else if (comando === "search") {
    const searchOptions: any = {};
    if (params.title) searchOptions.title = params.title;
    if (params.tag) searchOptions.tag = params.tag;

    const result = await controller.get({ search: searchOptions });
    console.log(result);
  } else {
    const result = await controller.get();
    console.log(result);
  }
}

main();
