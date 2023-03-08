import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {


    const handleHello = () => {
        const botMessage = createChatBotMessage("Hej! Dejligt at møde dig. Hvad kan jeg gøre for dig?")
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
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
            actionProviderTest: handleElectricityList,
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
        }));
    };

    const handleWrongAnswerForm = () => {
        const botMessage = createChatBotMessage(
            "Hej! velkommen til vores kundeservice. Du ønsker hjælp uden for vores åbningstider og bedes kontakte os i vores åbningstider 8-16 mandag til torsdag eller 8-15.30 fredag. Du kan udfylde nedenstående formular, så vender vi tilbage hurtigst muligt",
            {
              widget: 'wronganswerform',
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
                        handleWrongAnswerForm,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;