import React, { useState } from 'react'
import './CollectionList.css'

import { Link } from "react-router-dom";

function CollectionList({ collection }) {
  
    return (
        <>
            <Link to={`/collections/${collection.name}`} className="collection" key={collection.name}>
                <div className="collectionName">{collection.name}</div>
                <div className="collectionCount">{collection.count} tákn</div>
            </Link>
        </>
    );
  }

export default CollectionList