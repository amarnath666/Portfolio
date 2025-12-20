"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import ViewArea from "./ui/view-area";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ErrorMessage } from "./ui/error-message";
import { ActionButton } from "./ui/action-button";

interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const ContactSection = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setStatus("submitting");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                reset();
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <ViewArea showBorderTop={false} >
            <div>
                <h2 className="dark:text-white text-black text-[20px] md:text-[24px] font-medium leading-none flex tracking-normal pb-6">
                    Liked what you saw? Let&apos;s build something together.
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-xl">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex flex-col gap-2">
                            <Label htmlFor="name">
                                Name <span className="text-black dark:text-white text-xs">*</span>
                            </Label>
                            <Input
                                id="name"
                                {...register("name", { required: "Name is required" })}
                                placeholder="Your Name"
                            />
                            {errors.name && (
                                <ErrorMessage>{errors.name.message}</ErrorMessage>
                            )}
                        </div>

                        <div className="flex-1 flex flex-col gap-2">
                            <Label htmlFor="phone">
                                Phone <span className="text-black dark:text-white text-xs">*</span>
                            </Label>
                            <Input
                                id="phone"
                                {...register("phone", { required: "Phone is required" })}
                                placeholder="+1 (123) 456-7890"
                            />
                            {errors.phone && (
                                <ErrorMessage>{errors.phone.message}</ErrorMessage>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="your@email.com"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="message">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            rows={4}
                            {...register("message")}
                            className="resize-none"
                            placeholder="Your message..."
                        />
                    </div>



                    <div className="mt-2">
                        <ActionButton
                            type="submit"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : status === "success" ? (
                                "Message Sent!"
                            ) : status === "error" ? (
                                "Failed to Send"
                            ) : (
                                "Send Message"
                            )}
                        </ActionButton>
                    </div>
                </form>
            </div>
        </ViewArea>
    );
};

export default ContactSection;