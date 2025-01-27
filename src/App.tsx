import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Exercises from './pages/Exercises';
import Settings from './pages/Settings';
import Affirmations from './components/Affirmations';
import BreakReminder from './components/BreakReminder';
import Gratitude from './components/Gratitude';
import MoodTracker from './components/MoodTracker';
import Progress from './components/Progress';
import './styles/theme';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/exercises" component={Exercises} />
        <Route path="/settings" component={Settings} />
        <Route path="/affirmations" component={Affirmations} />
        <Route path="/break-reminder" component={BreakReminder} />
        <Route path="/gratitude" component={Gratitude} />
        <Route path="/mood-tracker" component={MoodTracker} />
        <Route path="/progress" component={Progress} />
      </Switch>
    </Router>
  );
};

export default App;