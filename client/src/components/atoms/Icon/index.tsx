import { ElementType } from 'react';

export interface IIcon {
    icon: ElementType;
}

export const Icon = ({ icon: Icon, ...props }: IIcon) => <Icon {...props} />;