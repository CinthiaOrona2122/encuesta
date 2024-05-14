import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dniCuilValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const DNI = control.get('dni')?.value;
        const CUIL = control.get('cuil')?.value;

        // Omitimos los 2 primeros caracteres y el ultimo, del cuil
        const CUILSinPrefijos = CUIL?.substring(2).slice(0, -1);
        //console.log('CUILSinPrefijos', CUILSinPrefijos);

        

        return DNI === CUILSinPrefijos ? null : { dniCuil: true };
        
    };   

}



     

