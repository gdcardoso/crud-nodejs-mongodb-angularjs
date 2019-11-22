import * as Yup from 'yup';
import Plans from '../schemas/Plans';

/**
 * inserindo no mongo
 * await Plans.create({ campos: valor })
 */

class PlanController {
  async index(req, res) {
    const _id = req.params.id;

    if (_id) {
      const plan = await Plans.findOne({ _id });
      return res.status(200).json(plan);
    }

    const plans = await Plans.find();

    return res.status(200).json(plans);
  }

  async store(req, res) {
    const {
      description,
      initialValidity,
      finalValidity,
      price,
      discount,
    } = req.body;

    const numberPlans = await Plans.count();

    const schema = Yup.object().shape({
      description: Yup.string().required(),
      initialValidity: Yup.string().required(),
      finalValidity: Yup.string().required(),
      price: Yup.number().required(),
      discount: Yup.number().required(),
    });

    const plan = {
      code: numberPlans + 1,
      description,
      initialValidity,
      finalValidity,
      price,
      discount,
    };

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    await Plans.create(plan);

    res.status(200).json({ ok: true });
  }

  async update(req, res) {
    const plan = req.body;

    const schema = Yup.object().shape({
      description: Yup.string().required(),
      initialValidity: Yup.string().required(),
      finalValidity: Yup.string().required(),
      price: Yup.number().required(),
      discount: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const planUpdate = await Plans.findOne({ _id: plan._id });

    await planUpdate.updateOne(plan);

    return res.status(200).json({ ok: true });
  }

  async delete(req, res) {
    const _id = req.params.id;

    await Plans.findOne({ _id }).remove();

    return res.status(200).json({ ok: true });
  }
}

export default new PlanController();
