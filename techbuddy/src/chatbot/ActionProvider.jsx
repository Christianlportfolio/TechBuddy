import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {


    const handleHello = () => {
        const botMessage = createChatBotMessage("Hej! Dejligt at møde dig. Hvad kan jeg gøre for dig?")
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
            actionProviderHandleNoAnswerForm: handleNoAnswerForm
          }));
    };

    const handleAnswer = () => {
        const botMessage = createChatBotMessage(
            "Dit svar kommer her...",
            {
              widget: 'answer',
            }
        );                   
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
            actionProviderHandleNoAnswerForm: handleNoAnswerForm
        }));
    };

    const handleGuideList = () => {
        const botMessage = createChatBotMessage(
            "kategorier",
            {
              widget: 'guide',
            }
        );                   
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
            actionProviderhandleElectricityList: handleElectricityList,
            actionProviderHandleNoAnswerForm: handleNoAnswerForm
        }));
    };

    const handleElectricityList = () => {
        const botMessage = createChatBotMessage(
            "Vælg et spørgsmål...",
            {
              widget: 'ellink',
            }
        );                   
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
            actionProviderHandleEletricityAnswer: handleEletricityAnswer,
            actionProviderHandleNoAnswerForm: handleNoAnswerForm
        }));
    };

    const handleEletricityAnswer = () => {
        const botMessage = createChatBotMessage(
            "Dit svar kommer her...",
            {
              widget: 'guidelinkanswer',
            }
        );                   
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
            actionProviderHandleNoAnswerForm: handleNoAnswerForm
        }));
    };

    const handleNoAnswerForm = () => {
        const botMessage = createChatBotMessage(
            "Kundeservice",
            {
              widget: 'noanswerform',
            }
        );                   
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };


    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleAnswer,
                        handleGuideList,
                        handleElectricityList,
                        handleEletricityAnswer,
                        handleNoAnswerForm,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;