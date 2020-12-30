import React, { Component, createContext } from 'react';

interface NavContextState {
    chosen: string,
    main: number,
    about: number | null,
    events: number | null,
    teams: number | null,
    members: number | null
};

interface NavContextType extends NavContextState {
    setChosen: (chosen: string) => void,
    setValues: (val: number, action: string) => void
};

export const NavContext = createContext<NavContextType | null>(null);

export default class NavContextProvider extends Component<{}, NavContextState> {
    constructor(props?: any) {
        super(props);
        this.state = {
            chosen: "main",
            main: 0,
            about: null,
            events: null,
            teams: null,
            members: null
        };
        this.setChosen = this.setChosen.bind(this);
        this.setValues = this.setValues.bind(this);
    }

    setChosen(chosen: string): void{
        this.setState({chosen: chosen});
    }


    setValues(val: number, action: string): void{
        switch(action){
            case "main":
                this.setState({main: val});
                break;
            case "about":
                this.setState({about: val});
                break;
            case "events":
                this.setState({events: val});
                break;
            case "teams":
                this.setState({teams: val});
                break;
            case "members":
                this.setState({members: val});
                break;
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= this.state.main){
                if(window.scrollY > (this.state.about ? this.state.about : 0)){
                    if(window.scrollY > (this.state.events ? this.state.events : 0)){
                        if(window.scrollY > (this.state.teams ? this.state.teams : 0)){
                            if(window.scrollY > (this.state.members ? this.state.members : 0)) this.setChosen("members");
                            else if(this.state.chosen !== "teams") this.setChosen("teams");
                        }else if(this.state.chosen !== "events") this.setChosen("events");
                    }else if(this.state.chosen !== "about") this.setChosen("about");
                }else if(this.state.chosen !== "main") this.setChosen("main");
            }
        });
    }

    render() {
        return(
            <NavContext.Provider value={{ ...this.state, setChosen: this.setChosen, setValues: this.setValues }}>
                { this.props.children }
            </NavContext.Provider>);
    }
}