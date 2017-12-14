import React from 'react';
import Input from 'material-ui/Input';

export default field => <Input {...field.input} type={field.type} {...field.muiProps} />;
