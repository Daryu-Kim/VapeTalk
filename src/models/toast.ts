import {toasts} from "svelte-toasts";

export const showSuccessToast = (title: string, description: string, onClick: Function, onRemove: Function) => {
    return toasts.add({
        title: title,
        description: description,
        duration: 2500,
        placement: 'top-center',
        type: 'success',
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        onClick: onClick,
        onRemove: onRemove,
    });
};

export const showErrorToast = (title: string, description: string, onClick: Function, onRemove: Function) => {
    return toasts.add({
        title: title,
        description: description,
        duration: 2500,
        placement: 'top-center',
        type: 'error',
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        onClick: onClick,
        onRemove: onRemove,
    });
};

export const showInfoToast = (title: string, description: string, onClick: Function, onRemove: Function) => {
    return toasts.add({
        title: title,
        description: description,
        duration: 2500,
        placement: 'top-center',
        type: 'info',
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        onClick: onClick,
        onRemove: onRemove,
    });
};

export const showWarningToast = (title: string, description: string, onClick: Function, onRemove: Function) => {
    return toasts.add({
        title: title,
        description: description,
        duration: 2500,
        placement: 'top-center',
        type: 'warning',
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
        onClick: onClick,
        onRemove: onRemove,
    });
};

export const removeAllToasts = () => {
    return toasts.clearAll();
}
