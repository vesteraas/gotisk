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
    Documents.insert({
        "id": 3,
        "year": 1578,
        "source": {
            "description": "Herredagen 1539-1664 (Kongens retterting), Domprotokoll 1 (RA/EA-2882/A/L0001), 1578-1578, oppb: Riksarkivet.",
            "permanentURL": "http://arkivverket.no/URN:rg_read/35535/7/"
        },
        "files": {
            "image": "image.jpg",
            "outline": "outline.svg"
        }
    });
    Documents.insert({
        "id": 4,
        "year": 1678,
        "source": {
            "description": "Sogn og Fjordane fylke, Sunnfjord sorenskriveri, Skifteprotokoll A 1 , 1677-1687, oppb: Statsarkivet i Bergen.",
            "permanentURL": "http://arkivverket.no/URN:sk_read/24184/37/"
        },
        "files": {
            "image": "image.jpg",
            "outline": "outline.svg"
        }
    });
}

