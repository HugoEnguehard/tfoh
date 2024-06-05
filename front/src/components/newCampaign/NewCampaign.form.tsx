

// Interfaces
import { Box } from "@mui/material";
import NewCampaignForm from "../../interfaces/NewCampaign.form";
import { CustomNewCampaignForm, NewCampaignGrid } from "../../pages/newCampaign/NewCampaign.wrappers";
import DividerHorizontal from "../DividerHorizontal";
import FormLabel from "../FormLabel/FormLabel";
import TypographyText from "../TypographyText";
import TypographyTitle from "../TypographyTitle";
import FormInputSelect from "../FormInputSelect";
import { ChangeEvent, FormEvent } from "react";
import FormInputText from "../InputText/InputText";
import GreenButton from "../GreenButton/GreenButton";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SelectOptions from "../../interfaces/SelectOptions";

interface NewCampaignFormProps {
    errorMessage: string,
    formData: NewCampaignForm,
    jdrList: SelectOptions[],
    handleInput: (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void,
    handleSubmit: (e: FormEvent) => void,
}

export const NewCampaignFormComponent = ({
    errorMessage,
    formData,
    jdrList,
    handleInput,
    handleSubmit,
}: NewCampaignFormProps) => {
    return (
        <NewCampaignGrid>
            <TypographyTitle text="CREER UNE CAMPAGNE" isCentered />
            <TypographyText text='Une nouvelle histoire pour une belle aventure !' isCentered />
            <TypographyText text='Attention : Si vous quittez avant d&apos;avoir finaliser la création de la campagne les données seront perdues!' isCentered />
            <DividerHorizontal />
            {errorMessage ? (<ErrorMessage text={errorMessage} />) : null}
            <CustomNewCampaignForm onSubmit={handleSubmit}>
                <FormLabel label="Type de campagne :" htmlFor="jdr"/>
                <Box width='300px' m='10px 0 20px 0'>
                    <FormInputSelect
                        name='jdr'
                        handleChange={handleInput}
                        formData={formData}
                        options={[
                            { id: '-', label: 'Sélectionner' },
                            ...jdrList,
                        ]}
                        incorrectField={formData.jdr === '-'}
                    />
                </Box>
                <FormLabel label="Nom de la campagne :" htmlFor="name" />
                <Box width='100%'>
                    <FormInputText 
                        placeholder="Une aventure rocambolesque !"
                        name='name'
                        handleChange={handleInput} 
                        formData={formData} 
                        incorrectField={!formData.name}
                        isRequired
                    />
                </Box>
                <GreenButton 
                    label="Finaliser" 
                    isSubmit 
                    customStyle={{borderRadius: '0', width: '250px', marginTop: '50px'}} 
                />
                
            </CustomNewCampaignForm>
        </NewCampaignGrid>
    );
}