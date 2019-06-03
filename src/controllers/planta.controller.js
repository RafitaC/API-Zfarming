import Planta from '../models/planta';

export async function createPlanta(req, res) {
    const { nombreComun, nombreCientifico, tiempoCosecha, microclimaId } = req.body;

    try {
        let newPlanta = await Planta.create({
            nombreComun,
            nombreCientifico,
            tiempoCosecha,
            microclimaId
            
        }, {
                fields: ['nombreComun', 'nombreCientifico', 'tiempoCosecha', 'microclimaId']
            });
        if (newPlanta) {
            return res.json({
                message: 'Planta created successfully',
                data: newPlanta
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Somethins goes wrong',
            data: {}
        });

    }


}

export async function getPlanta(req, res) {
    const plantas = await Planta.findAll();
    res.json({
        data: plantas
    });
}