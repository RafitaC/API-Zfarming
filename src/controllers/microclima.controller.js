import Microclima from '../models/microclima';
export async function createMicroclima(req, res) {
    const { tempmin, tempmax, humrelmin, humrelmax, phideal, fotoPeriodo } = req.body;
    try {
        let newMicroclima = await Microclima.create({
            tempmin,
            tempmax,
            humrelmin,
            humrelmax,
            phideal,
            fotoPeriodo
        }, {
                fields: ['tempmin', 'tempmax', 'humrelmin', 'humrelmax', 'phideal', 'fotoPeriodo'],
            });
        if (newMicroclima) {
            return res.json({
                message: 'Microclima created successfully',
                data: newMicroclima
            });
        }

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });

    }

}

export async function getMicroclima(req, res) {
    try {
        const microclimas = await Microclima.findAll();
        res.json({
            data: microclimas
        });

    } catch (error) {
        console.log(error);

    }
}

export async function getOneMicroclima(req, res){
    const {id} = req.params;
    const microclima = await Microclima.findOne({
        where: {
            id
        }
    });
    res.json(microclima);
}

export async function deleteMicroclima(req, res){
    const {id} = req.params;
    const deleteRowCount = await  Microclima.destroy({
        where:{
            id
        }
    });
    res.json({
        message:' Microclima deleted succesfully',
        count: deleteRowCount
    });
}

export async function updateMicroclima(req, res){
    const {id} = req.params;
    const {tempmin, tempmax, humrelmin, humrelmax, phideal, fotoPeriodo}= req.body;

    const microclimas = await Microclima.findAll({
        attributes: ['id','tempmin', 'tempmax', 'humrelmin', 'humrelmax', 'phideal', 'fotoPeriodo'],
        where: {id
        }
    });
    if (microclimas.length > 0){
            microclimas.forEach( async microclima => {
                await microclima.update({
                    tempmin,
                    tempmax,
                    humrelmin,
                    humrelmax,
                    phideal,
                    fotoPeriodo
                });
            })
    }
    return res.json({
        message: 'Microclima updated successfully',
        data: microclimas
    });

}