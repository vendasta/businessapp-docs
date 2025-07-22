import React from 'react';

interface ChatMessage {
  content: string;
  sender: 'user' | 'ai';
}

export interface ChatBubbleProps {
  /** Array of chat messages to display */
  messages: ChatMessage[];
}

function ChatBubble({ messages }: ChatBubbleProps): JSX.Element {
  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`chat-message ${message.sender === 'user' ? 'chat-user' : 'chat-ai'}`}
        >
          <div 
            className="chat-content"
            dangerouslySetInnerHTML={{ __html: message.content }}
          />
        </div>
      ))}
    </div>
  );
}

export default ChatBubble;

export interface ChatExampleProps {
  /** Content to wrap in a chat example container */
  children: React.ReactNode;
}

export function ChatExample({ children }: ChatExampleProps): JSX.Element {
  return (
    <div className="chat-example-wrapper">
      {children}
    </div>
  );
}

export interface ChatUserMessageProps {
  /** Content of the user message */
  children: React.ReactNode;
}

export function ChatUserMessage({ children }: ChatUserMessageProps): JSX.Element {
  return (
    <div className="chat-container">
      <div className="chat-message chat-user">
        <div className="chat-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export interface ChatAIMessageProps {
  /** Content of the AI message */
  children: React.ReactNode;
}

export function ChatAIMessage({ children }: ChatAIMessageProps): JSX.Element {
  return (
    <div className="chat-container">
      <div className="chat-message chat-ai">
        <div className="chat-content">
          {children}
        </div>
      </div>
    </div>
  );
} 