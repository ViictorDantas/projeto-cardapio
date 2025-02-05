// components/CardComponent.js
import { Card, CardBody, CardFooter } from "@heroui/react";
import { Image } from "@heroui/image";

// preciso fazer um scroll lateral para ver todos os itens do cardápio (overflow-x) 
export default function CardComponent({ item }) {
  return (
    <Card isPressable shadow="sm" onPress={() => console.log("item pressed")}>
      <CardBody className="overflow-x-visible p-0">
        <Image
          alt={item.title}
          className="w-[130px] h-[130px]"
          radius="lg"
          shadow="sm"
          src={item.img}
          width="100%"
        />
      </CardBody>
      <CardFooter className="col-span-1 text-small justify-between w-[130px]">
        <b className="col-span-2 overflow-hidden text-ellipsis text-xs">{item.title}</b>
        <p className="col-span-2 text-default-500 text-orange-500">{item.price}</p>
      </CardFooter>
    </Card>
  );
}