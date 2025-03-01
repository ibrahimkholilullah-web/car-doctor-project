import dbConnect, { collectionName } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';

const page = async ({params}) => {
    const p = await params;
    const servicesCollection = dbConnect(collectionName.servicesCollection)
    const data = await servicesCollection.findOne({_id : new ObjectId(p.id)})

    return (
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default page;