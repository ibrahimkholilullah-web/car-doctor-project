import dbConnect, { collectionName } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

const Services =async () => {

const serviceCollection =  dbConnect(collectionName.servicesCollection)
const data = await serviceCollection.find({}).toArray();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Services {data.length}</h2>

      <div className=" pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 justify-center ">
        {data.map((service, index) => (
            <div key={index}>
                <div className=" border-2 rounded-xl p-2 ">
                    <Image src={service.img} width={300} height={150} alt={service.title} ></Image>
                    <p>{service.title}</p>
                    
                    <div className="flex justify-between items-center">
                    <p>{service.price}</p>
                        <Link href={`/services/${service._id}`}>
                            <FaAngleDoubleRight />
                        </Link>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
