if (Documents.find().count() == 0) {
    Documents.insert({
        "id": 1,
        "year": 1718,
        "source": {
            "description": "Sogn og Fjordane fylke, Askvoll, Ministerialbok nr. A 4 (1718-1722), Kronologisk liste 1718, side 2. ",
            "permanentURL": "http://www.arkivverket.no/URN:kb_read?idx_kildeid=8592&idx_id=8592&uid=ny&idx_side=-3"
        },
        "files": {
            "image": "image.jpg",
            "outline": "outline.svg"
        }
    });
    Documents.insert({
        "id": 2,
        "year": 1627,
        "source": {
            "description": "Finnmark fylke, Finnmark sorenskriveri, Tingbok 6 , 1620-1627, oppb: Statsarkivet i Tromsø.",
            "permanentURL": "http://arkivverket.no/URN:rg_read/28721/2/"
        },
        "files": {
            "image": "image.jpg",
            "outline": "outline.svg"
        }
    });
    /*
    Documents.insert({
        "id": 3,
        "year": 1669,
        "source": {
            "description": "Bergen fylke, Nykirken, Ministerialbok nr. A 1 (1668-1820), Fødte og døpte 1669, side 174.",
            "permanentURL": "http://www.arkivverket.no/URN:kb_read?idx_kildeid=8715&idx_id=8715&uid=ny&idx_side=-117"
        },
        "files": {
            "image": "image.jpg",
            "outline": "outline.svg"
        }
    });
    */
};
