'use client'

import React, {useEffect, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {toast, ToastContainer} from 'react-toastify';
import {sendEmail, EmailData} from '@/service/EmailService';

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<EmailData>();

    useEffect(() => {
        if (errors.name) toast.info('Veuillez saisir votre nom complet');
        if (errors.email) {
            if (errors.email.type === 'pattern') {
                toast.info('Veuillez entrer une adresse email valide');
            } else {
                toast.info('Veuillez saisir votre adresse email');
            }
        }
        if (errors.phone) {
            if (errors.phone.type === 'pattern') {
                toast.info('Veuillez entrer un numéro valide');
            } else if (errors.phone.type === 'minLength') {
                toast.info('Le numéro doit contenir au moins 10 chiffres');
            } else {
                toast.info('Veuillez saisir votre numéro de téléphone');
            }
        }
        if (errors.subject) toast.info('Veuillez saisir le sujet de votre message');
        if (errors.message) toast.info('Veuillez saisir votre message');
    }, [errors]);

    const onSubmit: SubmitHandler<EmailData> = (data, event) => {
        event?.preventDefault();
        setIsLoading(true);

        sendEmail(data)
            .then(() => {
                toast.success('Votre message a été envoyé avec succès');
            })
            .catch(() => {
                toast.error("Une erreur est survenue lors de l'envoi de votre message");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <section>
            <div className="flex justify-center items-center pt-20 lg:pt-40 lg:pb-10 bg-white flex-col lg:flex-row">
                <div className="container mx-auto lg:mb-0 xl:px-4 lg:w-1/2">
                    <div className="relative w-full aspect-video mb-6">
                        <iframe
                            className="rounded-md h-[400px] xl:h-[600px] xl:w-2/3 mx-auto"
                            src="https://www.youtube.com/embed/o8HjlwEzJhw?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>

                <form className="space-y-6 relative rounded-lg bg-white p-8 shadow-lg sm:p-12 h-auto lg:w-1/2"
                      onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0 space-y-6">
                        <input
                            type="text"
                            placeholder="Nom complet"
                            className="w-full h-10 lg:h-14 px-4 border border-gray-800 rounded"
                            {...register('name', {required: true, maxLength: 80})}
                        />
                        <input
                            type="email"
                            placeholder="Votre Email"
                            className="w-full h-10 lg:h-14 px-4 border border-gray-800 rounded"
                            {...register('email', {
                                required: true,
                                pattern: /^\S+@\S+$/i,
                                maxLength: 80,
                            })}
                        />
                        <input
                            type="tel"
                            placeholder="Votre Numéro de Téléphone"
                            className="w-full h-10 lg:h-14 px-4 border border-gray-800 rounded"
                            {...register('phone', {
                                required: true,
                                pattern: /^[0-9]+$/,
                                minLength: 10,
                            })}
                        />
                        <input
                            type="text"
                            placeholder="Votre entreprise"
                            className="w-full h-10 lg:h-14 px-4 border border-gray-800 rounded"
                            {...register('company', {maxLength: 80})}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Sujet de votre message"
                        className="w-full h-10 lg:h-14 px-4 border border-gray-800 rounded"
                        {...register('subject', {required: true, maxLength: 80})}
                    />
                    <textarea
                        placeholder="Votre Message"
                        defaultValue=""
                        className="w-full h-40 p-4 border border-gray-800 rounded"
                        {...register('message', {required: true})}
                    />
                    <div>
                        <button
                            type="submit"
                            className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                        >
                            {isLoading ? (
                                <svg
                                    className="animate-spin h-5 w-5 text-secondary mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            ) : (
                                'Envoyer'
                            )}
                        </button>
                    </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
            <div className="container my-4 px-10">
                            <span className="mb-4 block text-base font-semibold text-primary">
                              Besoin de conseils? Nous sommes là pour vous aider
                            </span>
                <h2 className="mb-6 text-[20px] font-bold uppercase text-dark lg:text-[36px] xl:text-[40px]">
                    Dites-nous tout!
                </h2>
                <div className="flex flex-col lg:flex-row justify-between space-y-6">
                    <div className="flex items-center justify-center w-full max-w-[370px]">
                        <div
                            className="mr-6 flex h-[30px] xl:h-[60px] xl:w-full xl:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="text-md lg:text-xl font-bold text-dark">
                                Notre Localisation
                            </h4>
                            <p className="text-base text-body-color">
                                Vila n°4, RC, Frantz Fanon, Boumerdes
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center xl:w-full xl:max-w-[370px] ">
                        <div
                            className="mr-6 flex h-[30px] xl:h-[60px] xl:w-full xl:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_941_17577)">
                                    <path
                                        d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.19997 22.8499C5.84997 19.4999 3.24997 15.7499 1.89997 12.2999C0.39997 8.59994 0.54997 5.54994 2.29997 3.84994C2.34997 3.79994 2.44997 3.74994 2.49997 3.69994L6.69997 1.19994C7.74997 0.599942 9.09997 0.899942 9.79997 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499ZM3.79997 5.54994C2.84997 6.59994 2.89997 8.74994 3.99997 11.4999C5.24997 14.6499 7.64997 18.0999 10.8 21.2499C13.9 24.3499 17.4 26.7499 20.5 27.9999C23.2 29.0999 25.35 29.1499 26.45 28.1999L28.85 24.0999C28.85 24.0499 28.85 24.0499 28.85 23.9999L24.45 21.0499C24.45 21.0499 24.35 21.0999 24.25 21.2499L23.15 22.8499C22.45 23.8499 21.1 24.1499 20.1 23.4999C13.8 19.5999 9.89997 14.1499 8.49997 11.9499C7.84997 10.8999 8.09997 9.54994 9.09997 8.84994L10.9 7.59994V7.54994L7.94997 3.14994C7.94997 3.09994 7.89997 3.09994 7.84997 3.14994L3.79997 5.54994Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M24.35 14.7002C23.8 14.7002 23.3 14.3002 23.25 13.7002C22.95 11.0002 20.85 8.90018 18.15 8.55018C17.55 8.50018 17.1 7.90018 17.15 7.30018C17.2 6.70018 17.8 6.25018 18.4 6.30018C22.15 6.75018 25.05 9.65018 25.5 13.4002C25.55 14.0002 25.15 14.5502 24.5 14.6502C24.4 14.7002 24.35 14.7002 24.35 14.7002Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_941_17577">
                                        <rect width="32" height="32" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="text-md lg:text-xl font-bold text-dark">
                                Numéro de Téléphone
                            </h4>
                            <p className="text-base text-body-color">
                                0563475646 - 0781301112
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-[370px]">
                        <div
                            className="mr-6 flex h-[30px] xl:h-[60px] xl:w-full xl:max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="w-full">
                            <h4 className="text-md lg:text-xl font-bold text-dark">
                                Adresse Email
                            </h4>
                            <p className="text-base text-body-color">
                                <a href="mailto:Info@dinas-company.com"> Info@dinas-company.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
