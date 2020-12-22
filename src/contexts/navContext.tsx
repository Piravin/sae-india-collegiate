import React, { Component, createContext, useContext } from 'react';

type NavContextType = {
    chosen: string
};

export const NavContext = createContext<NavContextType | null>(null);

export default class NavContextProvider extends Component<{}, NavContextType> {
    constructor(props?: any) {
        super(props);
        this.state = {
            chosen: "home"
        };
    }

    ComponentDidMount() {
        window.addEventListener("scroll", () => {
            console.log("Scrolling ....");
           setInterval(() => this.setState({ chosen: "news" }), 3000);
        });
    }

    render() {
        return(
            <NavContext.Provider value={{ chosen: this.state.chosen }}>
                { this.props.children }
            </NavContext.Provider>);
    }
}

export const useNavContext = () => useContext(NavContext);