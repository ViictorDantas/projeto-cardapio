import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import React from "react";
import {Input, button} from "@heroui/react";

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
            <Input label="Imagem" type="file" accept="image/*" variant="bordered"/>
          </div>
        </form>
      </section>
    </DefaultLayout>
  );
}
