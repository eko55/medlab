import NavigationBar from '../../UI/NavigationBar/NavigationBar';
import LabList from '../../UI/Laboratories/LabList';
import DisplayLaboratories from '../../UI/Laboratories/DisplayLaboratories';
import GetLaboratory from '../../UI/Laboratories/GetLaboratory';
import ModifyLaboratory from '../../UI/Laboratories/ModifyLaboratory';
import CreateLaboratory from '../../UI/Laboratories/CreateLaboratory';
import DeleteLab from '../../UI/Laboratories/DeleteLab';

const Laboratories = () => {
    
    return (
        <>
            <NavigationBar />
            <DisplayLaboratories />
            <GetLaboratory />
            <ModifyLaboratory />
            <CreateLaboratory />
            <DeleteLab />
        </>
    );
};

export default Laboratories;
