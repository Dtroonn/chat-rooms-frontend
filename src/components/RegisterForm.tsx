import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinkMUI from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

export interface IRegisterFormValues {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const validationSchema = yup.object().shape({
    username: yup.string().required('Поле обязательно к заполнению'),
    email: yup
        .string()
        .email('Некорректный адрес эл. почты')
        .required('Поле обязательно к заполнению'),
    password: yup
        .string()
        .min(6, 'Пароль должен содержать минимум 6 символов')
        .required('Поле обязательно к заполнению'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
});

export const RegisterForm: React.FC = () => {
    const { handleSubmit, control, trigger, formState } = useForm<IRegisterFormValues>({
        resolver: yupResolver(validationSchema),
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<IRegisterFormValues> = (data): void => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name="username"
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        id="username"
                        name="username"
                        margin="normal"
                        fullWidth
                        variant="standard"
                        label="Имя пользователя *"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        onChange={field.onChange}
                        value={field.value}
                    />
                )}
            />
            <Controller
                control={control}
                name="email"
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        id="email"
                        name="email"
                        margin="normal"
                        fullWidth
                        variant="standard"
                        label="Почта *"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        onChange={field.onChange}
                        value={field.value}
                    />
                )}
            />

            <Controller
                control={control}
                name="password"
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        id="password"
                        name="password"
                        margin="normal"
                        fullWidth
                        type="password"
                        variant="standard"
                        label="Пароль *"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        value={field.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            field.onChange(e.currentTarget.value);
                            trigger('passwordConfirm');
                        }}
                    />
                )}
            />
            <Controller
                control={control}
                name="passwordConfirm"
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        id="passwordConfirm"
                        name="passwordConfirm"
                        margin="normal"
                        fullWidth
                        type="password"
                        variant="standard"
                        label="Подтвердите пароль *"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        value={field.value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            field.onChange(e.currentTarget.value);
                        }}
                    />
                )}
            />

            <Grid container justifyContent="flex-end">
                <Grid item>
                    <LinkMUI component={Link} to="/login" variant="body2">
                        Уже есть аккаунт? Войдите!
                    </LinkMUI>
                </Grid>
            </Grid>
            <Button
                disabled={!formState.isValid}
                sx={{ mt: 2 }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large">
                Регистрация
            </Button>
        </form>
    );
};
