// React imports
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NewCampaignFormComponent } from "../components/newCampaign/NewCampaign.form";
import NewCampaignForm from "../interfaces/NewCampaign.form";
import SelectOptions from "../interfaces/SelectOptions";
import axios from "axios";
import Jdr from "../interfaces/Jdr.interface";
import { useNavigate } from "react-router-dom";


export const NewCampaignContainer = () => {
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState<string>("");
    const [jdrList, setJdrList] = useState<SelectOptions[]>([]);
    const [formData, setFormData] = useState<NewCampaignForm>({
        jdr: '-',
        name: '',
    });

    const handleInput = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            if(!checkIsFormValid()) return;
    
            const apiResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/campaigns/`, formData, { withCredentials: true });

            navigate("/campaigns");
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    }

    const checkIsFormValid = () => {
        let isValid = true;

        if(formData.jdr === "-") {
            isValid = false;
            setErrorMessage("Vous devez choisir un type de campagne");
        }
        if(!formData.name) {
            isValid = false;
            setErrorMessage("Vous devez entrer un nom");
        }
        
        return isValid;
    }

    const getJdrList = async () => {
        try {
            const apiResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/campaigns/jdrs`, { withCredentials: true });

            const optionList: SelectOptions[] = [];

            (apiResponse.data.jdrList as Jdr[]).forEach((jdr: Jdr) => {
                optionList.push(jdrToOption(jdr))
            })

            setJdrList(optionList);
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    }

    const jdrToOption = (jdr: Jdr): SelectOptions => {
        return {id: jdr.id, label: jdr.name}
    }

    useEffect(() => {
        getJdrList();
    }, []);

    return (
        <NewCampaignFormComponent
            errorMessage={errorMessage}
            formData={formData}
            jdrList={jdrList}
            handleInput={handleInput}
            handleSubmit={handleSubmit}
        />
    );
}