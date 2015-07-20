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
        },
        "flow": []
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
        },
        "flow": [
            {
                line: 1,
                groups: ['g4156', 'g4165', 'g4176', 'g4186', 'g4196', 'g4204', 'g4211', 'g4220', 'g4228', 'g4295', 'g4438', 'g4446', 'g4453', 'g4462', 'g4470', 'g4477', 'g4447', 'g4500', 'g4512', 'g4520', 'g4527', 'g4536', 'g4548', 'g4557', 'g4564', 'g4571', 'g4578', 'g4587', 'g4595']
            },
            {
                line: 2,
                groups: ['g4268', 'g4275', 'g4427', 'g4287', 'g4294', 'g4301', 'g4249', 'g4177', 'g4187', 'g4197', 'g4205', 'g4212', 'g4221', 'g4229', 'g4258', 'g4243', 'g4250', 'g4746', 'g4308', 'g4324', 'g4332', 'g4343', 'g4348', 'g4602', 'g4355', 'g4362', 'g4369', 'g4378', 'g4390', 'g4401', 'g4409']
            },
            {
                line: 3,
                groups: ['g4645', 'g4652', 'g4661', 'g4699', 'g4669', 'g4678', 'g4686', 'g4692', 'g4706', 'g4713', 'g4720', 'g4727', 'g4734', 'g4741', 'g4609', 'g4618', 'g4624', 'g4631', 'g4638', 'g4757', 'g4767', 'g4777', 'g4784', 'g4791', 'g4798', 'g4805', 'g4812', 'g4819', 'g4826']
            },
            {
                line: 4,
                groups: ['g4833', 'g4840', 'g4847', 'g4854', 'g4861', 'g4868', 'g4456', 'g4463', 'g3307', 'g3316', 'g3325', 'g3334', 'g3348', 'g3343', 'g3357', 'g3370', 'g3380', 'g3389', 'g3400', 'g3413', 'g3423', 'g3432', 'g3441', 'g3457', 'g3467', 'g3476', 'g3485', 'g3494', 'g3507', 'g3516', 'g3525']
            }
        ]
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
    Documents.insert({
        "id": 4,
        "year": 1578,
        "source": {
            "description": "Herredagen 1539-1664 (Kongens retterting), Domprotokoll 1 (RA/EA-2882/A/L0001), 1578-1578, oppb: Riksarkivet.",
            "permanentURL": "http://arkivverket.no/URN:rg_read/35535/7/"
        },
        "files": {
            "image": "image.jpg",
            "outline": "outline.svg"
        },
        "flow": []
    });
}

