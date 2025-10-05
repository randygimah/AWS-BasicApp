import React, {
  useState,
  ReactNode,
  Children,
  PropsWithChildren,
  ReactElement,
  useRef,
} from "react";

interface TabPanelProps {
  id: string;
  children: ReactNode;
}

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Array<Tab>;
  children: ReactNode;
  defaultTab?: string;
}

const Tabs = ({ tabs, children, defaultTab }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab || tabs[0].id);
  const [focusedTab, setFocusedTab] = useState(0);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const activate = (index: number) => {
    setFocusedTab(index);
    setSelectedTab(tabs[index].id);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLUListElement> = (event) => {
    const last = tabs.length - 1;
    const i = focusedTab;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        activate(i === last ? 0 : i + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        activate(i === 0 ? last : i - 1);
        break;
    }
  };

  const handleClick =
    (tabId: string, index: number) => (event: React.MouseEvent) => {
      event.preventDefault();
      setSelectedTab(tabId);
      setFocusedTab(index);
    };

  const setTabRef =
    (index: number) =>
    (element: HTMLAnchorElement | null): void => {
      tabRefs.current[index] = element;
    };

  return (
    <div className="govuk-tabs" data-testid="govuk-tabs">
      <ul
        className="govuk-tabs__list"
        data-testid="govuk-tabs__list"
        role="tablist"
        onKeyDown={onKeyDown}
      >
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            className={`govuk-tabs__list-item${selectedTab === tab.id ? " govuk-tabs__list-item--selected" : ""}`}
            data-testid="govuk-tabs__list-item"
            role="presentation"
          >
            <a
              className="govuk-tabs__tab"
              data-testid="govuk-tabs__tab"
              href={`#${tab.id}`}
              id={`tab_${tab.id}`}
              role="tab"
              aria-selected={selectedTab === tab.id}
              aria-controls={tab.id}
              tabIndex={focusedTab === index ? 0 : -1}
              onClick={handleClick(tab.id, index)}
              ref={setTabRef(index)}
            >
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      {Children.map(children, (child) => {
        const item = child as ReactElement<PropsWithChildren<TabPanelProps>>;
        return (
          <div
            key={item.props.id}
            className={`govuk-tabs__panel${selectedTab !== item.props.id ? " govuk-tabs__panel--hidden" : ""}`}
            data-testid="govuk-tabs__panel"
            id={item.props.id}
            role="tabpanel"
            aria-labelledby={`tab_${item.props.id}`}
          >
            {item.props.children}
          </div>
        );
      })}
    </div>
  );
};

export const TabPanel = ({ children }: TabPanelProps) => <>{children}</>;

export default Tabs;
