import { useForm } from '@mantine/form'
import React from 'react'
import { makeRequestOne } from '../config/config'
import { URLS } from '../config/constants'
import { showNotification } from '@mantine/notifications'
import { IconAlertCircle } from '@tabler/icons'
import { TextInput, Textarea } from '@mantine/core'

const Contact = () => {
    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            telephone: "",
            subject: "",
            message: ""
        },
        validate: {
            name: value => value === "" ? "Enter your name" : null,
            email: value => value === "" ? "Your Email is required" : null,
            telephone: value => value === "" ? "Enter your Phone Number" : null,
            subject: value => value === "" ? "Describe your query in a few words" : null,
            message: value => value === "" ? "Message is required" : null,
        }
    })


    const handleContact = () => {
        makeRequestOne(URLS.CONTACT, 'POST', {}, { ...form.values }, {}).then(res => {
            showNotification({
                title: "Message sent successfully",
                message: "Thank you for contacting us.",
                color: "green",
                icon: <IconAlertCircle />
            })
            form.reset()
        }).catch(() => { })
    }

    return (
        <>
            <div>
                {/* Page Title (Light)*/}
                <div className="bg-secondary py-4">
                    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start">
                                    <li className="breadcrumb-item">
                                        <a className="text-nowrap" href="index.html">
                                            <i className="ci-home" />
                                            Home
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-nowrap active"
                                        aria-current="page"
                                    >
                                        Contacts
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                            <h1 className="h3 mb-0">Contacts</h1>
                        </div>
                    </div>
                </div>
                {/* Split section: Map + Contact form*/}
                <div className="container-fluid px-0" id="map">
                    <div className="row g-0">
                        <div className="col-lg-6 iframe-full-height-wrap">
                            <iframe
                                className="iframe-full-height"
                                width={600}
                                height={250}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9064.699095808513!2d37.571675720706835!3d0.34536108262035947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1788689133feb26f%3A0x18574783a3b2319d!2sIsiolo%20Market!5e0!3m2!1sen!2ske!4v1686641631573!5m2!1sen!2ske"
                            />
                        </div>
                        <div className="col-lg-6 px-4 px-xl-5 py-5 border-top">
                            <h2 className="h4 mb-4">Drop us a line</h2>
                            <form onSubmit={form.onSubmit((values) => handleContact())} className="mb-3" autoComplete='off'>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <TextInput
                                            label="Your name"
                                            withAsterisk
                                            placeholder="John Doe"
                                            required=""
                                            {...form.getInputProps("name")}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <TextInput
                                            label="Email Adress"
                                            withAsterisk
                                            placeholder="johndoe@email.com"
                                            required=""
                                            {...form.getInputProps("email")}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <TextInput
                                            label="Phone Number"
                                            withAsterisk
                                            placeholder="+254 700 000 000"
                                            required=""
                                            {...form.getInputProps("telephone")}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <TextInput
                                            label="Subject"
                                            withAsterisk
                                            placeholder="Provide short title of your request"
                                            required=""
                                            {...form.getInputProps("subject")}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <Textarea
                                            label="Message"
                                            withAsterisk
                                            minRows={6}
                                            placeholder="Please describe in detail your request"
                                            {...form.getInputProps("message")}
                                        />
                                        <button className="btn btn-primary mt-4" type="submit">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact