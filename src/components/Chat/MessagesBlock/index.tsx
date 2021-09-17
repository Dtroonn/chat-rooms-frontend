import React from "react";
import io from "socket.io-client";

import VeraJpg from "./../../../assets/Vera.jpg";
import "react-perfect-scrollbar/dist/css/styles.css";

import Avatar from "@material-ui/core/Avatar";

import { Message } from "./Message";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Button } from "@material-ui/core";

const items = [
    {
        id: 1,
        fullname: "Вера Балаева",
        text: "Привет Дима Еблан фвфцв фвфц фвцф фвфц фвцф фвцфв  фвфцв фвфц фвцф фвфц фвцф фвцфв фвфцв фвфц фвцф фвфц фвцф фвцфв  фвфцв фвфц фвцф фвфц фвцф фвцфв ",
        avatar: VeraJpg,
    },
    {
        id: 2,
        fullname: "Дмитрий Белан",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/12/08de3bbea2bf9268efcb25b1d948fbc7.jpg ",
    },
    {
        id: 2,
        fullname: "Дмитрий Белан",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/12/08de3bbea2bf9268efcb25b1d948fbc7.jpg ",
    },
    {
        id: 2,
        fullname: "Дмитрий Белан",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/12/08de3bbea2bf9268efcb25b1d948fbc7.jpg ",
    },
    {
        id: 2,
        fullname: "Дмитрий Белан",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/12/08de3bbea2bf9268efcb25b1d948fbc7.jpg ",
    },
    {
        id: 2,
        fullname: "Дмитрий Белан",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/12/08de3bbea2bf9268efcb25b1d948fbc7.jpg ",
    },
    {
        id: 2,
        fullname: "Дмитрий Белан",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/12/08de3bbea2bf9268efcb25b1d948fbc7.jpg ",
    },
    {
        id: 3,
        fullname: "Сергей лазарев",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/ESC2016_-_Russia_Meet_%26_Greet_08_%28crop%29.jpg/274px-ESC2016_-_Russia_Meet_%26_Greet_08_%28crop%29.jpg",
    },
    {
        id: 3,
        fullname: "Сергей лазарев",
        text: "Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  adawd Хелло SW adwad adwad adawd  Хелл  ad",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/ESC2016_-_Russia_Meet_%26_Greet_08_%28crop%29.jpg/274px-ESC2016_-_Russia_Meet_%26_Greet_08_%28crop%29.jpg",
    },
];

const socket = io("http://localhost:5555");

export const MessagesBlock: React.FC = () => {
    const [messages, setMessages] = React.useState(items);

    const perfectScrollbarRef = React.useRef<HTMLElement>();

    const func = (messages: any[]) => {
        const newItems: any = [];

        messages.forEach((message, index) => {
            if (newItems.length === 0) {
                newItems[0] = [message];
                return;
            }

            if (message.id !== messages[index - 1]?.id) {
                newItems[newItems.length] = [message];
                return;
            }

            newItems[newItems.length - 1].push(message);
        });

        return newItems;
    };

    const messagesForChat = func(messages);

    // React.useEffect(() => {
    //     if (perfectScrollbarRef.current) {
    //         //perfectScrollbarRef.current.scrollTop = 1000;
    //     }
    // }, []);

    // const handleDeleteMessages = () => {
    //     setMessages(items.filter((item) => item.id !== 2));
    // };

    return (
        <PerfectScrollbar
            component="div"
            containerRef={(container: HTMLElement) => (perfectScrollbarRef.current = container)}
            style={{
                flexDirection: "column",
                display: "flex",
                flex: 1,
                overflow: "auto",
                padding: 20,
            }}>
            {messagesForChat.map((messages: any, index: number) => (
                <div
                    key={index}
                    style={{
                        alignSelf: !index ? "flex-end" : "flex-start",
                        marginTop: !index ? "auto" : 0,
                        display: "flex",
                        marginBottom: index === messagesForChat.length - 1 ? 0 : 24,
                    }}>
                    <Avatar
                        sx={{
                            width: 35,
                            height: 35,
                            position: "sticky",
                            bottom: 0,
                            zIndex: messages.length - index,
                            mt: "auto",
                            mr: 1,
                            mb: -0.7,
                        }}
                        src={messages[0].avatar}
                    />
                    <div>
                        {messages.map((message: any, index: number) => (
                            <div key={index}>
                                <Message showArrow={index === messages.length - 1} {...message} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* {messages.map((message, index) => (
                <React.Fragment>
                    {message.id !== messages[index + 1]?.id && (
                        <Avatar
                            sx={{
                                width: 35,
                                height: 35,
                                position: "sticky",
                                bottom: 0,
                                zIndex: messages.length - index,
                            }}
                            src={message.avatar}
                        />
                    )}
                    <div
                        key={index}
                        style={{
                            alignSelf: !index ? "flex-end" : "flex-start",
                            marginTop: !index ? "auto" : 0,
                            marginBottom: message.id !== messages[index + 1]?.id ? 20 : 10,
                        }}>
                        <Message showAvatar={message.id !== messages[index + 1]?.id} {...message} />
                    </div>
                </React.Fragment>
            ))} */}
        </PerfectScrollbar>
    );
};
