import styled from 'styled-components';
import { 
    Border2pxBrandPurple, 
    Border2pxGrayNurse, 
    OpensansNormalBlack14px } from '../../../../../assets/styledMixins';

export const Styles = styled.div`
    .input{
        ${Border2pxGrayNurse}
        ${OpensansNormalBlack14px}
        width: calc(100% - 48px);
        padding: 0px 24px 0px 24px;
        height: 54px;
        background-color: var(--gallery);
        border-radius: 24px;
        box-shadow: 0px 2px 2px #0066cc2e;
        outline: none;
        &:focus{
            ${Border2pxBrandPurple}
        }
    }
`;