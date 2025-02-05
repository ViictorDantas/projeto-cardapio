import DefaultLayout from "@/layouts/default";
import React from "react";
import {Input} from "@heroui/react";
import {Button} from "@heroui/react";

export default function DocsPage() {

  return (
    <DefaultLayout>
      <section>
        <h1 className="text-center font-lactosa text-5xl mb-8">Adicionar Produto</h1>
        <form action="">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input label="Categoria" type="text" variant="bordered"/>
            <Input label="Produto" type="text" variant="bordered"/>
            <Input label="Valor" type="text" variant="bordered"/>
            <Input
              accept="image/*"
              label="Imagem"
              type="file"
              variant="bordered"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button color="default">Voltar</Button>
            <Button color="success">Adicionar</Button>
          </div>
        </form>
      </section>
    </DefaultLayout>
  );
}
