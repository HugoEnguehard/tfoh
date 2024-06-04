import Campaign from "../models/Campaign";

class CampainService {
    async getAllCampaigns(): Promise<Campaign[]> {
        return await Campaign.findAll();
    }

    async getCampaignById(campaignId: string): Promise<Campaign | null> {
        return await Campaign.findByPk(campaignId);
    }

    async getCampaignByMJ(mjId: string): Promise<Campaign | null> {
        return await Campaign.findOne({ where: { id_mj: mjId} })
    }

    async createCampaign(name: string, id_jdr: string, id_mj: string, currentDate: string): Promise<Campaign> {
        return await Campaign.create({ name: name, id_jdr: id_jdr, id_mj: id_mj, date_creation: currentDate, status: 'Planned' })
    }

    // async editUser(user: User): Promise<User> {
    //     const existingUser = await User.findByPk(user.id);
    //     if (!existingUser) throw new Error('User not found');

    //     Object.assign(existingUser, user);
    //     return await existingUser.save();
    // }
}

export default new CampainService();