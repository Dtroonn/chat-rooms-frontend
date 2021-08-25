import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinkMUI from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

export interface ILoginFormValues {
    username: string;
    password: string;
}

const validationSchema = yup.object().shape({
    username: yup.string().required("Поле обязательно к заполнению"),
    password: yup.string().required("Поле обязательно к заполнению"),
});

export const LoginForm: React.FC = () => {
    const { handleSubmit, control, formState } = useForm<ILoginFormValues>({
        resolver: yupResolver(validationSchema),
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<ILoginFormValues> = (data): void => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                    <TextField
                        id="username"
                        name="username"
                        margin="normal"
                        fullWidth
                        variant="outlined"
                        label="Имя пользователя или почта *"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        value={field.value}
                        onChange={field.onChange}
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
                        variant="outlined"
                        label="Пароль *"
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />

            <Grid container justifyContent="flex-end">
                <Grid item>
                    <LinkMUI component={Link} to="/register" variant="body2">
                        Еще нет аккаунта? Зарегистрируйтесь!
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
                Войти
            </Button>
        </form>
    );
};
