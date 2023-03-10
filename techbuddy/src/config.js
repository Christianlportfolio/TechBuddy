import { createChatBotMessage } from 'react-chatbot-kit';
import Answer from './components/answers/answer.jsx'
import Guide from './components/guides/guide.jsx'
import GuideLink from './components/guideslink/guidelink.jsx';
import GuideLinkAnswer from './components/guideslinkanswers/guidelinkanswer.jsx';
import NoAnswerForm from './components/handlenoanswer/noanswerform.jsx';



const botName = 'TechBuddy'


const config = {
    botName: botName,
    lang: "da",
    initialMessages: [createChatBotMessage(`Hej! Velkommen til ${botName}!
Jeg er din virtuelle guide og jeg kan svare på dit spørgsmål.`
    ),

    createChatBotMessage(`skriv: "guide" for hjælp`
    ),



],
    customComponents: {
        header: () => <div style={{ backgroundColor: '#e1f8ec', padding: "20px", borderRadius: "3px" }}>Energi Fyn</div>
    },
    state: {
        answers: [
            
        ]
    },
    widgets: [
        {
            widgetName: 'answer',
            widgetFunc: (props) => <Answer {...props} />,
            mapStateToProps: ['answers'],
        },
        {
            widgetName: "guide",
            widgetFunc: (props) => <Guide {...props} />,
        },
        {
            widgetName: "ellink",
            widgetFunc: (props) => <GuideLink {...props} />,
        },
        {

            widgetName: "guidelinkanswer",
            widgetFunc: (props) => <GuideLinkAnswer {...props} />,
            props: {
                id: 1,
                text: "Hvad er prisen på el?",
            },
        },
        {
            widgetName: "noanswerform",
            widgetFunc: (props) => <NoAnswerForm {...props} />,
        },
    ],
};

export default config;